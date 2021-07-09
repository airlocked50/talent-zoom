import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridItem from '../../components/material-ui-component/Grid/GridItem.js';
import GridContainer from '../../components/material-ui-component/Grid/GridContainer.js';
import Card from '../../components/material-ui-component/Card/Card.js';
import CardHeader from '../../components/material-ui-component/Card/CardHeader.js';
import CardAvatar from '../../components/material-ui-component/Card/CardAvatar.js';
import CardBody from '../../components/material-ui-component/Card/CardBody.js';
import TalentAbout from '../../components/Talent/TalenAbout';
import TalentRoles from '../../components/Talent/TalentRoles';
import TalentSkills from '../../components/Talent/TalentSkills';
import TalentSummary from '../../components/Talent/TalentSummary';
import TalentWorkExperience from '../../components/Talent/TalentWorkExperience';
import TalentEducation from '../../components/Talent/TalentEducation';
import { useHistory } from 'react-router-dom';
import { getTalentById } from '../../api/talentApi.js';
import { Avatar } from '@material-ui/core';
import Loading from '../../components/Loading/Loading.js';
import EditTalent from '../../components/EditProfile/EditTalent.js';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/actions/userAction.js';
import styles from './inboxTalent.module.css';

export default function TalentProfile() {
  const dispatch = useDispatch();
  const useStyles = makeStyles(theme => ({
    large: {
      width: theme.spacing(13),
      height: theme.spacing(13),
    },
    cardCategoryWhite: {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0',
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
  const [user, setUser] = useState([]);
  const [mainUser, setMainUser] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();
  useEffect(() => {
    window.dataLayer.push({
      event: 'pageview'
    })
    loadData();
  }, []);

  const loadData = async () => {
    setIsLogin(false);
    const profileId = history.location.search.split('?id=')[1];
    const mainUsers = await JSON.parse(
      localStorage.getItem('userInformations')
    );
    const userInfos = await getTalentById({
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
      return <EditTalent user={user} />;
    }
  };

  const renderInfo = () => {
    const profileId = history.location.search.split('?id=')[1];
    if (mainUser && profileId === mainUser._id) {
      return  <h4 className={classes.cardTitleWhite}>
      Update Your Profile
      </h4>
    } else {
      return <h4 className={classes.cardTitleWhite}>Profile Information</h4>;
      
    }
    
  }

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
                  src={user.proilePhoto}
                  className={classes.large}
                />
              </CardAvatar>
              <CardBody profile>
                <TalentAbout user={user} />
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
                    <TalentSummary user={user} />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TalentSkills user={user} />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TalentWorkExperience user={user} />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TalentEducation user={user} />
                  </GridItem>
                </GridContainer>
                <GridContainer />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
