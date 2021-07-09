/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import GridItem from '../../components/material-ui-component/Grid/GridItem.js';
import GridContainer from '../../components/material-ui-component/Grid/GridContainer.js';
import Card from '../../components/material-ui-component/Card/Card.js';
import CardHeader from '../../components/material-ui-component/Card/CardHeader.js';
import CardAvatar from '../../components/material-ui-component/Card/CardAvatar.js';
import CardBody from '../../components/material-ui-component/Card/CardBody.js';
import { useHistory } from 'react-router-dom';
import { getEmployerById } from '../../api/companyApi.js';
import CompanyAbout from '../../components/Company/CompanyAbout.js';
import CompanyVision from '../../components/Company/CompanyVision.js';
import CompanyContract from '../../components/Company/CompanyContract.js';
import { Avatar } from '@material-ui/core';
import Loading from '../../components/Loading/Loading.js';
import EditCompany from '../../components/EditProfile/EditCompany.js';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/actions/userAction.js';
import styles from './inbox.module.css';

export default function CompanyProfile() {
  const [user, setUser] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [mainUser, setMainUser] = useState();
  const [hideId, setHideId] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    window.dataLayer.push({
      event: 'pageview'
    })
    setHideId(history.location.search.split('?id=')[1]);
    loadData();
  }, []);

  const loadData = async () => {
    setIsLogin(false);
    const profileId = history.location.search.split('?id=')[1];
    const mainUsers = await JSON.parse(
      localStorage.getItem('userInformations')
    );
    const userInfos = await getEmployerById({
      _id: profileId,
      token: mainUsers.tokenCode,
    });
    if (userInfos !== null || undefined) {
      setMainUser(mainUsers);
      setUser(userInfos[0]);
      setIsLogin(true);
    } else {
      await localStorage.setItem('userInformations', null);
      await dispatch(setUserData(null));
      history.push('/login');
    }
  };

  const renderEdit = () => {
    const profileId = history.location.search.split('?id=')[1];
    if (mainUser && profileId === mainUser._id) {
      return <EditCompany user={user} />;
    }
  };
  const renderInfo = () => {
    const profileId = history.location.search.split('?id=')[1];
    if (mainUser && profileId === mainUser._id) {
      return <h4 className={classes.cardTitleWhite}>Add a Position or Update Your Profile</h4>
    } else {
      return <h4 className={classes.cardTitleWhite}>Profile Information</h4>;
      
    }
    
  }
  const renderContract = () => {
    const profileId = history.location.search.split('?id=')[1];
    if ((mainUser && profileId === mainUser._id) || mainUser.type === 5) {
      return (
        <GridItem xs={12} sm={12} md={12}>
          <CompanyContract user={user} />
        </GridItem>
      );
    }
  };

  const useStyles = makeStyles(theme => ({
    large: {
      width: theme.spacing(13),
      height: theme.spacing(13),
    },
    cardHeader: {
      backgroundColor: 'white',
      margin: '0 15px',
      boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
      display: 'flex',
      justifyContent: 'space-between',
      color: 'white',
    },
    cardTitleWhite: {
      fontWeight: '300',
      fontFamily: 'Ubuntu',
      color: '#212121',
      fontSize: 32,
    },
  }));
  const classes = useStyles();

  if (isLogin === false) {
    return (
      <div>
        <Loading />
      </div>
    );
  } else {
    return (
      <div className={styles.paddingContainer}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <Avatar
                  alt="Cindy Baker"
                  src={user.companyLogoUrl}
                  className={classes.large}
                />
              </CardAvatar>
              <CardBody profile>
                <CompanyAbout mainUser={mainUser} user={user} />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader className={classes.cardHeader}>
                <div>
                  {renderInfo()}
                </div>
                {renderEdit()}
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CompanyVision user={user} />
                  </GridItem>
                </GridContainer>
                <GridContainer>{renderContract()}</GridContainer>
                <GridContainer />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
