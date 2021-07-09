import { Box, Text } from '@chakra-ui/react';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../LoginSteps/loginSteps.module.css';
import { updateUserData } from '../../../redux/actions/updateAction';
import {
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function Salary({ user }) {
  const [money, setMoney] = useState(user.wantedSalary);
  const [hourlyRate, setHourlyRate] = useState(user.hourlyRate);

  const dispatch = useDispatch();

  const handleBlur = () => {
    setHourlyRate(money / 2080);
    let updatedData = {
      wantedSalary: money,
      hourlyRate,
    };
    dispatch(updateUserData(updatedData));
  };

  return (
    <Box w={[280, 320, 400, 1000]}>
      <Box mt={10} mb={20}>
        <Box ml={5} mt={10}>
          <Box variant="h5" className={styles.subTitleBold}>
            What is the minimum pre-tax salary you want to earn at your next
            job? *
          </Box>
        </Box>
        <Box ml={5} mt={2}>
          <Box variant="body1" className={styles.subTitle}>
            We will only match you with job openings that align with this
            amount.
          </Box>
        </Box>
        <Box ml={5} mt={2}>
          <Box variant="body1" className={styles.subTitle}>
            I want to earn:
          </Box>
        </Box>
        <Box d="flex" float="left" w={[250, 350, 450, 600]}>
          <ThemeProvider theme={theme}>
            <Box id="firstName" w={[200, 200, 400, 300]} ml={5} mt={4}>
              <FormControl
                fullWidth
                size="small"
                // className={classes.margin}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Full Time Salary
                </InputLabel>
                <OutlinedInput
                  type="number"
                  name="salary"
                  onBlur={handleBlur}
                  onKeyDown={(evt) => (evt.key === ',' || evt.key === '.') && evt.preventDefault()}
                  defaultValue={user.wantedSalary}
                  onChange={e => {
                    setMoney(parseInt(e.target.value));
                    
                  }}
                  placeholder="10000 - 500000 (gross/year) "
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
            <Box id="firstName" w={[200, 200, 400, 300]} ml={5} mt={4}>
              <FormControl
                fullWidth
                size="small"
                // className={classes.margin}
                variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">
                  Hourly Contract Rate
                </InputLabel>
                <OutlinedInput
                  value={Math.round(hourlyRate * 100) / 100}
                  type="number"
                  name="hourlyRate"
                  onBlur={handleBlur}
                  onChange={e => {
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
      </Box>
    </Box>
  );
}

export default Salary;
