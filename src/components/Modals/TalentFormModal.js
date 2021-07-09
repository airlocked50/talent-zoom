import React, { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';
import moment from 'moment';

import Modal from '@material-ui/core/Modal';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import { makeStyles } from '@material-ui/core/styles';
import { Text } from '@chakra-ui/react';
import { Chip, Button } from '@material-ui/core';
import { Constants } from '../../constants/index';
import { updateMatch } from '../../api/companyApi';
import { Alert } from '@material-ui/lab';

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
    width: 400,
    minWidth: 200,
    height: 'auto',
    borderRadius: '4px',
    backgroundColor: '#f6f6f6',
    border: '2px solid 4F34A3',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  alertButton: {
    backgroundColor: '#5D3DBD',
    color: '#FFD10D',
  },
  helperText: {
    color: 'red',
  },
  sendButton: {
    marginLeft: 10,
    width: 80,
    textTransform: 'none',
  },
  cancelButton: {
    width: 80,
    textTransform: 'none',
    color: '#424242',
    backgroundColor: 'transparent',
  },
  chip: {
    marginLeft: 10,
    marginTop: 5,
  },
}));

export default function TalentFormModal({ value, close, match }) {
  const [companyCnt, setCompanyCnt] = useState(null);
  // const [message, setMessage] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
  const [error, setError] = useState(undefined);
  const [buttonDisable, setButtonDisable] = useState(true);
  const classes = useStyles();
  const rootRef = React.useRef(null);
  useEffect(() => {
    setCompanyCnt(
      match.companyContents
        ? match.companyContents[match.companyContents.length - 1]
        : []
    );
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

  const updateAppointment = async () => {
    if (selectedDate !== null || selectedHour !== null) {
      const updatedTalentContent = match.talentContents;
      updatedTalentContent.push({
        selectedDate,
        selectedHour: selectedHour.value,
      });
      let body = {
        _id: match._id,
        step: match.step + 1,
        employer: match.employer._id,
        talent: match.talent._id,
        role: match.role,
        isActive: true,
        companyContents: match.companyContents,
        talentContents: updatedTalentContent,
        adminChecked: false,
      };
      const response = await updateMatch({ body: body });
      if (response !== null || response !== undefined) {
        setButtonDisable(true);
      }
      errorControl(response);
    }
  };
  //
  const renderHours = (date, hours, i) => {
    return (hours || []).map(hour => {
      let arr = Object.values(Constants.APPOINMTMENT_TIME);
      const selectedHour = arr.find(item => item.value === hour);
      return (
        <Chip
          key={i}
          style={{
            marginLeft: '10px',
            marginTop: '5px',
            height: 17,
            backgroundColor: '#616161',
            color: 'white',
          }}
          label={selectedHour.key || '-'}
          onClick={() => {
            setButtonDisable(false);
            setSelectedDate(date);
            setSelectedHour(selectedHour);
          }}
        />
      );
    });
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
    <ThemeProvider theme={theme}>
      {renderError()}
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={value}
        onClose={close}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}>
        <div className={classes.paperModal}>
          <div className={classes.paper} style={{ marginTop: 0 }}>
            <Text fontWeight="bold" fontSize="xl">
            Confirm interview day/time
            </Text>
            <Box
              h={'auto'}
              w={500}
              d="flex"
              flexWrap="wrap"
              justifyContent="flex-start"
              p={2}>
              {/* <Text fontSize="l">* Confirm interview day/time</Text> */}
            </Box>
          </div>
          {((companyCnt && companyCnt.suitableDates) || []).map((dates, i) => {
            return (
              <div key={i}>
                <Text ml={3} fontWeight="bold" mt={3}>
                  • {moment(dates.date).format('dddd, MMMM Do YYYY')}
                </Text>
                {renderHours(dates.date, dates.hours, i)}
              </div>
            );
          })}
          {selectedDate !== null && (
            <Text m={4} color={'#2196f3'} fontSize="l">
              Selected Date: {moment(selectedDate).format('dddd, MMMM Do YYYY')}
              {', '}
              {selectedHour.key}
            </Text>
          )}

          <Box h={'auto'} mt={[5, 5, 8, 8]}>
            <Button
              onClick={updateAppointment}
              className={classes.sendButton}
              variant="contained"
              color="primary"
              disabled={buttonDisable}>
              Send
            </Button>
            <Button className={classes.cancelButton} onClick={close}>
              Cancel
            </Button>
          </Box>
        </div>
      </Modal>
    </ThemeProvider>
  );
}
