/* eslint-disable react/no-unescaped-entities */
import { Box, Flex } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTalent } from '../../api/talentApi';
import { addUserData } from '../../redux/actions/stepOneAction';
import SuccessModal from '../Modals/Modal';
import {
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
  Button,
  TextField,
  Chip,
} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import styles from './loginSteps.module.css';
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function Step7() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const [money, setMoney] = useState(undefined);
  const [errorSalary, setErrorSalary] = useState(false);
  const [errorHourlyRate, setErrorHourlyRate] = useState(false);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [modalOptions, setModalOptions] = useState({
    open: false,
    message: '',
    title: '',
    isSuccess: false,
    yesButton: true,
  });
  const [bannedComp, setBannedComp] = useState('');
  const [talentBannedCompanies, setBannedCompanies] = useState([]);

  const { stepData } = useSelector(state => state.step);
  const { userData } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const saveCompanies = () => {
    if (bannedComp.trim().length !== 0) {
      setBannedCompanies([...talentBannedCompanies, { compName: bannedComp }]);
     
      setBannedComp('');
    }
  };

  const deleteCompanies = (talentSkill, index) => {
    const updatedBannedComp = talentBannedCompanies.filter(
      (item, i) => i !== index
    );
    setBannedCompanies(updatedBannedComp);
  };

  const goNextPage = async () => {
    if (money === undefined || money === 0  || hourlyRate === 0) {
      if (money === undefined || money === 0 ) {
        setErrorSalary(true);
      }
      if (hourlyRate === 0) {
        setErrorHourlyRate(true);
      }
    } else {
      const profile = JSON.parse(userData);
      let updatedData = {};
      if (profile.email) {
        updatedData = {
          wantedSalary: money,
          hourlyRate,
          bannedCompanies: talentBannedCompanies,
          name: profile.name,
          surname: profile.surname,
          email: profile.email,
          isFirstLogin: 'false',
        };
      } else {
        updatedData = {
          wantedSalary: money,
          hourlyRate,
          bannedCompanies: talentBannedCompanies,
          name: profile.name,
          email: stepData.email,
          surname: profile.surname,
          isFirstLogin: 'false',
        };
      }

      dispatch(addUserData(updatedData));
      const user = await updateTalent({
        body: { ...stepData, ...updatedData },
        _id: profile._id,
        token: profile.tokenCode,
      });
      if (!user || user !== null || user !== undefined) {
        setModalOptions({
          ...modalOptions,
          open: true,
          message: 'Enjoy with your experience!',
          title: 'Login Steps Finish!',
          isSuccess: true,
          yesButton: false,
        });
        localStorage.setItem('userInformations', JSON.stringify(user));
        history.push({
          pathname: `/talentProfile`,
          search: `?id=${profile ? profile._id : null}`,
        });
      } else {
        setModalOptions({
          ...modalOptions,
          open: true,
          message: 'Please make sure that complete necessary fields!',
          title: 'Opps something went wrong please try again',
          isSuccess: false,
          yesButton: true,
        });
      }
    }
  };

  const handleCloseSuccess = () => {
    setModalOptions({
      ...modalOptions,
      open: false,
    });
  };

  return (
    <Box>
      <Box ml={5}>
        <Box variant="h4" className={styles.mainTitle}>
          And finally, your compensation.
        </Box>
      </Box>
      <hr />

      <Box mt={10} mb={20}>
        <Box w={'80%'} ml={5} mt={10}>
          <Box variant="h5" className={styles.subTitleBold}>
            What is the minimum annual base salary you want to earn at your next job?
          </Box>
        </Box>

        <Box w={'80%'} ml={5} mt={2}>
          <Box variant="body1" className={styles.subTitle}>
            We will only match you with jobs that will at least meet your minimum salary requirements.
          </Box>
        </Box>

        <Box ml={5} mt={2}>
          <Box variant="body1" className={styles.subTitle}>
            I want to earn:
          </Box>
        </Box>

        <Box d="flex" flexWrap="wrap" w={['90%', 500, 800, 800]}>
          <ThemeProvider theme={theme}>
            <Box id="firstName" w={['100%', 300, 300, 300]} ml={5} mt={4}>
              <FormControl
                fullWidth
                size="small"
                // className={classes.margin}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Full Time Salary
                </InputLabel>
                <OutlinedInput
                  error={errorSalary}
                  type="number"
                  name="salary"
                  value={money}
                  onKeyDown={(evt) => (evt.key === ',' || evt.key === '.') && evt.preventDefault()}
                  onChange={e => {
                    setErrorSalary(false);
                    setMoney(parseInt(e.target.value));
                  }}
                  onBlur={() => setHourlyRate(money / 2080)}
                  placeholder="100,000 "
                  id="salary"
                  label="Full Time Salary"
                  variant="outlined"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
            </Box>
            <Box id="firstName" w={['100%', 300, 300, 300]} ml={5} mt={4}>
              <FormControl
                fullWidth
                size="small"
                // className={classes.margin}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Hourly Contract Rate
                </InputLabel>
                <OutlinedInput
                  error={errorHourlyRate}
                  value={Math.round(hourlyRate * 100) / 100}
                  type="number"
                  name="hourlyRate"
                  onChange={e => {
                    setErrorHourlyRate(false);
                    setHourlyRate(parseInt(e.target.value));
                  }}
                  placeholder="20 (per hour) "
                  id="hourlyRate"
                  label="Hourly Contract Rate"
                  variant="outlined"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  labelWidth={60}
                />
              </FormControl>
            </Box>
          </ThemeProvider>
        </Box>

        <Box mt={10}>
          <Box ml={5} mt={5}>
            <Box variant="h5" className={styles.subTitleBold}>
              Black List
            </Box>
          </Box>

          <Box ml={5}>
            <Box variant="body1" className={styles.subTitle}>
              I do not want to be visible to this company
            </Box>
          </Box>

          <Flex float="left">
            <Box w={['90%', 180, 200, 250]} ml={5} mt={4}>
              <ThemeProvider theme={theme}>
                <TextField
                  fullWidth
                  size="small"
                  onChange={e => setBannedComp(e.target.value)}
                  name="bannedComp"
                  type="text"
                  placeholder="Cisco"
                  value={bannedComp}
                  id="bannedComp"
                  label="Banned Companies"
                  variant="outlined"
                />
              </ThemeProvider>
            </Box>

            <Box w={['60%', 100, 100, 100]} ml={[1, 5, 5, 5]} mt={4}>
              <ThemeProvider theme={theme}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={saveCompanies}
                  width="full"
                  mt={4}
                  style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}>
                  Save
                </Button>
              </ThemeProvider>
            </Box>
          </Flex>
        </Box>
      </Box>

      <Box
        h={'auto'}
        w={[300, 500, 700, 900]}
        ml={5}
        d="flex"
        flexWrap="wrap"
        justifyContent="flex-start">
        {talentBannedCompanies.length < 1 ? (
          <Box mt={1}>
            <Box variant="body1" className={styles.subTitle}>
              *Add companies
            </Box>
          </Box>
        ) : (
          (talentBannedCompanies || []).map((bannedComp, index) => (
            <ThemeProvider key={index} theme={theme}>
              <Chip
                style={{
                  marginLeft: '10px',
                  marginTop: '5px',
                  backgroundColor: '#616161',
                }}
                deleteIcon={<HighlightOffIcon style={{ color: 'white' }} />}
                label={
                  <Box
                    style={{
                      color: 'white',
                      fontFamily: 'Ubuntu',
                      fontWeight: 400,
                    }}>
                    {bannedComp.compName}
                  </Box>
                }
                onDelete={() => deleteCompanies(bannedComp, index)}
              />
            </ThemeProvider>
          ))
        )}
      </Box>

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
      <SuccessModal value={modalOptions} close={handleCloseSuccess} />
    </Box>
  );
}

export default Step7;
