import React, { useState } from 'react';
import { Box, Flex, FormControl } from '@chakra-ui/react';
import Footer from '../../components/Nav/footer';
import {
  Button,
  createMuiTheme,
  TextField,
  Typography,
  ThemeProvider,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';
import { changePassword } from '../../api/companyApi';
import SuccessModal from '../../components/Modals/Modal';
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
function ChangePasswordCompany() {
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [modalOptions, setModalOptions] = useState({
    open: false,
    message: '',
    title: '',
    isSuccess: false,
    yesButton: true,
  });
  async function load() {
    const verificationId = history.location.pathname.split(
      'changePasswordCompany/'
    )[1];

    const body = {
      password,
      verificationId,
    };

    const userInformations = await changePassword({ body });

    if (userInformations) {
      setModalOptions({
        ...modalOptions,
        open: true,
        message: 'You changed your password, now you can login.',
        title: 'Successful!',
        isSuccess: true,
        yesButton: false,
      });
      setTimeout(() => {
        history.push({
          pathname: '/login',
          state: 1,
        });
      }, 5000);
    } else {
      setModalOptions({
        ...modalOptions,
        open: true,
        title: 'Something went wrong please try again',
        isSuccess: false,
        yesButton: true,
      });
    }
  }

  function handleSubmit() {
    // e.preventDefault()
    if (password === rePassword && password.length > 5) {
      load();
    }
  }

  const handleCloseSuccess = () => {
    setModalOptions({
      ...modalOptions,
      open: false,
    });
  };

  return (
    <div style={{ backgroundColor: '#F4F4F4', paddingTop: 30 }}>
      <Box
        w={[375, 600, 780, 1000]}
        backgroundColor="white"
        h={'auto'}
        p={10}
        m={(0, 'auto')}
        mb={5}>
        <Box>
          <Box ml={5}>
            <Typography variant="h4">Change your password</Typography>
          </Box>
          <hr />

          <Box h={'auto'}>
            <Box ml={5} mt={10} />

            <Flex w={[300, 400, 600, 900]} direction="column">
              <Box display="inline-flex">
                <Box id="password" ml={5} mt={4}>
                  <FormControl w={[200, 200, 300, 300]} id="password">
                    <ThemeProvider theme={theme}>
                      <TextField
                        fullWidth
                        size="small"
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        id="password"
                        label="Password"
                        variant="outlined"
                      />
                    </ThemeProvider>
                  </FormControl>
                </Box>
              </Box>
              <Box display="inline-flex">
                <Box id="rePassword" ml={5} mt={4}>
                  <FormControl w={[200, 200, 300, 300]} id="password">
                    <ThemeProvider theme={theme}>
                      <TextField
                        fullWidth
                        size="small"
                        onChange={e => setRePassword(e.target.value)}
                        name="password"
                        type="password"
                        placeholder="Confirm Password"
                        value={rePassword}
                        id="rePassword"
                        label="Confirm Password"
                        variant="outlined"
                      />
                    </ThemeProvider>
                  </FormControl>
                </Box>
              </Box>

              <Box w={100} ml={5} mt={4}>
                <FormControl>
                  <ThemeProvider theme={theme}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                      width="full"
                      mt={4}>
                      Send
                    </Button>
                  </ThemeProvider>
                </FormControl>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <div>
        <Footer/>
      </div>
      <SuccessModal value={modalOptions} close={handleCloseSuccess} />
    </div>
  );
}

export default ChangePasswordCompany;
