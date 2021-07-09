import React, { useState } from 'react';

import { Box } from '@chakra-ui/react';
import moment from 'moment';

import Modal from '@material-ui/core/Modal';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import {
  Chip,
  Select,
  Button,
  FormControl,
  InputLabel,
  Typography,
} from '@material-ui/core';
import { Constants } from '../../constants/index';
import { updateMatch } from '../../api/companyApi';
import { Alert } from '@material-ui/lab';

const { APPOINMTMENT_TIME } = Constants;

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
    width: 600,
    minWidth: 300,
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
    marginTop: 5,
  },
}));

export default function CompanyFormModal({ value, close, match }) {
  const [appointment, setAppointment] = useState({
    startDate: '01/01/2021',
    startTime: [],
  });
  const [selectedAppointment, setSelectedAppointment] = useState([]);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [error, setError] = useState(undefined);
  const classes = useStyles();
  const rootRef = React.useRef(null);

  const addNewAppointment = () => {
    if (appointment.startTime.length === 0) {
      setError(true);
      return setTimeout(() => {
        setError(null);
      }, 3000);
    } else {
      setSelectedAppointment([
        ...selectedAppointment,
        { date: appointment.startDate, hours: appointment.startTime },
      ]);
      setButtonDisable(false);
    }

    
  };

  const handleTime = e => {
    setAppointment({ ...appointment, startTime: JSON.parse(e.target.value) });
  };

  const deleteAppointment = (appointment, index) => {
    const updatedAppointment = selectedAppointment.filter(
      (te, i) => i !== index
    );
    if (updatedAppointment.length === 0) {
      setButtonDisable(true);
    }
    setSelectedAppointment(updatedAppointment);
   
  };

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
    const lookup = convertLookUp();
    const suitableDates = [];
    Object.keys(lookup).map(item => {
      suitableDates.push({ date: item, hours: lookup[item] });
    });
    
    const updatedCompanyContent = match.companyContents;
    updatedCompanyContent.push({ suitableDates });
    let body = {
      _id: match._id,
      step: match.step + 1,
      employer: match.employer._id,
      talent: match.talent._id,
      role: match.role,
      isActive: true,
      companyContents: updatedCompanyContent,
      talentContents: match.talentContents,
      adminChecked: false,
    };
    let response = await updateMatch({ body: body });
    if (response !== null || response !== undefined) {
      setSelectedAppointment([]);
      setButtonDisable(true);
    }
    errorControl(response);
  };

  const convertLookUp = () => {
    const lookup = {};

    selectedAppointment.map(item => {
      if (lookup[item.date]) {
        lookup[item.date].push(item.hours.value);
      } else {
        lookup[item.date] = [item.hours.value];
      }
    });
    return lookup;
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
            <Typography variant="h5" style={{ fontFamily: 'Ubuntu' }}>
              Schedule an Interview
            </Typography>
            <Box id="date" mt={10} mb={10}>
              <Box w={[300, 300, 400, 550]} d={{ sm: 'flex' }}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Box>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      value={appointment.startDate}
                      onChange={date =>
                        setAppointment({
                          ...appointment,
                          startDate: moment(date).format('YYYY-MM-DDTHH:mm:ss'),
                        })
                      }
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </Box>
                </MuiPickersUtilsProvider>
                <Box w={200} mt={4} ml={[0, 5, 5, 5]}>
                  <FormControl
                    variant="outlined"
                    color="primary"
                    size="small"
                    fullWidth>
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Time
                    </InputLabel>
                    <Select
                      native
                      // value={state.age}
                      onChange={handleTime}
                      label="Time"
                      inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                      }}>
                      <option aria-label="None" value="" />
                      {Object.values(APPOINMTMENT_TIME).map((time, index) => (
                        <option key={index} value={JSON.stringify(time)}>
                          {time.key}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Box>

                <Box ml={[0, 5, 5, 5]} mt={4}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ textTransform: 'none' }}
                    onClick={addNewAppointment}>
                    Add
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              h={'auto'}
              w={[300, 400, 400, 500]}
              d="flex"
              flexWrap="wrap"
              justifyContent="flex-start"
              pl={15}>
              {(selectedAppointment || []).map((appointment, index) => (
                <Chip
                  key={index}
                  className={classes.chip}
                  style={{
                    marginLeft: '10px',
                    backgroundColor: '#616161',
                  }}
                  label={
                    <Box style={{
                      color: 'white',
                      fontFamily: 'Ubuntu',
                      fontWeight: 400,
                    }}>
                    {moment(appointment.date).format('dddd, MMMM Do YYYY') +
                    ', ' +
                    appointment.hours.key}
                    </Box>
                  }
                  deleteIcon={<HighlightOffIcon style={{ color: 'white' }} />}
                  onDelete={() => deleteAppointment(appointment, index)}
                />
              ))}
            </Box>
          </div>
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
