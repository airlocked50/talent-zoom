/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItemAvatar,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

import styles from './inboxTalent.module.css';
import TalentFormModal from '../../components/Modals/TalentFormModal';
import { getMatchesByTalentId, updateMatch } from '../../api/companyApi';
import { Box, Text } from '@chakra-ui/react';
import { GLOBAL } from '../../constants/Global';
import { Constants } from '../../constants/index';
import MatchDetails from '../../components/MatchDetails/MatchDetails';
import Loading from '../../components/Loading/Loading';
import { Alert } from '@material-ui/lab';
import TalentOffer from '../../components/Modals/TalentOffer';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUserData } from '../../redux/actions/userAction';

const { JOB_TITLES } = Constants;

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  image: {
    height: 48,
    width: 48,
  },
});

const TalentInbox = ({ ...rest }) => {
  const classes = useStyles();
  const [candidatesFromAdmin, setCandidatesFromAdmin] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [companyLogo, setCompanyLogo] = useState(false);
  const [openModalOffer, setOpenModalOffer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState({});
  const [deletedCanditates, setDeletedCandidates] = useState();
  const [mainUser, setMainUser] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const mainUsers = await JSON.parse(
      localStorage.getItem('userInformations')
    );
    const matches = await getMatchesByTalentId({
      _id: mainUsers._id,
      token: mainUsers.tokenCode,
    });
    if (matches !== null || undefined) {
      setCandidatesFromAdmin(matches);
      setMainUser(mainUsers);
      setIsVisible(true);
    } else {
      await localStorage.setItem('userInformations', null);
      await dispatch(setUserData(null));
      history.push('/login');
    }
  };

  const addTalent = match => {
    setSelectedCandidates(match);
    setOpenModal(true);
  };

  const findRole = role => {
    const [filteredRole] = Object.values(JOB_TITLES).filter(
      job => job.value === role
    );
    return `Position: ${filteredRole.key}`;
  };

  const selectDeletedItem = match => {
    setDeletedCandidates(match);
    setShowAlert(true);
  };
  const handleCloseOffer = () => {
    setOpenModalOffer(false);
  };

  const viewOffer = (match, index) => {
    setSelectedCandidates(match);
    setCompanyLogo(match.employer.companyLogoUrl);
    setOpenModalOffer(true);
  };

  const deleteTalent = async () => {
    let body = {
      _id: deletedCanditates._id,
      step: deletedCanditates.step,
      isActive: false,
      employer: deletedCanditates.employer._id,
      talent: deletedCanditates.talent._id,
      role: deletedCanditates.role,
      companyContents: deletedCanditates.companyContents,
      talentContents: deletedCanditates.talentContents,
      adminChecked: false,
    };
    const response = await updateMatch({ body: body });
    if (response !== null || response !== undefined) {
      setShowAlert(false);
      window.location.reload();
    }
  };
  const renderAlert = () => {
    return (
      <Box m={(0, 'auto')}>
        <Box>
          <Alert
            variant="filled"
            severity="warning"
            action={
              <>
                <Button onClick={deleteTalent} color="inherit" size="small">
                  Delete
                </Button>
                <Button
                  onClick={() => setShowAlert(false)}
                  color="inherit"
                  size="small">
                  Cancel
                </Button>
              </>
            }>
            Do you want to delete your match?
          </Alert>
        </Box>
      </Box>
    );
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  if (isVisible === true) {
    if (candidatesFromAdmin.length !== 0) {
      return (
        <div className={styles.paddingContainer}>
          <div className={styles.container}>
            {showAlert === true ? renderAlert() : <></>}
            <TalentOffer
              match={selectedCandidates}
              date={selectedCandidates.offerDate}
              logo={companyLogo}
              value={openModalOffer}
              close={handleCloseOffer}
            />
            <TalentFormModal
              match={selectedCandidates}
              value={openModal}
              close={handleClose}
            />
            <Card {...rest}>
              <CardHeader
                title="Below are the positions you have been matched with."
                
              />
              <Divider />
              <List>
                {candidatesFromAdmin.map((match, index) => (
                  <Accordion key={match._id}>
                    <AccordionSummary
                      classes={{ root: classes.summary }}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      expandIcon={<ExpandMoreIcon />}>
                      <ListItemAvatar>
                        <Avatar
                          onClick={() =>
                            window.open(
                              GLOBAL.REDIRECT_URL_COMPANY + match.employer._id
                            )
                          }
                          alt="Product"
                          className={classes.image}
                          src={
                            match.talent ? match.employer.companyLogoUrl : ''
                          }
                        />
                      </ListItemAvatar>
                      <ListItemText
                        style={{ cursor: 'initial' }}
                        primary={
                          match.employer ? match.employer.companyName : ''
                        }
                        secondary={findRole(match.role)}
                      />
                      <Box display={{ sm: 'flex' }}>
                        {/* <IconButton
                          onClick={() => selectDeletedItem(match)}
                          edge="end"
                          size="small"
                          color="secondary"
                          style={{ backgroundColor: 'transparent' }}>
                          <Button
                            style={{ textTransform: 'none', color: '#424242' }}>
                            Not Interested 
                          </Button>
                        </IconButton> */}
                        {match.step % 2 === 0 &&
                          match.companyContents[
                            match.companyContents.length - 1
                          ].isOffer && (
                            <IconButton
                              onClick={() => viewOffer(match, index)}
                              edge="end"
                              size="small"
                              style={{ backgroundColor: 'transparent' }}>
                              <Button
                                style={{
                                  textTransform: 'none',
                                  color: '#1a76d1',
                                }}>
                                View offer
                              </Button>
                            </IconButton>
                          )}
                        {match.step % 2 === 0 &&
                          !match.companyContents[
                            match.companyContents.length - 1
                          ].isOffer && (
                            <IconButton
                              onClick={() => addTalent(match, index)}
                              edge="end"
                              style={{ backgroundColor: 'transparent' }}
                              size="small">
                              <Button
                                style={{
                                  textTransform: 'none',
                                  color: '#1a76d1',
                                }}>
                                Confirm interview time
                              </Button>
                            </IconButton>
                          )}
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <MatchDetails match={match} />
                    </AccordionDetails>
                  </Accordion>
                ))}
              </List>
              <Divider />
            </Card>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.container}>
          <Box>
            <Text fontSize="xl" fontWeight="bold" align="center">
              Your match is on its way.
            </Text>
            {/* <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_g96md7ur.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            /> */}
          </Box>
        </div>
      );
    }
  } else {
    return <Loading />;
  }
};

export default TalentInbox;
