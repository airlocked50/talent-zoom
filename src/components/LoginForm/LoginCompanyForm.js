import React, { useState } from 'react';
import { FormControl, Box } from '@chakra-ui/react';
import { TextField, Button } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// import { useRouter } from "next/router";

import SuccessModal from '../Modals/Modal';
import { loginCompany } from '../../api/companyApi';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/actions/userAction';
import { useHistory } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function LoginCompanyForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalOptions, setModalOptions] = useState({
    open: false,
    message: '',
    title: '',
    isSuccess: false,
    yesButton: true,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const body = { email, password };
    const userInformations = await loginCompany({ body: body });
  
    if (userInformations !== null || undefined) {
      // if (userInformations.isVerified === true) {
        setModalOptions({
          ...modalOptions,
          open: true,
          message: 'Enjoy!',
          title: 'Login Successful! Welcome to TalentZoom',
          isSuccess: true,
          yesButton: false,
        });
        localStorage.setItem(
          'userInformations',
          JSON.stringify(userInformations)
        );
        dispatch(setUserData(JSON.stringify(userInformations)));
        if (userInformations.isFirstLogin === 'false') {
          history.push({
            pathname: `/companyProfile`,
            search: `?id=${userInformations ? userInformations._id : null}`,
          });
        } else {
          history.push({
            pathname: '/companyInformation',
          });
          window.scroll(0,0);
        }
      // }
      //  else {
      //   setModalOptions({
      //     ...modalOptions,
      //     open: true,
      //     message: 'Make sure that verify your email!',
      //     title: 'Please check your mail inbox for verification',
      //     isSuccess: false,
      //     yesButton: true,
      //   });
      // }
    } 
    else {
      setModalOptions({
        ...modalOptions,
        open: true,
        message: 'Make sure to fill out every field and confirm your password with a match.',
        title: `Oops, something isn't right, please try again.`,
        isSuccess: false,
        yesButton: true,
      });
    }
  }

  const handleCloseSuccess = () => {
    setModalOptions({
      ...modalOptions,
      open: false,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box w={[300, 300, 400, 400]}>
          <FormControl
            w={['fullWidth', 'fullWidth', 401, 400]}
            id="email"
            mt={[6, 6, 5, 4]}>
            <ThemeProvider theme={theme}>
              <TextField
                fullWidth
                color="primary"
                autoComplete={false}
                label="Email"
                variant="outlined"
                size="small"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email address"
              />
            </ThemeProvider>
          </FormControl>
          <FormControl
            w={['fullWidth', 'fullWidth', 400, 400]}
            id="password"
            mt={4}>
            <ThemeProvider theme={theme}>
              <TextField
                fullWidth
                color="primary"
                autoComplete={false}
                label="Password"
                variant="outlined"
                size="small"
                id="pasword"
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
              />
            </ThemeProvider>
          </FormControl>

          <FormControl w={['fullWidth', 'fullWidth', 400, 400]} mt={4}>
            <ThemeProvider theme={theme}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                width="full"
                mt={4}
                style={{
                  fontSize: '1rem',
                  fontWeight: '400',
                  fontFamily: 'Ubuntu',
                  textTransform: 'none',
                }}>
                Log in
              </Button>
            </ThemeProvider>
          </FormControl>
          <Box d="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <ThemeProvider theme={theme}>
            <Button
              onClick={() => {
                history.push({
                  pathname: '/resetPasswordCompany',
                });
              }}
              style={{
                fontSize: '1rem',
                fontWeight: '400',
                fontFamily: 'Ubuntu',
                textTransform: 'none',
                backgroundColor: 'transparent',
              }}
              color="primary">
              Forgot Password
            </Button>
          </ThemeProvider>
          </Box>
          <SuccessModal value={modalOptions} close={handleCloseSuccess} />
        </Box>
      </form>
    </>
  );
}

export default LoginCompanyForm;
