import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginTalent } from '../../api/talentApi';
import Loading from '../../components/Loading/Loading';
import { setUserData } from '../../redux/actions/userAction';

export default function EmptyLoadPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const linkedInId = history.location.search.split('?id=')[1];
    let body = {
      linkedInId: linkedInId,
    };
    const userInformations = await loginTalent({ body: body });

    await localStorage.setItem(
      'userInformations',
      JSON.stringify(userInformations)
    );
    await dispatch(setUserData(JSON.stringify(userInformations)));

    if (userInformations.isFirstLogin === 'false') {
      history.push({
        pathname: `/talentProfile`,
        search: `?id=${userInformations ? userInformations._id : null}`,
      });
    } else {
      history.push({
        pathname: '/talentBasics',
      });
    }
  };

  return <Loading />;
}
