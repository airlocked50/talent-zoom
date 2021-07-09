/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
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

import styles from './inbox.module.css';
import CompanyFormModal from '../../components/Modals/CompanyFormModal';
import { getMatchesById, updateMatch } from '../../api/companyApi';
import { Text } from '@chakra-ui/react';
import { GLOBAL } from '../../constants/Global';
import { Constants } from '../../constants/index';
import MatchDetails from '../../components/MatchDetails/MatchDetails';
import Loading from '../../components/Loading/Loading';
import { Alert, AlertTitle } from '@material-ui/lab';
import CompanyOffer from '../../components/Modals/CompanyOffer';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/actions/userAction';
import { useHistory } from 'react-router-dom';

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

const LatestCandidates = ({ ...rest }) => {
  const classes = useStyles();
  const [candidatesFromAdmin, setCandidatesFromAdmin] = useState([]);
  const [deletedCanditates, setDeletedCandidates] = useState();
  const [logo, setLogo] = useState('');
  const [letter, setLetter] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [openModalOffer, setOpenModalOffer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [offerAlert, setOfferAlert] = useState(false);
  const [selectedCandidates, setSelectedCandidates] = useState({});
  const [mainUser, setMainUser] = useState();
  // const [isExpanded, setIsExpanded] = useState(true);
  const [expanded, setExpanded] = React.useState('panel');
  const history = useHistory();

  const dispatch = useDispatch();

  let fullTimeLetter = `
  Dear [Candidate Name],
 

We are pleased to offer you the [full-time, part-time, etc.] position of [job title] at [company name] with a start date of [start date], contingent upon completion of the following pre-employment requirements that include a [background check, drug screening I-9 form, etc.].

You will be reporting directly to [manager/supervisor name] at [workplace location]. We believe your skills and experience are an excellent match for our company.
 
 The annual starting salary for this position is [dollar amount] to be paid on a [monthly, semimonthly, weekly, etc.] basis starting on [first pay period]. In addition to this starting salary, we’re offering you [discuss stock options, bonuses, commission structures, etc. — if applicable].
 
 
Your employment with [Company Name] will be on an at-will basis, which means you and the company are free to terminate the employment relationship at any time for any reason. This is a conditional offer that is contingent on your successful completion of certain pre-employment conditions and is not a guarantee of employment for a definitive period of time. 
 
 As an employee of [Company Name], you are also eligible for our benefits program, please refer to (COMPANY NAME) benefit’s materials for our complete benefits package and eligibility requirements.  
 
 Please confirm your acceptance of this offer by signing and returning this letter by [offer expiration date].  Once accepted, your TalentZoom Talent Advocate will be reaching out to you with information and instructions on completing the pre-employment conditions. 
 
We are excited to have you join the (COMPANY NAME ) team!

Sincerely,

(ENTER NAME) 

(Hiring Manager Title/COMPANY NAME) 
`;
  let contractLetter = `
  (MONTH) (DAY) (YEAR) 

  [CONTRACTOR NAME], 
   
  I am happy to congratulate you on your offer at our client,  [CLIENT Name], for the position of (POSITION). Both TalentZoom & (CLIENT NAME) feel that your unique skills, knowledge, and experience make you an invaluable asset to the {CLIENT NAME} team!
    
  You will be employed on an all-Hours W2 contract, which means you will be compensated for every hour of your work. Please note that this is a contingent offer based around satisfying all pre-employment conditions and this contract does not include benefits such as meals, travel, living arrangements, expenses, paid time off, etc.  
  
  Furthermore, pay rate confirmation will be included on the contractual agreement to follow.  Any discussions about hourly rates should take place strictly through TalentZoom.
  
  Per {CLIENT NAME}’s expectations, you will work – but not exceed – a [number of hours] work week. Following the [time period] W2 contract period, [CLIENT NAME} reserves the right to either make a hire or extend and/or convert the contract.
  
  Please be prepared to begin working in this position on [Start Date],  provided all pre-employment conditions are satisfied.  Once this offer is accepted, I will be reaching to answer any questions and confirm next steps in the hiring process. 
   
  I am excited for you to take advantage of this great opportunity and I am positive that you will excel in this role, fulfilling and even exceeding [CLIENT Name]’ s expectations.
    
  Sincerely,
  
  {YOUR NAME} 
  
  {YOUR COMPANY}  
  `;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const mainUsers = await JSON.parse(
      localStorage.getItem('userInformations')
    );
    const matches = await getMatchesById({
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
  // const handleExpand = () => {
  //   setIsExpanded(!isExpanded);
  // }

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const addTalent = (match, index) => {
    setSelectedCandidates(match);
    setOpenModal(true);
  };

  const sendOffer = (match, index) => {
    setSelectedCandidates(match);
    setLogo(mainUser.companyLogoUrl);
    setOfferAlert(true);
  };

  const findRole = role => {
    const [filteredRole] = Object.values(JOB_TITLES).filter(
      (job, index) => job.value === role
    );
    return `Position: ${filteredRole.key}`;
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
    // const newTalent = candidatesFromAdmin.filter((match, i) => i !== index);
    // setCandidatesFromAdmin(newTalent);
    if (response !== null || response !== undefined) {
      setShowAlert(false);
      window.location.reload();
    }
  };

  const selectDeletedItem = match => {
    setDeletedCandidates(match);
    setShowAlert(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleCloseOffer = () => {
    setOpenModalOffer(false);
  };

  const renderOfferAlert = () => {
    return (
      <Box m={(0, 'auto')}>
        <Box>
          <Alert
            icon={false}
            variant="filled"
            style={{ backgroundColor: '#1A76D1' }}>
            What type of Offer Letter would you like to send?
            <Button
              onClick={() => {
                setOfferAlert(false);
                setOpenModalOffer(true);
                setLetter(fullTimeLetter);
              }}
              style={{ marginLeft: 20 }}
              color="inherit"
              size="small">
              Full time offer letter
            </Button>
            <Button
              style={{ marginLeft: 20 }}
              onClick={() => {
                setOfferAlert(false);
                setOpenModalOffer(true);
                setLetter(contractLetter);
              }}
              color="inherit"
              size="small">
              Contract offer letter
            </Button>
          </Alert>
        </Box>
      </Box>
    );
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
            Do you want to delete your candidate?
          </Alert>
        </Box>
      </Box>
    );
  };

  if (isVisible === true) {
    if (candidatesFromAdmin.length !== 0) {
      return (
        <div className={styles.paddingContainer}>
          <div className={styles.container}>
            {showAlert === true ? renderAlert() : <></>}
            {offerAlert === true ? renderOfferAlert() : <></>}
            <CompanyOffer
              match={selectedCandidates}
              value={openModalOffer}
              logo={logo}
              letter={letter}
              close={handleCloseOffer}
            />

            <CompanyFormModal
              match={selectedCandidates}
              value={openModal}
              close={handleClose}
            />
            <Card {...rest}>
              <CardHeader
                title="Active Matches"
                subheader="Below are the candidates that have been matched with your open position(s). Please review their profile & skills, and request an interview."
              />
              <Divider />
              <List>
                {candidatesFromAdmin.map((match, index) => (
                  <Accordion expanded={expanded === 'panel' || expanded === index } onChange={handleChange(index)} key={match._id}>
                    <AccordionSummary
                      classes={{ root: classes.summary }}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      expandIcon={<ExpandMoreIcon />}>
                      <ListItemAvatar>
                        <Avatar
                          onClick={() =>
                            window.open(GLOBAL.REDIRECT_URL + match.talent._id)
                          }
                          alt="Product"
                          className={classes.image}
                          src={match.talent ? match.talent.proilePhoto : ''}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        style={{ cursor: 'initial' }}
                        primary={
                          match.talent
                            ? match.talent.name + ' ' + match.talent.surname
                            : ''
                        }
                        secondary={findRole(match.role)}
                      />
                      <Box display={{ sm: 'flex' }}>
                        <IconButton
                          onClick={() => selectDeletedItem(match)}
                          edge="end"
                          size="small"
                          color="secondary"
                          style={{ backgroundColor: 'transparent' }}>
                          <Button
                            style={{ textTransform: 'none', color: '#424242' }}>
                            Not Proceeding
                          </Button>
                        </IconButton>
                        {match.step % 2 !== 0 && (
                          <IconButton
                            onClick={() => sendOffer(match, index)}
                            edge="end"
                            size="small"
                            style={{ backgroundColor: 'transparent' }}>
                            <Button
                              style={{
                                textTransform: 'none',
                                color: '#424242',
                              }}>
                              Send Offer
                            </Button>
                          </IconButton>
                        )}
                        {match.step % 2 !== 0 && (
                          <IconButton
                            onClick={() => addTalent(match, index)}
                            edge="end"
                            size="small"
                            style={{ backgroundColor: 'transparent' }}>
                            <Button
                              style={{
                                textTransform: 'none',
                                color: '#1a76d1',
                              }}>
                              Schedule an Interview
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

export default LatestCandidates;
