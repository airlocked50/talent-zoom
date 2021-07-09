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
import { useHistory } from 'react-router-dom';
import { blue } from '@material-ui/core/colors';
import { sendResetMail } from '../../api/talentApi';
import SuccessModal from '../../components/Modals/Modal';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
function ResetPasswordTalent() {
  const [email, setEmail] = useState('');
  const history = useHistory();
  const [modalOptions, setModalOptions] = useState({
    open: false,
    message: '',
    title: '',
    isSuccess: false,
    yesButton: true,
  });

  async function handleSubmit() {
    const body = {
      email,
    };
    const mailSended = await sendResetMail({ body });

    if (mailSended && mailSended.success === true) {
      setModalOptions({
        ...modalOptions,
        open: true,
        message: "Please check you email to change password",
        title: "Successful!",
        isSuccess: true,
        yesButton: false,
      });

      setTimeout(() => {
        history.push({
          pathname: "/login",
        });
      }, 3000);
    } else {
      setModalOptions({
        ...modalOptions,
        open: true,
        message: "Please check you email to change password",
        title: "Something went wrong please try again",
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
    <div style={{ backgroundColor: '#F4F4F4', paddingTop: 200 }}>
      <Box
        w={[375, 600, 780, 1000]}
        backgroundColor="white"
        h={'auto'}
        p={10}
        m={(0, 'auto')}
        mb={200}>
        <Box>
          <Box ml={5}>
            <Typography variant="h4">Did you forget your password?</Typography>
          </Box>
          <hr />

          <Box h={'auto'}>
            <Box ml={5} mt={10}>
              <Typography variant="body1">
                Please, provide your email in the section below. You will
                receive an email to reset your password.
              </Typography>
            </Box>

            <Flex w={[300, 400, 600, 900]} direction="row">
              <Box display="inline-flex">
                <Box id="email" ml={5} mt={4}>
                  <FormControl w={[200, 200, 300, 300]} id="email">
                    <ThemeProvider theme={theme}>
                      <TextField
                        fullWidth
                        size="small"
                        onChange={e => setEmail(e.target.value)}
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        id="email"
                        label="Email"
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
        <Footer />
      </div>
      <SuccessModal value={modalOptions} close={handleCloseSuccess} />
    </div>
  );
}

export default ResetPasswordTalent;
