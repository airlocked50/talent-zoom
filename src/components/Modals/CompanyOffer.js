import React, { useEffect, useState } from 'react';

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Typography } from '@material-ui/core';
import styles from './offer.module.css';
import moment from 'moment';
import { FormControl, TextField } from '@material-ui/core';
import { EditText, EditTextarea } from 'react-edit-text';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { Alert } from '@material-ui/lab';
import { updateMatch } from '../../api/companyApi';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperModal: {
    maxWidth: 700,
    minWidth: 300,
    width: 'auto',
    maxHeight: '100%',
    overflowY: 'auto',
    height: 'auto',
    borderRadius: '4px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid 4F34A3',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
  },
  alertButton: {
    backgroundColor: '#2097F3',
    marginTop: 20,
    color: 'white',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: blue[500],
      color: 'white',
    },
  },
  helperText: {
    color: 'red',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function CompanyOffer({ match, value, logo, close, letter }) {
  const classes = useStyles();
  const rootRef = React.useRef(null);

  const [error, setError] = useState(undefined);
  const [offerLetter, setOfferLetter] = useState(``);

  const [buttonDisable, setButtonDisable] = useState(false);

  useEffect(() => {
    setOfferLetter(letter);
  }, [letter]);

  const errorControl = response => {
    setError(false);
    if (!response) {
      setError(true);
    }
    setTimeout(() => {
      setError(null);
      window.location.reload();
    }, 2000);
  };

  const sendOffer = async () => {
    const updatedCompanyContent = match.companyContents;
    updatedCompanyContent.push({
      offer: offerLetter,
      isOffer: true,
      offerDate: new Date(),
    });
    let body = {
      _id: match._id,
      step: match.step + 1,
      employer: match.employer._id,
      talent: match.talent._id,
      role: match.role,
      companyContents: updatedCompanyContent,
      talentContents: match.talentContents,
      isActive: true,
      adminChecked: false,
    };
    let response = await updateMatch({ body: body });
    if (response !== null || response !== undefined) {
      setButtonDisable(true);
    }
    errorControl(response);
  };
  const renderError = () => {
    if (error === true) {
      return (
        <Box m={(0, 'auto')}>
          <Box>
            <Alert variant="filled" severity="error">
              There is an error.
            </Alert>
          </Box>
        </Box>
      );
    } else if (error === false) {
      return (
        <Box m={(0, 'auto')}>
          <Box>
            <Alert variant="filled" severity="success">
              Successfull!
            </Alert>
          </Box>
        </Box>
      );
    }
  };
  return (
    <>
      {renderError()}
      <Modal
        disableEnforceFocus
        disableAutoFocus
        open={value}
        onClose={close}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}>
        {/* {renderError()} */}
        <div className={classes.paperModal}>
          <div className={classes.paper}>
            <div className={styles.firstContainer}>
              <div className={styles.date}>
                <Typography fontWeight="bold" fontSize="xl">
                  {moment().format('MM-DD-YYYY')}
                </Typography>
              </div>
              <div className={styles.companyLogo}>
                <Avatar src={logo} className={classes.large} />
              </div>
            </div>
          </div>
          <Box className={styles.infoText}><b>*These are non-binding offer letters. Please edit the following fields before sending to your match. Your Hiring Success Manager will be in touch with you after you have submitted your initial offer.</b> </Box>
          <div className={styles.contentContainerTalent}>
            {/* <EditTextarea
              name="textarea1"
              rows={15}
              defaultValue={offerLetter}
              onSave={e => setOfferLetter(e.value)}
              className={styles.textArea}
            /> */}
            <ThemeProvider theme={theme}>
              <Box id="firstName" w={['100%', "100%", "100%", 600]} mt={2}>
                <FormControl fullWidth size="small" variant="outlined">
                  <TextField
                    label="Click to edit"
                    id="roleDescription"
                    multiline
                    rows={13}
                    name="description"
                    type="text"
                    style={{width: "100%"}}
                    value={offerLetter}
                    onChange={e => {
                      setOfferLetter(e.target.value);
                   
                    }}
                    variant="outlined"
                  />
                </FormControl>
              </Box>
            </ThemeProvider>
          </div>
          <div>
            <div>
              <Button
                fullWidth
                variant="outlined"
                className={classes.alertButton}
                onClick={sendOffer}
                disabled={buttonDisable}>
                Send offer letter
              </Button>
              <Button
                onClick={close}
                fullWidth
                variant="outlined"
                className={classes.alertButton}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
