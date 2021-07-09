import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { verifyTalent } from '../../api/talentApi';
import Loading from '../../components/Loading/Loading';

export default function TalentVerify() {
  const history = useHistory();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const verificationId = history.location.pathname.split('talentVerify/')[1];

    const userInformations = await verifyTalent({ verificationId });

    

    const mainUsers = await JSON.parse(
      localStorage.getItem('userInformations')
    );

    if (mainUsers && mainUsers.token) {
      if (mainUsers.isFirstLogin === 'false') {
        history.push({
          pathname: `/talentProfile`,
          search: `?id=${mainUsers ? mainUsers._id : null}`,
        });
      } else {
        history.push({
          pathname: '/talentBasics',
        });
      }
    } else {
      history.push({
        pathname: '/login',
        state: 0,
      });
    }
  };

  return <Loading />;
}
