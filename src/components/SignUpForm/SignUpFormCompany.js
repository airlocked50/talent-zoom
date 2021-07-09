import React from 'react';
import { FormControl, Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { createCompany } from '../../api/companyApi';
import SuccessModal from '../Modals/Modal';
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Input,
} from '@material-ui/core';
import PhoneInput from 'react-phone-input-2';

import 'react-phone-input-2/lib/material.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function SignUpFormCompany() {
  const history = useHistory();
  const [terms, setTerms] = useState(true);
  const [values, setValues] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    city: '',
    job: '',
    company: '',
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
  const handleCloseSuccess = () => {
    setModalOptions({
      ...modalOptions,
      open: false,
    });
  };

  const handleCheck = e => {
    setTerms(!terms);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    
  };
  
  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      name: values.name,
      surname: values.surname,
      password: values.password,
      email: values.email,
      companyCity: values.city,
      jobTitle: values.job,
      companyName: values.company,
      phone: values.phone,
    };
    console.log(body);
    if (
      values.name.trim().length === 0 ||
      values.surname.trim().length === 0 ||
      values.email.trim().length === 0 ||
      values.phone.trim().length === 0 ||
      values.city.trim().length === 0 ||
      values.job.trim().length === 0 ||
      values.company.trim().length === 0 ||
      values.rePassword.trim().length === 0 ||
      values.password.trim().length === 0 ||
      values.password.trim().length < 6 ||
      values.password !== values.rePassword
    ) {
      setModalOptions({
        ...modalOptions,
        open: true,
        message:
          'Make sure to fill out every field and confirm your password with a match.',
        title: `Oops, something isn't right, please try again.`,
        isSuccess: false,
        yesButton: true,
      });
    } else {
      const userInformations = await createCompany({ body: body });

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
          phone: '',
          city: '',
          job: '',
          company: '',
          password: '',
          rePassword: '',
        });
        setTimeout(() => {
          history.push({
            pathname: '/login',
            state: 1,
          });
          
        }, 4000);
      } else {
        setModalOptions({
          ...modalOptions,
          open: true,
          message:
            'Make sure to fill out every field and confirm your password with a match.',
          title: `Oops, something isn't right, please try again.`,
          isSuccess: false,
          yesButton: true,
        });
      }
    }
  }
  return (
    <Box
      Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <form onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <Box
            w={[425, 300, 400, 400]}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center">
            <FormControl id="name" w={[280, 140, 190, 190]} mt={4}>
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
              id="surname"
              w={[280, 140, 190, 190]}
              ml={[0, 5, 5, 5]}
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

            <FormControl w={[280, 300, 400, 400]} id="email" mt={4}>
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

            <FormControl id="password" w={[280, 300, 400, 400]} mt={4}>
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

            <FormControl id="rePassword" w={[280, 300, 400, 400]} mt={4}>
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
                placeholder="Confirm Password"
              />
            </FormControl>

            <FormControl id="phone" w={[280, 300, 400, 400]} mt={4}>
              {/* <TextField
                fullWidth
                autoComplete={false}
                label="Phone"
                InputProps={{
                  inputComponent: TextMaskCustom,
                }}
                variant="outlined"
                size="small"
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleInputChange}
              /> */}
              <PhoneInput
                inputStyle={{ height: 40, width: '100%' }}
                onlyCountries={['us']}
                country={'us'}
                value={values.phone}
                onChange={(e) => setValues({ ...values, phone: e})}
              />
            </FormControl>

            <FormControl id="city" w={[280, 300, 400, 400]} mt={4}>
              <TextField
                fullWidth
                autoComplete={false}
                label="City"
                variant="outlined"
                size="small"
                id="city"
                type="text"
                name="city"
                value={values.city}
                onChange={handleInputChange}
                placeholder="City"
              />
            </FormControl>

            <FormControl id="jobTitle" w={[280, 300, 400, 400]} mt={4}>
              <TextField
                fullWidth
                autoComplete={false}
                label="Job Title"
                variant="outlined"
                size="small"
                id="job"
                type="text"
                name="job"
                value={values.job}
                onChange={handleInputChange}
                placeholder="Job Title"
              />
            </FormControl>

            <FormControl id="company" w={[280, 300, 400, 400]} mt={4}>
              <TextField
                fullWidth
                autoComplete={false}
                label="Company"
                variant="outlined"
                size="small"
                id="company"
                type="text"
                name="company"
                value={values.company}
                onChange={handleInputChange}
                placeholder="Company Name"
              />
            </FormControl>

            <FormControl w={[280, 300, 400, 400]} mt={4}>
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
                      href="/employers-terms">
                      Terms & Conditions
                    </a>
                  </Box>
                }
              />
            </FormControl>

            <FormControl w={[300, 300, 400, 400]} mt={4}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                // onClick={handleSubmit}
                disabled={terms}
                width="full"
                mt={4}
                style={{
                  fontSize: '1rem',
                  fontWeight: '400',
                  fontFamily: 'Ubuntu',
                  textTransform: 'none',
                }}>
                Get started
              </Button>

              <Box
                d="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center">
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
            </FormControl>

            <SuccessModal value={modalOptions} close={handleCloseSuccess} />
          </Box>
        </ThemeProvider>
      </form>
    </Box>
  );
}

export default SignUpFormCompany;
