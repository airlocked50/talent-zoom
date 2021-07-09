import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import styles from '../LoginSteps/loginSteps.module.css';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Box } from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../redux/actions/updateAction';
import Contract from '../UpdateComponents/Company/Contract';
import Vision from '../UpdateComponents/Company/Vision';
import CityAndJob from '../UpdateComponents/Company/CityAndJob';
import CompanyInformations from '../UpdateComponents/Company/CompanyInformations';
import { updateCompany } from '../../api/companyApi';
import EditIcon from '@material-ui/icons/Edit';
import { blue } from '@material-ui/core/colors';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
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

export default function EditCompany({ user }) {
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
    delete revisedObject.createdAt;
    delete revisedObject.updatedAt;
    delete revisedObject.isVerified;
    delete revisedObject.__v;
    await updateCompany({
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
            w={['100%', '100%', 700, 1000]}
            backgroundColor="#fff"
            h={'auto'}
            m={(0, 'auto')}
            pb={[0,10,10,10]}
            mt={10}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{ root: classes.summary }}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Box ml={2} className={styles.mainTitle}>
                  Open Positions
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <Contract contracts={user.contract} />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{ root: classes.summary }}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Box ml={2} className={styles.mainTitle}>
                   Vision / Logo / Tech Stack
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <Vision
                  vision={user.visionMission}
                  photo={user.companyLogoUrl}
                  wantedSkills={user.wantedSkills}
                />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{ root: classes.summary }}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Box ml={2} className={styles.mainTitle}>
                  City / Roles
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <CityAndJob
                  wantedWorkCities={user.wantedWorkCity}
                  wantedRoles={user.wantedRoles}
                />
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{ root: classes.summary }}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Box ml={2} className={styles.mainTitle}>
                  General Information
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <CompanyInformations infos={user} />
              </AccordionDetails>
            </Accordion>
          </Box>
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
