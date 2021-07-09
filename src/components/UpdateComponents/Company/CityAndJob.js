/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Constants } from '../../../constants/index';
import { updateUserData } from '../../../redux/actions/updateAction';
import { Autocomplete } from '@material-ui/lab';
import { Chip, TextField } from '@material-ui/core';
import styles from '../../LoginSteps/loginSteps.module.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
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

function CityAndJob({ wantedRoles, wantedWorkCities }) {
  const [workingCities, setWorkingCities] = useState(wantedWorkCities);
  const [jobs, setJobs] = useState(wantedRoles);

  useEffect(() => {}, []);

  const dispatch = useDispatch();

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

  const deleteCity = (city, index) => {
    const updatedCity = workingCities.filter((city, i) => i !== index);
    let updatedData = {
      wantedWorkCity: updatedCity,
    };
    dispatch(updateUserData(updatedData));
    setWorkingCities(updatedCity);
  };

  const getSelectedItem = (option, value) => {
    if (value) {
      setJobs([...jobs, { key: value.key, value: value.value }]);
      let updatedData = {
        wantedRoles: [...jobs, { key: value.key, value: value.value }],
      };
      value = '';
      
      dispatch(updateUserData(updatedData));
    }
  };

  const deleteJob = (job, index) => {
    const updatedJob = jobs.filter((city, i) => i !== index);
    setJobs(updatedJob);
    let updatedData = {
      wantedRoles: updatedJob,
    };
    dispatch(updateUserData(updatedData));
  };

  return (
    <Box>
      <Box ml={[0, 5, 5, 5]} mt={10}>
        <Box variant="h5" className={styles.subTitleBold}>
          What cities are you hiring in?
        </Box>
      </Box>

      <Box ml={[0, 5, 5, 5]} mt={3}>
        <Box variant="body1" className={styles.subTitle}>
          Hire candidates are located in 22 major markets; we also have people
          who are interested in working remotely.
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
              <TextField {...params} label="Cities" variant="outlined" />
            )}
          />
        </Box>
      </ThemeProvider>

      <Stack ml={[0, 5, 5, 5]} mt={1} spacing={1}>
        <Box
          h={'auto'}
          w={[280, 500, 500, 500]}
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
          <Box variant="h5" className={styles.subTitleBold}>
          What type of candidates are you looking to hire?
          </Box>
        </Box>

        <Box ml={[0, 5, 5, 5]} mt={2}>
          <Box variant="body1" className={styles.subTitle}>
            Add all applicable titles that are relevant for your search.
          </Box>
        </Box>

        <ThemeProvider theme={theme}>
          <Box w={[200, 200, 300, 300]} ml={5} mt={5}>
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
                <TextField {...params} label="Roles" variant="outlined" />
              )}
            />
          </Box>
        </ThemeProvider>
      </Box>
      <Stack ml={[0, 5, 5, 5]} spacing={1}>
        <Box
          h={'auto'}
          w={[280, 500, 500, 500]}
          d="flex"
          flexWrap="wrap"
          justifyContent="flex-start"
          p={2}>
          {jobs.length < 1 ? (
            <Box variant="body1" className={styles.subTitle}>
              *Add roles from dropdown
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
    </Box>
  );
}

export default CityAndJob;
