import React, { useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';
import styles from '../../LoginSteps/loginSteps.module.css';
import { Constants } from '../../../constants/index';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../../redux/actions/updateAction';
import {
  Chip,
  FormControl,
  FormControlLabel,
  InputLabel,
  TextField,
  Select,
  Radio,
  RadioGroup,
  Checkbox,
  Typography,
} from '@material-ui/core';
import moment from 'moment';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Autocomplete } from '@material-ui/lab';

const { JOB_TIME, WORK_PLACE, START_TIME, CITY_GROUPS } = Constants;

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function WorkingConditions({ user }) {
  const options = Object.values(WORK_PLACE).map(option => {
    const firstLetter = CITY_GROUPS[option.group].value;
    return {
      firstLetter,
      ...option,
    };
  });
  const [isTimeVisible, setIsTimeVisible] = React.useState(false);
  const [isWeekVisible, setIsWeekVisible] = React.useState(false);
  const [startTime, setStartTime] = React.useState({
    start: '01/01/2020',
  });
  const [usPermit, setUsPermit] = React.useState(user.usPermit);
  const [visaPermit, setVisaPermit] = React.useState(user.visaPermit);
  const [jobTimes, setJobTimes] = useState(user.wantedJobTimes);
  const [workingCities, setWorkingCities] = useState(user.wantedWorkCity);
  const [checkItems, setCheckItems] = React.useState([false, false]);
  // const { fullTime, contract } = checkItems;

  useEffect(() => {
    let a = [];
    if (user.wantedJobTimes.length > 0) {
      if (user.wantedJobTimes.length > 1) {
        user.wantedJobTimes.forEach(item => {
          if (item.value === 0) {
            a.push(true);
          }
          if (item.value === 1) {
            a.push(true);
          }
        });
        setCheckItems(a);
      } else if (user.wantedJobTimes.length < 2) {
        if (user.wantedJobTimes[0].value === 0) {
          a.push(true);
          a.push(false);
        }
        if (user.wantedJobTimes[0].value === 1) {
          a.push(false);
          a.push(true);
        }
        setCheckItems(a);
      }
    }
    
  }, []);

  const dispatch = useDispatch();

  const deleteCity = (city, index) => {
    const updatedCity = workingCities.filter((city, i) => i !== index);
    setWorkingCities(updatedCity);
    let updatedData = {
      wantedWorkCity: updatedCity,
    };
    dispatch(updateUserData(updatedData));
  };

  const handleJobTime = e => {
    const { value, checked, name } = e.target;
    // setCheckItems({ ...checkItems, [name]: false });
    if (checked === true) {
      //   setCheckedItems()

      const parsedData = JSON.parse(value);

      if (parsedData.value === 0) {
        let checkCopy = [...checkItems];
        checkCopy[0] = checked;
        setCheckItems(checkCopy);
      }
      if (parsedData.value === 1) {
        let checkCopy = [...checkItems];
        checkCopy[1] = checked;
        setCheckItems(checkCopy);
      }
      setJobTimes([...jobTimes, JSON.parse(value)]);
      let updatedData = {
        wantedJobTimes: [...jobTimes, JSON.parse(value)],
      };
      dispatch(updateUserData(updatedData));
    } else {
      const deletedJobTimes = JSON.parse(value);
      const parsedData = JSON.parse(value);
      if (parsedData.value === 0) {
        let checkCopy = [...checkItems];
        checkCopy[0] = checked;
        setCheckItems(checkCopy);
      }
      if (parsedData.value === 1) {
        let checkCopy = [...checkItems];
        checkCopy[1] = checked;
        setCheckItems(checkCopy);
      }
      const updatedJobTimes = jobTimes.filter(
        jobT => jobT.value !== deletedJobTimes.value
      );
      setJobTimes(updatedJobTimes);
      let updatedData = {
        wantedJobTimes: updatedJobTimes,
      };
      dispatch(updateUserData(updatedData));
    }
  };

  const handleBlur = () => {
    let updatedData = {
      usPermit: usPermit == 'true',
    };
    dispatch(updateUserData(updatedData));
  };

  const handleVisaBlur = () => {
    let updatedData = {
      visaPermit: visaPermit == 'true',
    };
    dispatch(updateUserData(updatedData));
  };

  const handleWorkingCities = (option, value) => {
    if (value) {
      setWorkingCities([
        ...workingCities,
        { key: value.key, value: value.value },
      ]);
      let updatedData = {
        wantedWorkCity: [
          ...workingCities,
          { key: value.key, value: value.value },
        ],
      };
      dispatch(updateUserData(updatedData));
      value = '';
    }
  };

  const handlePermit = e => {
    setUsPermit(e.target.value);
  };
  const handleVisaPermit = e => {
    setVisaPermit(e.target.value);
  };

  const handleStartTime = e => {
    if (JSON.parse(e.target.value) === 1) {
      setIsTimeVisible(false);
      setIsWeekVisible(true);
    } else if (JSON.parse(e.target.value) === 2) {
      setIsTimeVisible(true);
      setIsWeekVisible(false);
    } else if (JSON.parse(e.target.value) === 0) {
      setStartTime({ start: moment()._d });
      setIsTimeVisible(false);
      let updatedData = {
      startTime: startTime,
    };
    dispatch(updateUserData(updatedData));
    }
   
  };

  const updateStarTime = (e) => {
    let startTime = { start: e }
    let updatedData = {
      startTime: startTime,
    };
    dispatch(updateUserData(updatedData));
  }

  return (
    <Box>
      <Box
        ml={5}
        w={[200, 300, 400, 600]}
        mt={10}
        className={styles.subTitleBold}>
        Which employment opportunities should we match you with? *
      </Box>

      <Box direction="column" w={200} pl={6} mt={1} spacing={1}>
        {Object.values(JOB_TIME).map((jobItem, index) => {
          return (
            <ThemeProvider key={index} theme={theme}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkItems[index]}
                    value={JSON.stringify(jobItem)}
                    onChange={handleJobTime}
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

      <Box
        ml={5}
        w={[200, 300, 300, 300]}
        mt={5}
        className={styles.subTitleBold}>
        Where would you like to work? *
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
              <TextField {...params} label="Cities" variant="outlined" />
            )}
          />
        </Box>
      </ThemeProvider>

      <Box
        h={'auto'}
        w={'90%'}
        d="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        p={2}>
        {workingCities.length < 1 ? (
          <Box mt={5} ml={5} className={styles.subTitle}>
            *Add city from dropdown
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

      <Box
        ml={5}
        w={[200, 300, 400, 500]}
        mt={2}
        className={styles.subTitleBold}>
        Are you authorized to work in the United States? *
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
              onBlur={handleBlur}
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

      <Box
        ml={5}
        w={[200, 300, 400, 500]}
        mt={2}
        className={styles.subTitleBold}>
        Do you (or will you) need visa sponsorship to work in the United States?
        *
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
              onBlur={handleVisaBlur}
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

      <Box
        ml={5}
        w={[200, 300, 300, 300]}
        mt={2}
        className={styles.subTitleBold}>
        When can you start? *
      </Box>
      <Box ml={5} direction="column">
        <ThemeProvider theme={theme}>
          <RadioGroup mt={3}>
            {Object.values(START_TIME).map((time, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={JSON.stringify(time.value)}
                  control={<Radio onClick={handleStartTime} color="primary" />}
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
                  onChange={date => { 
                    console.log(date)
                    updateStarTime(date)
                    setStartTime({ start: date })}}
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

      {isWeekVisible === true ? (
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
      )}
    </Box>
  );
}

export default WorkingConditions;
