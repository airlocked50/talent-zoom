import React from 'react';
import { Box, FormControl, Icon } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { ImLinkedin, ImXing, ImGithub, ImStackoverflow } from 'react-icons/im';
import styles from '../../LoginSteps/loginSteps.module.css';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../../redux/actions/updateAction';
import { blue } from '@material-ui/core/colors';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {
  getHeaderFromBase64,
  getFormDataContent,
  base64ToBinary,
} from '../../../utils/functions/upload';
import { TextField, Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function Social({ user }) {
  const [cvUrl, setCvUrl] = useState(user.cvUrl);
  const [city, setCity] = useState(user.livingCity);
  const [links, setLinks] = useState({
    linkedInUrl: user.linkedInUrl,
    githubUrl: user.githubUrl,
    sofUrl: user.sofUrl,
    xingUrl: user.xingUrl,
  });
  const dispatch = useDispatch();
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
          let updatedData = {
            cvUrl: response.request.responseURL.split('?Con')[0],
          };
          dispatch(updateUserData(updatedData));
        })
        .catch(err => {
        
        });
    };
  };
  const handleOnblur = () => {
    let updatedData = {
      livingCity: city,
      linkedInUrl: links.linkedInUrl,
      githubUrl: links.githubUrl,
      sofUrl: links.sofUrl,
      xingUrl: links.xingUrl,
    };
    dispatch(updateUserData(updatedData));
  };

  return (
    <Box w={['100%', 400, 500, 900]}>
      <Box w={'80%'} ml={5} mt={10} className={styles.subTitle}>
        Upload your resume to help us populate your professional info. Don’t
        have a resume? You can also choose to share your LinkedIn Profile. This
        speeds up our matching process.
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
              component="span"
              style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}>
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
      <Box ml={5} mt={5}>
        <Box className={styles.subTitleBold}>
          {cvUrl}
        </Box>
      </Box>
      <Box ml={5} mt={10}>
        <Box className={styles.subTitleBold}>
          Where are you currently located?
        </Box>
      </Box>

      <FormControl w={['90%', 300, 340, 340]} id="city" ml={5} mt={4}>
        <ThemeProvider theme={theme}>
          <TextField
            fullWidth
            autoComplete={false}
            label="City"
            variant="outlined"
            size="small"
            id="pasword"
            type="text"
            name="city"
            value={city}
            onBlur={handleOnblur}
            onChange={e => setCity(e.target.value)}
            placeholder="City"
          />
        </ThemeProvider>
      </FormControl>

      <Box ml={5} mt={10}>
        <Box className={styles.subTitleBold}>Show us some of your work!</Box>
      </Box>

      <Box
        w={['100%', 300, 400, 650]}
        display="flex"
        flexWrap="wrap"
        justifyContent="center">
        <FormControl
          w={['90%', 300, 340, 300]}
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
                onBlur={handleOnblur}
                onChange={e =>
                  setLinks({ ...links, linkedInUrl: e.target.value })
                }
                placeholder="https://www.linkedin.com/in/yourusername"
              />
            </ThemeProvider>
          </Box>
        </FormControl>

        <FormControl
          w={['90%', 300, 340, 300]}
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
                onBlur={handleOnblur}
                onChange={e => setLinks({ ...links, xingUrl: e.target.value })}
                placeholder="https://xing.com/profile/username"
              />
            </ThemeProvider>
          </Box>
        </FormControl>

        <FormControl
          w={['90%', 300, 340, 300]}
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
                onBlur={handleOnblur}
                value={links.githubUrl}
                placeholder="https://github.com/yourusername"
                onChange={e =>
                  setLinks({ ...links, githubUrl: e.target.value })
                }
              />
            </ThemeProvider>
          </Box>
        </FormControl>

        <FormControl
          w={['90%', 300, 340, 300]}
          ml={[0, 5, 5, 5]}
          id="sof"
          mt={4}>
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
                onBlur={handleOnblur}
                onChange={e => setLinks({ ...links, sofUrl: e.target.value })}
              />
            </ThemeProvider>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Social;
