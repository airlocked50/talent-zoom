/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Constants } from '../../constants/index';
import { addUserData } from '../../redux/actions/stepOneAction';
import { Autocomplete } from '@material-ui/lab';
import { Chip, TextField, Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { blue } from '@material-ui/core/colors';
import styles from '../LoginSteps/loginSteps.module.css';
const { WORK_PLACE, JOB_TITLES, JOB_GROUPS } = Constants;

const options = Object.values(WORK_PLACE).map(option => {
  const firstLetter = option.value;
  return {
    firstLetter,
    ...option,
  };
});

const jobOptions = Object.values(JOB_TITLES).map(option => {
  const firstLetter = JOB_GROUPS[option.group].value;
  return {
    firstLetter,
    ...option,
  };
});

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function Step1() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (stepData.wantedRoles) {
      setJobs(stepData.wantedRoles);
    }
    if (stepData.wantedWorkCity) {
      setWorkingCities(stepData.wantedWorkCity);
    }
  }, []);
  const [workingCities, setWorkingCities] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [errorJobs, setErrorJobs] = useState(false);
  const [errorCities, setErrorCities] = useState(false);
  const { stepData } = useSelector(state => state.step);

  const history = useHistory();
  const dispatch = useDispatch();

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

  const getSelectedItem = (option, value) => {
    if (value) {
      setJobs([...jobs, { key: value.key, value: value.value }]);
      value = '';
      setErrorJobs(false);
   
    }
  };

  const deleteJob = (job, index) => {
    const updatedJob = jobs.filter((city, i) => i !== index);
    setJobs(updatedJob);
  };

  const goNextPage = () => {
    if (workingCities.length !== 0 && jobs.length !== 0) {
      let updatedData = {
        wantedRoles: jobs,
        wantedWorkCity: workingCities,
      };
      dispatch(addUserData(updatedData));
      history.push('/companyContract');
    }
    if (workingCities.length === 0) {
      setErrorCities(true);
    }
    if (jobs.length === 0) {
      setErrorJobs(true);
    }
  };
  return (
    <>
      <Box ml={[0, 5, 5, 5]}>
        <Box variant="h4" className={styles.mainTitle}>
          Let’s get started!
        </Box>
      </Box>
      <hr />

      <Box ml={[0, 5, 5, 5]} mt={10}>
        <Box variant="h5" className={styles.subTitleBold}>
          What cities are you hiring in?
        </Box>
      </Box>

      <Box w={'80%'} ml={[0, 5, 5, 5]} mt={3}>
        <Box variant="body1" className={styles.subTitle}>
          We’ll match you with job-seekers who live in these areas. You can also
          select ​Remote to enable matches from anywhere
        </Box>
      </Box>

      <ThemeProvider theme={theme}>
        <Box w={[200, 200, 300, 300]} ml={[0, 5, 5, 5]} mt={5}>
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
              <TextField error={errorCities} {...params} label="Cities" variant="outlined" />
            )}
          />
        </Box>
      </ThemeProvider>

      <Stack ml={[0, 5, 5, 5]} mt={1} spacing={1}>
        <Box
          h={'auto'}
          w={'90%'}
          d="flex"
          flexWrap="wrap"
          justifyContent="flex-start"
          p={2}>
          {workingCities.length < 1 ? (
            <Box mt={2}>
              <Box variant="body1" className={styles.subTitle}>
                *Add city from dropdown
              </Box>
            </Box>
          ) : (
            (workingCities || []).map((city, index) => (
              <ThemeProvider key={index} theme={theme}>
                <Chip
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
      </Stack>

      <Box>
        <Box ml={[0, 5, 5, 5]} mt={5}>
          <Box w={"90%"} variant="h5" className={styles.subTitleBold}>
          What type of candidates are you looking to hire?
          </Box>
        </Box>

        <Box w={'80%'} ml={[0, 5, 5, 5]} mt={2}>
          <Box variant="body1" className={styles.subTitle}>
          Add all applicable titles that are relevant for your search.
          </Box>
        </Box>

        <ThemeProvider theme={theme}>
          <Box w={[200, 200, 300, 300]} ml={[0, 5, 5, 5]} mt={5}>
            <Autocomplete
              fullWidth
              color="primary"
              id="grouped-demo"
              onChange={getSelectedItem}
              options={jobOptions.sort(
                (a, b) => a.firstLetter.key - b.firstLetter.key
              )}
              groupBy={option => option.firstLetter}
              getOptionLabel={option => option.key}
              renderInput={params => (
                <TextField error={errorJobs} {...params} label="Roles" variant="outlined" />
              )}
            />
          </Box>
        </ThemeProvider>
      </Box>
      <Stack ml={[0, 5, 5, 5]} spacing={1}>
        <Box
          h={'auto'}
          w={'90%'}
          d="flex"
          flexWrap="wrap"
          justifyContent="flex-start"
          p={2}>
          {jobs.length < 1 ? (
            <Box mt={2}>
              <Box variant="body1" className={styles.subTitle}>
                *Add roles from dropdown
              </Box>
            </Box>
          ) : (
            (jobs || []).map((job, index) => (
              <ThemeProvider key={index} theme={theme}>
                <Chip
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
                      {job.key}
                    </Box>
                  }
                  deleteIcon={<HighlightOffIcon style={{ color: 'white' }} />}
                  onDelete={() => deleteJob(job, index)}
                />
              </ThemeProvider>
            ))
          )}
        </Box>
      </Stack>

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
    </>
  );
}

export default Step1;
