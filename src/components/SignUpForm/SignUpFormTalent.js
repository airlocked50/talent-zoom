import React from 'react';
import { FormControl, Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { createTalent } from '../../api/talentApi';
import LinkedInSignUp from '../LinkedIn/LinkedInSignUp';
import SuccessModal from '../Modals/Modal';
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function SignUpFormTalent() {
  const history = useHistory();
  const [terms, setTerms] = useState(true);
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    rePassword: '',
  });
  const [modalOptions, setModalOptions] = useState({
    open: false,
    message: '',
    title: '',
    isSuccess: false,
    yesButton: true,
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleCheck = e => {
    setTerms(!terms);
  };

  const handleCloseSuccess = () => {
    setModalOptions({
      ...modalOptions,
      open: false,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      name: values.name,
      surname: values.surname,
      password: values.password,
      email: values.email,
    };
  
    if (
      values.email.trim().length === 0 ||
      values.password.trim().length === 0 ||
      values.name.trim().length === 0 ||
      values.surname.trim().length === 0 ||
      values.rePassword.trim().length === 0 ||
      values.password !== values.rePassword
    ) {
      setModalOptions({
        ...modalOptions,
        open: true,
        message: 'Make sure to fill out every field and confirm your password with a match.',
        title: `Oops, something isn't right, please try again.`,
        isSuccess: false,
        yesButton: true,
      });
    } else {
      const userInformations = await createTalent({ body: body });
      if (userInformations !== null || undefined) {
        setModalOptions({
          ...modalOptions,
          open: true, 
          // message:
          //   'Your verification e-mail will reach you soon. Please check your inbox.',
          message:
            'Sign in and view your TalentZoom profile.',
          title: 'Sign Up Successful!',
          isSuccess: true,
          yesButton: false,
        });
        setValues({
          name: '',
          surname: '',
          email: '',
          password: '',
          rePassword: '',
        });
        setTimeout(() => {
          history.push({
            pathname: '/login',
            state: 0,
          });
          
        }, 4000);
      } else {
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
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <Box
            w={[425, 425, 400, 400]}
            display="flex"
            flexWrap="wrap"
            justifyContent="center">
            <FormControl id="firstName" w={[280, 280, 190, 190]} mt={4}>
              <TextField
                size="small"
                type="name"
                fullWidth
                name="name"
                value={values.name}
                onChange={handleInputChange}
                placeholder="Your First Name"
                id="name"
                label="First Name"
                variant="outlined"
              />
            </FormControl>

            <FormControl
              id="lastName"
              w={[280, 280, 190, 190]}
              ml={[0, 0, 5, 5]}
              mt={4}>
              <TextField
                size="small"
                fullWidth
                type="name"
                name="surname"
                value={values.surname}
                onChange={handleInputChange}
                placeholder="Your Last Name"
                label="Last Name"
                variant="outlined"
                id="surname"
              />
            </FormControl>

            <FormControl id="email" w={[280, 280, 400, 400]} mt={4}>
              <TextField
                fullWidth
                autoComplete={false}
                label="Email"
                variant="outlined"
                size="small"
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                placeholder="Email address"
              />
            </FormControl>

            <FormControl id="password" w={[280, 280, 400, 400]} mt={4}>
              <TextField
                fullWidth
                autoComplete={false}
                label="Password"
                variant="outlined"
                size="small"
                id="pasword"
                type="password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
                placeholder="Password"
              />
            </FormControl>

            <FormControl id="rePassword" w={[280, 280, 400, 400]} mt={4}>
              <TextField
                fullWidth
                autoComplete={false}
                label="Confirm Password"
                variant="outlined"
                size="small"
                id="pasword"
                type="password"
                name="rePassword"
                value={values.rePassword}
                onChange={handleInputChange}
                placeholder="Password"
              />
            </FormControl>

            <FormControl w={[280, 280, 400, 400]} mt={4}>
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={state.checkedB}
                    onChange={handleCheck}
                    name="checkedB"
                    color="primary"
                  />
                }
                label={
                  <Box style={{ cursor: 'initial', textAlign: 'center' }}>
                    I agree with TalentZoom’s{' '}
                    <a
                      style={{ color: '#1A75D1', textDecoration: 'underline' }}
                      target="_blank"
                      href="/job-seekers-terms">
                      Terms & Conditions
                    </a>
                  </Box>
                }
              />
            </FormControl>

            <Box
              display="flex"
              flexWrap="wrap"
              flexDirection="column"
              justifyContent="center"
              alignItems="center">
              <FormControl w={[280, 280, 400, 400]} mt={4}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                  // onClick={handleSubmit}
                  // onKeyPress={handleEnter}
                  width="full"
                  disabled={terms}
                  mt={4}
                  style={{
                    fontSize: '1rem',
                    fontWeight: '400',
                    fontFamily: 'Ubuntu',
                    textTransform: 'none',
                  }}>
                  Get started
                </Button>
              </FormControl>
              <Box d="flex" flexDirection="column" justifyContent="center">
                <LinkedInSignUp />
              </Box>
              <Typography
                style={{
                  fontSize: '1rem',
                  fontWeight: '400',
                  fontFamily: 'Ubuntu',
                  marginTop: 10,
                }}>
                Have an account?{' '}
                <a
                  href="/login"
                  style={{
                    textDecoration: 'underline',
                    color: '#2196f3',
                    backgroundColor: 'transparent',
                  }}>
                  Sign in
                </a>
              </Typography>
            </Box>
            <SuccessModal value={modalOptions} close={handleCloseSuccess} />
          </Box>
        </ThemeProvider>
      </form>
    </Box>
  );
}

export default SignUpFormTalent;
