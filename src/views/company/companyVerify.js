import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { verifyCompany } from '../../api/companyApi';
import Loading from '../../components/Loading/Loading';

export default function CompanyVerify() {
  const history = useHistory();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const verificationId = history.location.pathname.split('companyVerify/')[1];
    const userInformations = await verifyCompany({ verificationId });

    

    const mainUsers = await JSON.parse(
      localStorage.getItem('userInformations')
    );

    if (mainUsers && mainUsers.token) {
      if (mainUsers.isFirstLogin === 'false') {
        history.push({
          pathname: `/companyProfile`,
          search: `?id=${mainUsers ? mainUsers._id : null}`,
        });
      } else {
        history.push({
          pathname: '/companyBasics',
        });
      }
    } else {
      history.push({
        pathname: '/login',
        state: 1,
      });
    }
  };

  return <Loading />;
}
