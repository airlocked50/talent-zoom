/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Box, FormControl, Icon } from '@chakra-ui/react';
import { TextField, Button, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';
import { ImLinkedin, ImXing, ImGithub, ImStackoverflow } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { addUserData } from '../../redux/actions/stepOneAction';
import {
  getHeaderFromBase64,
  getFormDataContent,
  base64ToBinary,
} from '../../utils/functions/upload';
import { useHistory } from 'react-router-dom';
// import { setUserData } from "../../redux/actions/userAction";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import styles from './loginSteps.module.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function Step1() {
  useEffect(() => {
    setCity(stepData.livingCity);
    setEmail(stepData.email);
    setCvUrl(stepData.cvUrl);
    setLinks({
      linkedInUrl: stepData.linkedInUrl,
      githubUrl: stepData.githubUrl,
      sofUrl: stepData.sofUrl,
      xingUrl: stepData.xingUrl,
    });
    getUser();
  }, []);
  const { stepData } = useSelector(state => state.step);
  const [userDatas, setUserDatas] = useState([]);
  const [errorCity, setErrorCity] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [cvUrl, setCvUrl] = useState('');
  const [city, setCity] = useState(' ');
  const [email, setEmail] = useState('');
  const [links, setLinks] = useState({
    linkedInUrl: '',
    githubUrl: '',
    sofUrl: '',
    xingUrl: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const getUser = async () => {
    /* if (router.query.basics !== "basics") {
      let body = {
        linkedInId: router.query.basics,
      };
      const userInformations = await loginTalent({ body: body });
      localStorage.setItem(
        "userInformations",
        JSON.stringify(userInformations)
      );
      dispatch(setUserData(JSON.stringify(userInformations)));
      axios.defaults.headers.token = userInformations.tokenCode;
      ID._id = userInformations._id;
      
    } else { */
    const userInfos = await JSON.parse(
      localStorage.getItem('userInformations')
    );
    //  JSON.parse(userInfos)
    setUserDatas(userInfos);
    if (userInfos.linkedInId) {
      setIsButtonVisible(true);
    }
    
    // }
  };

  const upload = async event => {
    var clicked = event.target;
    const { url } = await getFormDataContent(event);
    const file = clicked.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onloadend = async function(e) {
      const data = e.target.result;
      await axios
        .put(url, base64ToBinary(data), { headers: getHeaderFromBase64(data) })
        .then(response => {
          setCvUrl(response.request.responseURL.split('?Con')[0]);
        })
        .catch(err => {
         
        });
    };
  };
  const handleEmail = e => {
    setEmail(e.target.value);
    if (email.length > 6) {
      setIsButtonVisible(false);
    } else {
      setIsButtonVisible(true);
    }
  };
  const goNextPage = () => {
    let updatedData = {};
    if (userDatas.linkedInId) {
      updatedData = {
        livingCity: city,
        linkedInUrl: links.linkedInUrl,
        githubUrl: links.githubUrl,
        sofUrl: links.sofUrl,
        xingUrl: links.xingUrl,
        cvUrl: cvUrl,
        email: email,
      };
    } else {
      updatedData = {
        livingCity: city,
        linkedInUrl: links.linkedInUrl,
        githubUrl: links.githubUrl,
        sofUrl: links.sofUrl,
        xingUrl: links.xingUrl,
        cvUrl: cvUrl,
      };
    }
    if (city !== undefined) {
      dispatch(addUserData(updatedData));
      history.push('/talentEmployment');
    } else {
      setErrorCity(true);
    }
  };
  return (
    <>
      <Box ml={5}>
        <Box variant="h4" className={styles.mainTitle}>
          Welcome aboard! Let’s get started.{' '}
        </Box>
      </Box>
      <hr />

      {userDatas.linkedInId && (
        <>
          <Box ml={5} mt={10}>
            <Typography>
              LinkedIn registered users must fill email field
            </Typography>
          </Box>

          <FormControl id="email" ml={5} mt={4} w={[250, 300, 340, 340]}>
            <ThemeProvider theme={theme}>
              <TextField
                fullWidth
                color="primary"
                autoComplete={false}
                label="Email"
                variant="outlined"
                size="small"
                id="pasword"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
            </ThemeProvider>
          </FormControl>
        </>
      )}

      <Box ml={5} mt={10}>
        <Box className={styles.subTitle}>
          Upload your resume to help us populate your professional info. Don’t
          have a resume? You can also choose to share your LinkedIn Profile.
          This speeds up our matching process.
        </Box>
      </Box>
      <Box ml={5} mt={2}>
        <input
          style={{ display: 'none' }}
          accept="pdf/*"
          id="contained-button-file"
          type="file"
          onChange={upload}
        />
        <label htmlFor="contained-button-file">
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              startIcon={<CloudUploadIcon />}
              color="primary"
              style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}
              component="span">
              Upload
            </Button>
          </ThemeProvider>
        </label>
      </Box>
      <Box w={"80%"} ml={5} mt={3}>
        <Box className={styles.subTitle}>
          * Supported file formats: PDF, DOC(X). Maximum file size: 20MB
        </Box>
      </Box>
      <Box w={"80%"} ml={5} mt={5}>
        <Box className={styles.subTitleBold}>
          {cvUrl}
        </Box>
      </Box>
      <Box ml={5} mt={10}>
        <Box className={styles.subTitleBold}>
          Where are you currently located? *
        </Box>
      </Box>

      <FormControl w={[250, 300, 340, 340]} id="city" ml={5} mt={4}>
        <ThemeProvider theme={theme}>
          <TextField
            fullWidth
            error={errorCity}
            autoComplete={false}
            label="City"
            variant="outlined"
            size="small"
            id="pasword"
            type="text"
            name="city"
            value={city}
            onChange={e => {
              if (e.target.value === '') {
                setCity(undefined);
              }
              setErrorCity(false);
              setCity(e.target.value);
            }}
            placeholder="City"
          />
        </ThemeProvider>
      </FormControl>

      <Box ml={5} mt={10}>
        <Box className={styles.subTitleBold}>Show us some of your work!</Box>
      </Box>

      <Box
        w={[300, 300, 400, 650]}
        display="flex"
        flexWrap="wrap"
        justifyContent="center">
        <FormControl
          w={[250, 300, 340, 300]}
          id="linkedIn"
          ml={[0, 5, 5, 5]}
          mt={4}>
          <label
            style={{
              display: 'inline-block',
              fontWeight: 'bold',
              marginBottom: '5px',
            }}>
            LinkedIn
          </label>

          <Box display="flex">
            <span>
              <Icon
                mr={5}
                w={10}
                h={10}
                fontSize="14px"
                fontWeight="400px"
                lineHeight="1px"
                color="#555"
                textAlign="center"
                border="1px solid #ccc"
                borderRadius="4px"
                as={ImLinkedin}
              />
            </span>

            <ThemeProvider theme={theme}>
              <TextField
                fullWidth
                autoComplete={false}
                label="LinkedIn"
                variant="outlined"
                size="small"
                name="linkedIn"
                type="text"
                value={links.linkedInUrl}
                onChange={e =>
                  setLinks({ ...links, linkedInUrl: e.target.value })
                }
                placeholder="https://www.linkedin.com/in/yourusername"
              />
            </ThemeProvider>
          </Box>
        </FormControl>

        <FormControl
          w={[250, 300, 340, 300]}
          id="xing"
          ml={[0, 5, 5, 5]}
          mt={4}>
          <label
            style={{
              display: 'inline-block',
              fontWeight: 'bold',
              marginBottom: '5px',
            }}>
            Xing
          </label>

          <Box display="flex">
            <span>
              <Icon
                mr={5}
                w={10}
                h={10}
                fontSize="14px"
                fontWeight="400px"
                lineHeight="1px"
                color="#555"
                textAlign="center"
                border="1px solid #ccc"
                borderRadius="4px"
                as={ImXing}
              />
            </span>
            <ThemeProvider theme={theme}>
              <TextField
                fullWidth
                autoComplete={false}
                label="Xing"
                variant="outlined"
                size="small"
                name="xing"
                type="text"
                value={links.xingUrl}
                onChange={e => setLinks({ ...links, xingUrl: e.target.value })}
                placeholder="https://xing.com/profile/username"
              />
            </ThemeProvider>
          </Box>
        </FormControl>

        <FormControl
          w={[250, 300, 340, 300]}
          id="github"
          ml={[0, 5, 5, 5]}
          mt={4}>
          <label
            style={{
              display: 'inline-block',
              fontWeight: 'bold',
              marginBottom: '5px',
            }}>
            GitHub
          </label>

          <Box display="flex">
            <span>
              <Icon
                mr={5}
                w={10}
                h={10}
                fontSize="14px"
                fontWeight="400px"
                lineHeight="1px"
                color="#555"
                textAlign="center"
                border="none"
                borderRadius="4px"
                as={ImGithub}
              />
            </span>
            <ThemeProvider theme={theme}>
              <TextField
                fullWidth
                autoComplete={false}
                label="GitHub"
                variant="outlined"
                size="small"
                name="github"
                type="text"
                value={links.githubUrl}
                placeholder="https://github.com/yourusername"
                onChange={e =>
                  setLinks({ ...links, githubUrl: e.target.value })
                }
              />
            </ThemeProvider>
          </Box>
        </FormControl>

        <FormControl w={[250, 300, 340, 300]} ml={[0, 5, 5, 5]} id="sof" mt={4}>
          <label
            style={{
              display: 'inline-block',
              fontWeight: 'bold',
              marginBottom: '5px',
            }}>
            StackOverFlow
          </label>

          <Box display="flex">
            <span>
              <Icon
                mr={5}
                w={10}
                h={10}
                fontSize="14px"
                fontWeight="400px"
                lineHeight="1px"
                color="#555"
                textAlign="center"
                border="none"
                borderRadius="4px"
                as={ImStackoverflow}
              />
            </span>
            <ThemeProvider theme={theme}>
              <TextField
                fullWidth
                autoComplete={false}
                label="StackOverFlow"
                variant="outlined"
                size="small"
                name="sof"
                type="text"
                placeholder="http://stackoverflow.com/users/1234/yourusername"
                value={links.sofUrl}
                onChange={e => setLinks({ ...links, sofUrl: e.target.value })}
              />
            </ThemeProvider>
          </Box>
        </FormControl>
      </Box>

      <FormControl w={100} ml={5} mt={6}>
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
      </FormControl>
    </>
  );
}

export default Step1;
