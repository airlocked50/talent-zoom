import React, { useEffect, useState } from 'react';

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Typography } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { FormControl, TextField } from '@material-ui/core';
import styles from './offer.module.css';
import moment from 'moment';
import { blue } from '@material-ui/core/colors';
import { Alert } from '@material-ui/lab';
import { updateMatch } from '../../api/companyApi';
import { Box } from '@chakra-ui/react';

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
    maxHeight: 680,
    height: 'auto',
    overflowY: 'auto',
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

export default function TalentOffer({ match, value, date, logo, close }) {
  const classes = useStyles();
  const rootRef = React.useRef(null);

  const [error, setError] = useState(undefined);
  const [offerLetter, setOfferLetter] = useState();
  const [buttonDisable, setButtonDisable] = useState(false);
  useEffect(() => {
    setOfferLetter(
      match.companyContents
        ? match.companyContents[match.companyContents.length - 1]
        : []
    );
    if (offerLetter === '') {
      setButtonDisable(false);
    }
  }, [match]);

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

  const sendOfferResponse = async isAccept => {
    const updatedTalentContent = match.talentContents;
    updatedTalentContent.push({ offerAccept: isAccept });
    let body = {
      _id: match._id,
      step: match.step + 1,
      employer: match.employer._id,
      talent: match.talent._id,
      role: match.role,
      companyContents: match.companyContents,
      talentContents: updatedTalentContent,
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
        <div className={classes.paperModal}>
          <div className={classes.paper}>
            <div className={styles.firstContainer}>
              <div className={styles.date}>
                <Typography fontWeight="bold" fontSize="xl">
                  {moment(date).format('YYYY-MM-DD')}
                </Typography>
              </div>
              <div className={styles.companyLogo}>
                <Avatar src={logo} className={classes.large} />
              </div>
            </div>
          </div>
          <div className={styles.contentContainerTalent}>
            {offerLetter && (
              <ThemeProvider theme={theme}>
              <Box id="firstName" w={["100%","100%","100%",600]} mt={2}>
                <FormControl fullWidth size="small" variant="outlined">
                  <TextField
                    id="roleDescription"
                    multiline
                    rows={13}
                    name="description"
                    type="text"
                    style={{width: "100%"}}
                    InputProps={{
                      readOnly: true,
                    }}
                    value={offerLetter.offer}
                    variant="outlined"
                  />
                </FormControl>
              </Box>
            </ThemeProvider>
            )}
          </div>
          <div>
            <div>
              <div>
                <Button
                  onClick={() => sendOfferResponse(true)}
                  fullWidth
                  variant="outlined"
                  className={classes.alertButton}
                  disabled={buttonDisable}>
                  Accept
                </Button>
                <Button
                  onClick={() => sendOfferResponse(false)}
                  fullWidth
                  variant="outlined"
                  className={classes.alertButton}
                  disabled={buttonDisable}>
                  Decline
                </Button>
              </div>
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
