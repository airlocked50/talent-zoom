import React, { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';
import { Constants } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUserData } from '../../redux/actions/stepOneAction';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Autocomplete } from '@material-ui/lab';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import {
  Chip,
  Button,
  TextField,
  Checkbox,
  Select,
  InputLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core';
import styles from './loginSteps.module.css';

const { JOB_TIME, WORK_PLACE, CITY_GROUPS, START_TIME } = Constants;

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function Step2() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (stepData.wantedWorkCity) {
      setWorkingCities(stepData.wantedWorkCity);
    }
    if (stepData.usPermit) {
      setUsPermit(stepData.usPermit);
      setVisaPermit(stepData.visaPermit);
    }
    // if (stepData.wantedJobTimes) {
    //   stepData.wantedJobTimes.forEach(item => {});
    // }
  }, []);
  const { stepData } = useSelector(state => state.step);
  const [startTime, setStartTime] = React.useState({
    start: '01/01/2021',
  });
  const [isTimeVisible, setIsTimeVisible] = React.useState(false);
  const [checkBox, setCheckBox] = React.useState([false, false]);
  const [isWeekVisible, setIsWeekVisible] = React.useState(false);
  const [usPermit, setUsPermit] = React.useState(null);
  const [visaPermit, setVisaPermit] = React.useState(null);
  const [jobTimes, setJobTimes] = useState([]);
  const [workingCities, setWorkingCities] = useState([]);
  const [errorEmpType, setErrorEmpType] = useState(false);
  const [errorCities, setErrorCities] = useState(false);
  const [errorPermit, setErrorPermit] = useState(false);
  const [errorVisa, setErrorVisa] = useState(false);
  const [errorStartTime, setErrorStartTime] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const options = Object.values(WORK_PLACE).map(option => {
    const firstLetter = CITY_GROUPS[option.group].value;
    return {
      firstLetter,
      ...option,
    };
  });

  const handleJobTime = e => {
    const { value, checked } = e.target;
    if (checked === true) {
      //   setCheckedItems()
      setJobTimes([...jobTimes, JSON.parse(value)]);

      setErrorEmpType(false);
    } else {
      const deletedJobTimes = JSON.parse(value);
      const updatedJobTimes = jobTimes.filter(
        jobT => jobT.value !== deletedJobTimes.value
      );
      if (updatedJobTimes.length !== 0) {
        setErrorEmpType(false);
      }
      setJobTimes(updatedJobTimes);
    }
  };

  const handleWorkingCities = (option, value) => {
    if (value) {
      setWorkingCities([
        ...workingCities,
        { key: value.key, value: value.value },
      ]);
      setErrorCities(false);
      value = '';
    }
   
  };

  const deleteCity = (city, index) => {
    const updatedCity = workingCities.filter((city, i) => i !== index);
    setWorkingCities(updatedCity);
  };

  const handlePermit = e => {
    setUsPermit(e.target.value);
    setErrorPermit(false);
   
  };

  const handleVisaPermit = e => {
    setVisaPermit(e.target.value);
    setErrorVisa(false);
  
  };

  const handleStartTime = e => {
   
    if (JSON.parse(e.target.value) === 1) {
      setIsTimeVisible(false);
      setIsWeekVisible(true);
      setErrorStartTime(false);
    } else if (JSON.parse(e.target.value) === 2) {
      setIsTimeVisible(true);
      setIsWeekVisible(false);
      setErrorStartTime(false);
    } else if (JSON.parse(e.target.value) === 0) {
      setStartTime({ start: moment() });
      setIsTimeVisible(false);
      setErrorStartTime(false);
    }
  };
  const goNextPage = () => {
    let updatedData = {
      startTime: startTime,
      wantedJobTimes: jobTimes,
      wantedWorkCity: workingCities,
      usPermit: usPermit == 'true',
      visaPermit: visaPermit == 'true',
    };
    if (
      startTime &&
      jobTimes.length !== 0 &&
      workingCities.length !== 0 &&
      usPermit !== null &&
      visaPermit !== null
    ) {
      dispatch(addUserData(updatedData));
      history.push('/talentRoles');
    }
    if (jobTimes.length === 0) {
      setErrorEmpType(true);
      window.scrollTo(0, 0);
    }
    if (workingCities.length === 0) {
      setErrorCities(true);
      window.scrollTo(0, 0);
    }
    if (usPermit === null) {
      setErrorPermit(true);
      window.scrollTo(0, 0);
    }
    if (visaPermit === null) {
      setErrorVisa(true);
      window.scrollTo(0, 0);
    }
    if (startTime.start === '01/01/2021') {
      setErrorStartTime(true);
    }
  };

  return (
    <Box>
      <Box ml={5}>
        <Box variant="h4" className={styles.mainTitle}>
          Help us find the perfect match.
        </Box>
      </Box>
      <hr />

      <Box ml={5} mt={10}>
        <Box className={styles.subTitleBold}>
          Which employment opportunity/opportunities should we match you with? *
        </Box>
      </Box>

      <Box direction="column" w={200} pl={6} mt={1} spacing={1}>
        {Object.values(JOB_TIME).map((jobItem, index) => {
          return (
            <ThemeProvider key={index} theme={theme}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={JSON.stringify(jobItem)}
                    onChange={handleJobTime}
                    name="checkedB"
                    color="primary"
                  />
                }
                label={
                  <Typography
                    style={{ color: '#424242', fontFamily: 'Ubuntu' }}>
                    {jobItem.key}
                  </Typography>
                }
              />
            </ThemeProvider>
          );
        })}
      </Box>

      {errorEmpType === false ? (
        <> </>
      ) : (
        <Box ml={5} mt={3}>
          <Box className={styles.subTitleError}>
            Please choose the employment type!
          </Box>
        </Box>
      )}

      <Box ml={5} mt={5}>
        <Box className={styles.subTitleBold}>
          Where would you like to work? *
        </Box>
      </Box>

      <Box w={["90%", 300, 400, 500]}>
          <Box ml={[0, 0, 5, 5]} mt={5}>
            <Box variant="h5" className={styles.subTitle}>
              We’ll match you with job-seekers who live in these areas. You can also select remote to enable matches from anywhere.
            </Box>
          </Box>
        </Box>

      <ThemeProvider theme={theme}>
        <Box w={[200, 200, 300, 300]} ml={5} mt={5}>
          <Autocomplete
            fullWidth
            id="grouped-demo"
            color="primary"
            onChange={handleWorkingCities}
            options={options.sort(
              (a, b) => a.firstLetter.key - b.firstLetter.key
            )}
            getOptionLabel={option => option.key}
            renderInput={params => (
              <TextField
                error={errorCities}
                {...params}
                label="Cities"
                variant="outlined"
              />
            )}
          />
        </Box>
      </ThemeProvider>

      

      <Box
        h={'auto'}
        w={500}
        d="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        p={2}>
        {workingCities.length < 1 ? (
          <Box ml={5} mt={3}>
            <Box className={styles.subTitle}>*Add city from dropdown</Box>
          </Box>
        ) : (
          (workingCities || []).map((city, index) => (
            <ThemeProvider key={index} theme={theme}>
              <Chip
                // key={index}
                style={{
                  marginLeft: '10px',
                  marginTop: '5px',
                  backgroundColor: '#616161',
                }}
                label={
                  <Box
                    style={{
                      color: 'white',
                      fontFamily: 'Ubuntu',
                      fontWeight: 400,
                    }}>
                    {city.key}
                  </Box>
                }
                deleteIcon={<HighlightOffIcon style={{ color: 'white' }} />}
                onDelete={() => deleteCity(city, index)}
              />
            </ThemeProvider>
          ))
        )}
      </Box>

      <Box ml={5} mt={2}>
        <Box className={styles.subTitleBold}>
          Are you authorized to work in the United States? *
        </Box>
      </Box>

      <Box w={[200, 200, 300, 300]} ml={5} mt={5}>
        <ThemeProvider theme={theme}>
          <FormControl variant="outlined" color="primary" fullWidth>
            <InputLabel htmlFor="outlined-age-native-simple">
              Yes or No
            </InputLabel>
            <Select
              native
              value={usPermit}
              onChange={handlePermit}
              label="Yes or No"
              error={errorPermit}
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
              }}>
              <option aria-label="None" value="" />
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </Select>
          </FormControl>
        </ThemeProvider>
      </Box>

      <Box ml={5} mt={2}>
        <Box className={styles.subTitleBold}>
          Do you (or will you) need visa sponsorship to work in the United
          States? *
        </Box>
      </Box>

      <Box w={[200, 200, 300, 300]} ml={5} mt={5}>
        <ThemeProvider theme={theme}>
          <FormControl variant="outlined" color="primary" fullWidth>
            <InputLabel htmlFor="outlined-age-native-simple">
              Yes or No
            </InputLabel>
            <Select
              native
              value={visaPermit}
              onChange={handleVisaPermit}
              error={errorVisa}
              label="Yes or No"
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
              }}>
              <option aria-label="None" value="" />
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </Select>
          </FormControl>
        </ThemeProvider>
      </Box>

      <Box ml={5} mt={3}>
        <Box className={styles.subTitleBold}>When can you start? *</Box>
      </Box>

      <Box ml={5} direction="column">
        <ThemeProvider theme={theme}>
          <RadioGroup onChange={handleStartTime} mt={3}>
            {Object.values(START_TIME).map((time, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={JSON.stringify(time.value)}
                  control={<Radio color="primary" />}
                  label={
                    <Typography
                      style={{ color: '#424242', fontFamily: 'Ubuntu' }}>
                      {time.key}
                    </Typography>
                  }
                />
              );
            })}
          </RadioGroup>
        </ThemeProvider>
      </Box>
      {errorStartTime === false ? (
        <></>
      ) : (
        <Box ml={5} mt={3}>
          <Box className={styles.subTitleError}>
            Please choose the starting time!
          </Box>
        </Box>
      )}
      {isTimeVisible === true ? (
        <Box
          ml={5}
          id="password"
          mt={2}
          mb={10}
          w={[200, 300, 400, 600]}
          d={{ md: 'flex' }}>
          <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Box>
                <KeyboardDatePicker
                  disableToolbar
                  color="primary"
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  value={startTime.start}
                  onChange={date => setStartTime({ start: date })}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Box>
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </Box>
      ) : (
        <></>
      )}

      {/* {isWeekVisible === true ? (
        <Box w={[200, 300, 400, 200]} ml={5} mt={2} mb={10} d={{ md: 'flex' }}>
          <Box>
            <ThemeProvider theme={theme}>
              <TextField
                fullWidth
                autoComplete={false}
                label="Weeks"
                variant="outlined"
                size="small"
                name="number"
                type="number"
                placeholder="Weeks"
                borderColor="#979EA7"
                onChange={e => setStartTime({ start: e.target.value })}
              />
            </ThemeProvider>
          </Box>
        </Box>
      ) : (
        <></>
      )} */}

      <Box w={100} ml={5} mt={6}>
        <ThemeProvider theme={theme}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={goNextPage}
            width="full"
            mt={4}
            style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}>
            Next
          </Button>
        </ThemeProvider>
      </Box>
    </Box>
  );
}

export default Step2;
