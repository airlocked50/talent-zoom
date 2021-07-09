import React, { useEffect, useState } from 'react';

import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Typography } from '@material-ui/core';
import styles from './offer.module.css';
import moment from 'moment';
import { EditText, EditTextarea } from 'react-edit-text';
import { blue } from '@material-ui/core/colors';
import { Alert } from '@material-ui/lab';
import { updateMatch } from '../../api/companyApi';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperModal: {
    maxWidth: 900,
    maxHeight: 500,
    minHeight: 300,
    overflowY: 'auto',
    borderRadius: 10,
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
    position: 'absolute',
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

export default function PreviewOffer({
  match,
  value,
  logo,
  close,
  offerLetter,
  date,
}) {
  const classes = useStyles();
  const rootRef = React.useRef(null);

  const [error, setError] = useState(undefined);

  return (
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
                {moment(date).format('MM-DD-YYYY')}
              </Typography>
            </div>
            <div className={styles.companyLogo}>
              <Avatar src={logo} className={classes.large} />
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          {offerLetter && (
            <Typography style={{ whiteSpace: 'break-spaces' }}>
              {offerLetter}
            </Typography>
          )}
        </div>
        <div />
      </div>
    </Modal>
  );
}
