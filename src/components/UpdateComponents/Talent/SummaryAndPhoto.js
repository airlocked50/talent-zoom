import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../../redux/actions/updateAction';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {
  getHeaderFromBase64,
  getFormDataContent,
  base64ToBinary,
} from '../../../utils/functions/upload';
import { Avatar, makeStyles, Button, TextField } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

import styles from '../../LoginSteps/loginSteps.module.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    margin: 15,
  },
  cardHeader: {
    backgroundColor: '#08a0f4',
    margin: '0 15px',
    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
  },
  cardTitleWhite: {
    fontWeight: 'bold',
    fontSize: 20,
  },
}));

function SummaryAndPhoto({ user }) {
  const [imageUrl, setImageUrl] = useState(user.proilePhoto);
  const [summary, setSummary] = useState(user.summary);
  const classes = useStyles();
  const dispatch = useDispatch();

  const uploadPhoto = async event => {
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
          setImageUrl(response.request.responseURL.split('?Con')[0]);
          let updatedData = {
            proilePhoto: response.request.responseURL.split('?Con')[0],
          };
          dispatch(updateUserData(updatedData));
        })
        .catch(err => {
        
        });
    };
  };
  const handleBlur = () => {
    let updatedData = {
      summary: summary,
    };
    dispatch(updateUserData(updatedData));
  };

  return (
    <Box
      w={[350, 600, 780, 1000]}
      backgroundColor="white"
      h={'auto'}
      m={(0, 'auto')}
      mb={5}>
      <Box>
        <Box ml={5} mt={10}>
          <Box variant="h5" className={styles.subTitleBold}>
            Create your talent profile
          </Box>
        </Box>
        <Box ml={5} mt={2}>
          <Box variant="body1" className={styles.subTitle}>
            These fields are entirely optional, but they offer a great chance to
            express your personality and maximize your response rate.
          </Box>
        </Box>

        <Box ml={5} mt={10}>
          <Box variant="h5" className={styles.subTitleBold}>
            Profile Photo
          </Box>
        </Box>
        <Box ml={5} mt={2}>
          <Box variant="body1" className={styles.subTitle}>
            Files should be at least 150px
          </Box>
        </Box>

        <Avatar
          src={
            !imageUrl || imageUrl.length === 0 || imageUrl === null
              ? 'https://via.placeholder.com/300x150?text=Upload+Your+Profile+Logo'
              : imageUrl
          }
          className={classes.large}
        />
        <Box ml={5} mt={2}>
          <input
            style={{ display: 'none' }}
            accept="image/*"
            id="contained-button-file-photo"
            type="file"
            onChange={uploadPhoto}
          />
          <label htmlFor="contained-button-file-photo">
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

        <Box ml={5} mt={10}>
          <Box variant="h5" className={styles.subTitleBold}>
            Summary
          </Box>
        </Box>
        <Box ml={5} mt={2}>
          <Box variant="body1" className={styles.subTitle}>
            Tell us about yourself.
          </Box>
        </Box>

        <Box w={['90%', '90%', 400, 780]} ml={5} mt={3}>
          <ThemeProvider theme={theme}>
            <TextField
              label="Summary"
              multiline
              placeholder="Summarize your personal and professional goals and interests. Describe what you are looking for in your next opportunity."
              fullWidth
              rows={4}
              value={summary}
              onBlur={handleBlur}
              onChange={e => setSummary(e.target.value)}
              variant="outlined"
            />
          </ThemeProvider>
        </Box>
      </Box>
    </Box>
  );
}

export default SummaryAndPhoto;
