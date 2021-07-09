import React, { useState } from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';

import styles from '../../LoginSteps/loginSteps.module.css';
import { Constants } from '../../../constants/index';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../../redux/actions/updateAction';
import {
  IconButton,
  FormControl,
  TextField,
  InputLabel,
  Select,
  Typography,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import ClearIcon from '@material-ui/icons/Clear';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const { JOB_TITLES, JOB_GROUPS } = Constants;

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function TalentExperience({ user }) {
  const dispatch = useDispatch();

  const [jobs, setJobs] = useState(user.wantedRoles);

  const getSelectedItem = (option, value) => {
    if (value) {
      setJobs([...jobs, { key: value.key, value: value.value, years: 0 }]);
      value = '';
    }
  };

  const options = Object.values(JOB_TITLES).map(option => {
    const firstLetter = JOB_GROUPS[option.group].value;
    return {
      firstLetter,
      ...option,
    };
  });

  const deletedJobs = job => {
    const deletedJobs = job;
    const updatedJobs = jobs.filter(job => job.key !== deletedJobs.key);
    setJobs(updatedJobs);
    let updatedData = {
      wantedRoles: updatedJobs,
    };
    dispatch(updateUserData(updatedData));
  };

  const handleYears = (e, job, index) => {
    const updatedJobs = jobs;
    updatedJobs[index] = {
      ...updatedJobs[index],
      ...{ years: parseInt(e.target.value) },
    };
    setJobs(updatedJobs);
    let updatedData = {
      wantedRoles: jobs,
    };
    dispatch(updateUserData(updatedData));
  };
  const handleBlur = () => {
    let updatedData = {
      wantedRoles: jobs,
    };
    dispatch(updateUserData(updatedData));
  };

  return (
    <Box w={[300, 300, 500, 900]}>
      <Box>
        <Box w={[250, 300, 400, 500]}>
          <Box
            ml={[5, 5, 5, 5]}
            className={styles.subTitleBold}
            mt={10}
            fontSize="xl">
            Select the title that best describes what type of opportunity you
            are looking for. *
          </Box>
        </Box>

        <Box w={[250, 300, 400, 800]}>
          <Box ml={[5, 5, 5, 5]} mt={2} className={styles.subTitle}>
            These will help employers discover your profile. You can choose
            multiple roles.
          </Box>
        </Box>

        <ThemeProvider theme={theme}>
          <Box w={[200, 200, 300, 300]} ml={[5, 5, 5, 5]} mt={5}>
            <Autocomplete
              fullWidth
              id="grouped-demo"
              onChange={getSelectedItem}
              color="primary"
              options={options.sort(
                (a, b) => a.firstLetter.key - b.firstLetter.key
              )}
              groupBy={option => option.firstLetter}
              getOptionLabel={option => option.key}
              // style={{ width: 300, margin: 20 }}
              renderInput={params => (
                <TextField {...params} label="Roles" variant="outlined" />
              )}
            />
          </Box>
        </ThemeProvider>
        {/* <Box d={{ md: "flex" }} w={[300, 300, 200, 200]} mt={10}></Box> */}
      </Box>

      {jobs.map((job, index) => {
        return (
          <Box w={['100%', 455, 700, 700]} key={index}>
            <Flex direction="row" h={'auto'}>
              <Box ml={[5, 5, 5, 5]} fontWeight="bold" mt={10} fontSize="md">
                <Typography variant="body1">#{index + 1}</Typography>
              </Box>
              <Text
                w={[70, 120, 120, 150]}
                ml={[5, 5, 5, 5]}
                fontWeight="bold"
                mt={10}
                fontSize="md">
                <Typography variant="body1">{job.key}</Typography>
              </Text>

              <Box w={['100%', 190, 250, 300]} ml={[5, 5, 10, 30]} mt={5}>
                <ThemeProvider theme={theme}>
                  <FormControl variant="outlined" color="primary" fullWidth>
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Experience
                    </InputLabel>
                    <Select
                      native
                      value={job.years}
                      onChange={e => handleYears(e, job.value, index)}
                      onBlur={handleBlur}
                      label="Experience"
                      inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                      }}>
                      <option aria-label="None" value="" />
                      <option key="1" value={0}>{`<1 Years`}</option>
                      <option key="2" value={1}>
                        1 Year
                      </option>
                      <option key="3" value={2}>
                        2 Years
                      </option>
                      <option key="4" value={3}>
                        3 Years
                      </option>
                      <option key="5" value={4}>
                        4 Years
                      </option>
                      <option key="6" value={5}>
                        5+ Years
                      </option>
                    </Select>
                  </FormControl>
                </ThemeProvider>
              </Box>

              <Box ml={[1, 1, 1, 10]} mt={7}>
                <IconButton onClick={() => deletedJobs(job)}>
                  <ClearIcon />
                </IconButton>
              </Box>
            </Flex>
            <Box justifyContent="center" mt={2} w={[250, 350, 450, 600]}>
              <hr />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default TalentExperience;
