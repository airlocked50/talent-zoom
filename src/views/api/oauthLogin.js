import axios from 'axios';
import { loginTalent } from '../../api/talentApi';
import { HEADER, ID } from '../../constants/header';
import { getURLWithQueryParams, LINKEDIN_URL_LOGIN } from '../../helpers/auth';
import Cookies from 'cookies';

const OauthLogin = async (req, res) => {
  const LINKEDIN_URL_LOGIN = getURLWithQueryParams(
    'https://www.linkedin.com/oauth/v2/accessToken',
    {
      grant_type: 'authorization_code',
      code: req.query.code,
      redirect_uri: process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_LOGIN,
      client_id: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET,
    }
  );
  let tok;
  let resp = await fetch(LINKEDIN_URL_LOGIN, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
  if (resp.ok) tok = await resp.json();
  
  let { access_token, expires_in } = tok;

  // Query to exchange our token for user infos
  let auth = 'Bearer ' + access_token;
  let u = {};
  let usr = await fetch('https://api.linkedin.com/v2/me', {
    method: 'GET',
    headers: { Connection: 'Keep-Alive', Authorization: auth },
  });
  
  if (u.localizedFirstName) {
    let body = {
      linkedInId: u.id,
    };
    const userInformations = await loginTalent({ body: body });
    
    if (userInformations !== null || undefined) {
      axios.defaults.headers.token = userInformations.tokenCode;
      HEADER.tokenCode = userInformations.tokenCode;
      ID._id = userInformations._id;
      if (userInformations.isFirstLogin === 'false') {
        res.redirect(`/load/${u.id}`);
      } else {
        res.redirect(`/talent/${u.id}`);
      }
    }
  }
};

export default OauthLogin;
