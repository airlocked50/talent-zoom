import React, { useEffect, useState } from 'react';

import { Box, Flex } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { Constants } from '../../constants/index';
import { useDispatch, useSelector } from 'react-redux';
import { addUserData } from '../../redux/actions/stepOneAction';
import { Autocomplete } from '@material-ui/lab';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';
import {
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  Button,
  Typography,
} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import styles from './loginSteps.module.css';

const { WHAT_BRINGS, JOB_TITLES, JOB_GROUPS } = Constants;

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function Step3() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (stepData.wantedRoles) {
      setJobs(stepData.wantedRoles);
    }
  }, []);
  const dispatch = useDispatch();
  const { stepData } = useSelector(state => state.step);
  const [whatBrings, setWhatBrings] = React.useState(undefined);
  const history = useHistory();
  const [jobs, setJobs] = useState([]);
  const [errorExperience, setErrorExperience] = useState(false);
  useEffect(() => {}, [jobs]);

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
  };

  const handleBrings = e => {
    setWhatBrings(JSON.parse(e.target.value));
  };

  const goNextPage = () => {
    let updatedData = {
      wantedRoles: jobs,
      whatBrings,
    };
    if (jobs.length !== 0) {
      dispatch(addUserData(updatedData));
      history.push('/talentExperience');
    } else {
      setErrorExperience(true);
    }
  };

  const handleYears = (e, job, index) => {
    const updatedJobs = jobs;
    updatedJobs[index] = {
      ...updatedJobs[index],
      ...{ years: parseInt(e.target.value) },
    };
    setJobs(updatedJobs);
  };
  const getSelectedItem = (option, value) => {
    if (value) {
      setJobs([...jobs, { key: value.key, value: value.value, years: 0 }]);
      setErrorExperience(false);
      value = '';
    }
  };

  return (
    <>
      <Box ml={[0, 0, 5, 5]}>
        <Box w={'80%'} variant="h4" className={styles.mainTitle}>
          Tell us what you're looking for
        </Box>
      </Box>
      <hr />

      <Box ml={[0, 0, 5, 5]} mt={10}>
        <Box variant="h5" className={styles.subTitleBold}>
          What brings you to TalentZoom?
        </Box>
      </Box>

      <Box ml={[0, 0, 5, 5]} direction="column">
        <ThemeProvider theme={theme}>
          <RadioGroup onChange={handleBrings} mt={3}>
            {Object.values(WHAT_BRINGS).map((bring, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={JSON.stringify(bring)}
                  control={<Radio color="primary" />}
                  label={
                    <Typography
                      style={{ color: '#424242', fontFamily: 'Ubuntu' }}>
                      {bring.key}
                    </Typography>
                  }
                />
              );
            })}
          </RadioGroup>
        </ThemeProvider>
      </Box>

      <Box>
        <Box w={["90%", 300, 400, 500]}>
          <Box ml={[0, 0, 5, 5]} mt={10}>
            <Box variant="h5" className={styles.subTitleBold}>
              {' '}
              Select the title that best describes what type of opportunity you
              are looking for. *
            </Box>
          </Box>
        </Box>

        <Box w={[250, 300, 400, 800]}>
          <Box ml={[0, 0, 5, 5]} mt={2}>
            <Box variant="body1" className={styles.subTitle}>
              These will help employers discover your profile. You can choose
              multiple roles.
            </Box>
          </Box>
        </Box>

        <ThemeProvider theme={theme}>
          <Box w={[200, 200, 300, 300]} ml={[0, 0, 5, 5]} mt={6}>
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
                <TextField
                  error={errorExperience}
                  {...params}
                  label="Roles"
                  variant="outlined"
                />
              )}
            />
          </Box>
        </ThemeProvider>
        {/* <Box d={{ md: "flex" }} w={[300, 300, 200, 200]} mt={10}></Box> */}
      </Box>

      {jobs.map((job, index) => {
        return (
          <Box w={['90%', 400, 600, 700]} key={index}>
            <Flex direction="row" h={'auto'}>
              <Box ml={[0, 5, 5, 5]} mt={10}>
                <Typography variant="body1">#{index + 1}</Typography>
              </Box>

              <Box w={[100, 120, 200, 200]} ml={[0, 2, 5, 5]} mt={10}>
                <Typography variant="body1">{job.key}</Typography>
              </Box>

              <Box w={['80%', 250, 300, 300]} ml={[1, 30, 20, 40]} mt={10}>
                <ThemeProvider theme={theme}>
                  <FormControl variant="outlined" color="primary" fullWidth>
                    <InputLabel htmlFor="outlined-age-native-simple">
                      Experience
                    </InputLabel>
                    <Select
                      native
                      onChange={e => handleYears(e, job.value, index)}
                      label="Experience"
                      inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                      }}>
                      <option aria-label="None" value={job.value || 0}>
                        {(job.years && (job.years === 1 ? 
                        job.years + " Year" : job.years + " Years")  ) || ''}
                      </option>
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

              <Box ml={[0, 5, 10, 10]} mt={10}>
                <IconButton onClick={() => deletedJobs(job)}>
                  <ClearIcon />
                </IconButton>
              </Box>
            </Flex>
            <hr style={{ marginTop: '20px' }} />
          </Box>
        );

        //<JobExpeerience job={job} index={index + 1} />
      })}

      <Box w={100} ml={5} mt={6}>
        <ThemeProvider theme={theme}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={goNextPage}
            style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}
            width="full"
            mt={4}>
            Next
          </Button>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default Step3;