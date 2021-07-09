import { createTalent } from '../../api/talentApi';
import { getURLWithQueryParams } from '../../helpers/auth';

const Oauth = async (req, res) => {
  // Query to exchange our authorization code for an access token
  const LINKEDIN_URL = getURLWithQueryParams(
    'https://www.linkedin.com/oauth/v2/accessToken',
    {
      grant_type: 'authorization_code',
      code: req.query.code,
      redirect_uri: process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT,
      client_id: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
      client_secret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET,
    }
  );
  let tok;
  let resp = await fetch(LINKEDIN_URL, {
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
  if (usr.ok) u = await usr.json();
  
  if (u.localizedFirstName) {
    let body = {
      name: u.localizedFirstName,
      surname: u.localizedLastName,
      linkedInId: u.id,
    };
    res.redirect('/login');
    const user = await createTalent({ body: body });
  
    if (user === null) {
      res.redirect('/login');
    } else {
      res.redirect('/login');
    }
  }
};

export default Oauth;
