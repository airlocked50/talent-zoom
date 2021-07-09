import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import styles from '../../components/LoginSteps/loginSteps.module.css';
import { addUserData } from '../../redux/actions/stepOneAction';

import {
  getHeaderFromBase64,
  getFormDataContent,
  base64ToBinary,
} from '../../utils/functions/upload';
import Footer from '../../components/Nav/footer';
import { Avatar, makeStyles, Button, TextField } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

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

function Summary() {
  useEffect(() => {
    if (stepData.proilePhoto) {
      setImageUrl(stepData.proilePhoto);
    }
    if (stepData.summary) {
      setSummary(stepData.summary);
    }
  }, []);
  const [imageUrl, setImageUrl] = useState('');
  const [summary, setSummary] = useState(``);
  const [errorSummary, setErrorSummary] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const { stepData } = useSelector(state => state.step);
  const classes = useStyles();
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
          setImageUrl(response.request.responseURL.split('?Con')[0]);
        })
        .catch(err => {
          
        });
    };
  };

  const goNextPage = () => {
    let updatedData = {
      proilePhoto: imageUrl,
      summary: summary,
    };
    if (summary !== '') {
      dispatch(addUserData(updatedData));
      history.push('/talentSalary');
    }
    if(summary === '') {
      setErrorSummary(true);
    }
  };
  return (
    <div className={styles.mainDiv}>
      <Box
        w={['100%', 600, 780, 1000]}
        backgroundColor="white"
        h={'auto'}
        p={[10, 10, 10, 10]}
        m={(0, 'auto')}
        mt={20}
        mb={5}>
        <Box>
          <Box ml={5}>
            <Box variant="h4" className={styles.mainTitle}>
              Almost There!
            </Box>
          </Box>

          <hr />
          <Box ml={5} mt={10}>
            <Box variant="h5" className={styles.subTitleBold}>
              Create your talent profile
            </Box>
          </Box>

          <Box w={'80%'} ml={5} mt={2}>
            <Box variant="body1" className={styles.subTitle}>
              These fields are entirely optional, but they offer a great chance
              to express your personality and maximize your response rate.
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

          <Box w={['90%', '90%', 500, 780]} ml={5} mt={3}>
            <ThemeProvider theme={theme}>
              <TextField
                label="Summary"
                multiline
                fullWidth
                error={errorSummary}
                placeholder="Summarize your personal and professional goals and interests. Describe what you are looking for in your next opportunity."
                rows={4}
                value={summary}
                onChange={e => {
                  setErrorSummary(false);
                  setSummary(e.target.value);
                }}
                variant="outlined"
              />
            </ThemeProvider>
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
        </Box>
      </Box>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Summary;
