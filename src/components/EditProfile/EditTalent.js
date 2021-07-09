/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import styles from '../LoginSteps/loginSteps.module.css';
import Slide from '@material-ui/core/Slide';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../redux/actions/updateAction';
import Social from '../UpdateComponents/Talent/Social';
import WorkingConditions from '../UpdateComponents/Talent/WorkingConditions';
import TalentExperience from '../UpdateComponents/Talent/TalentExperience';
import WorkExperience from '../UpdateComponents/Talent/WorkExperience';
import LanguageSkill from '../UpdateComponents/Talent/LanguageSkill';
import Salary from '../UpdateComponents/Talent/Salary';
import SummaryAndPhoto from '../UpdateComponents/Talent/SummaryAndPhoto';
import { updateTalent } from '../../api/talentApi';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import '../Talent/talent.css';
import { blue } from '@material-ui/core/colors';
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'fixed',
    top: 0,
    paddingTop: 75,
    backgroundColor: 'white',
  },
  title: {
    marginLeft: theme.spacing(2),
    color: '#212121',
    fontSize: 20,
    fontFamily: 'Ubuntu',
    fontWeight: 300,
    flex: 1,
  },
  summary: {
    backgroundColor: '#f2f2f2',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTalent({ user }) {
  const { updatedData } = useSelector(state => state.update);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateUserData(user));
  }, []);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    var revisedObject = updatedData;
    revisedObject.isFirstLogin = 'false';
    delete revisedObject._id;
    delete revisedObject.name;
    delete revisedObject.surname;
    delete revisedObject.email;
    delete revisedObject.type;
    delete revisedObject.password;
    delete revisedObject.isVerified;
    delete revisedObject.isActive;
    delete revisedObject.createdAt;
    delete revisedObject.updatedAt;
    delete revisedObject.tokenCode;
    delete revisedObject.__v;
    await updateTalent({
      body: revisedObject,
      _id: user._id,
      token: user.tokenCode,
    });
    window.location.reload();
    setOpen(false);
  };
  const handleNormalClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <IconButton color="inherit" edge="end" onClick={handleClickOpen}>
          <EditIcon style={{ fontSize: 30, color: '#1A76D1' }} />
        </IconButton>
        <Dialog
          className={styles.dialog}
          fullScreen
          open={open}
          onClose={handleNormalClose}
          TransitionComponent={Transition}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Box className={classes.title}>Edit your profile</Box>
              <Button
                autoFocus
                onClick={handleNormalClose}
                style={{
                  textTransform: 'none',
                  width: 100,
                  color: '#212121',
                  marginRight: '10px',
                  backgroundColor: 'transparent',
                }}>
                Close
              </Button>
              <Button
                autoFocus
                style={{ textTransform: 'none', width: 100 }}
                variant="contained"
                color="primary"
                onClick={handleClose}>
                Save
              </Button>
            </Toolbar>
          </AppBar>
          <Box
            w={['100%', '100%', 600, 1000]}
            backgroundColor="#fff"
            h={'auto'}
            pt={[65,20,20,20]}
            pb={[0,10,10,10]}
            m={(0, 'auto')}
            mt={10}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{ root: classes.summary }}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Box ml={2} className={styles.mainTitle}>
                  Resume / Work Samples
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <Social user={user} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{ root: classes.summary }}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Box ml={2} className={styles.mainTitle}>
                  Employment Preferences
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <WorkingConditions user={user} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{ root: classes.summary }}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Box ml={2} className={styles.mainTitle}>
                  Role Titles
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <TalentExperience user={user} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{ root: classes.summary }}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Box ml={2} className={styles.mainTitle}>
                  Work Experience / Education
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <WorkExperience user={user} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{ root: classes.summary }}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Box ml={2} className={styles.mainTitle}>
                  Skills / Tech Stack
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <LanguageSkill user={user} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{ root: classes.summary }}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Box ml={2} className={styles.mainTitle}>
                  Compensation
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <Salary user={user} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{ root: classes.summary }}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Box ml={2} className={styles.mainTitle}>
                  Summary and Photo
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <SummaryAndPhoto user={user} />
              </AccordionDetails>
            </Accordion>
          </Box>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
