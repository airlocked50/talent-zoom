/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { Box, FormControl } from '@chakra-ui/react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCompany } from '../../api/companyApi';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { addUserData } from '../../redux/actions/stepOneAction';
import styles from '../LoginSteps/loginSteps.module.css';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  getHeaderFromBase64,
  getFormDataContent,
  base64ToBinary,
} from '../../utils/functions/upload';
import SuccessModal from '../Modals/Modal';
import {
  Avatar,
  Button,
  Chip,
  createMuiTheme,
  makeStyles,
  TextField,
  ThemeProvider,
} from '@material-ui/core';
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

function Step4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [imageUrl, setImageUrl] = useState('');
  const [skill, setSkill] = useState('');
  const [visionMission, setVisionMission] = useState(``);
  const [talentSkills, setTalentSkills] = useState([]);
  const [modalOptions, setModalOptions] = useState({
    open: false,
    message: '',
    title: '',
    isSuccess: false,
    yesButton: true,
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { stepData } = useSelector(state => state.step);
  const { userData } = useSelector(state => state.user);

  useEffect(() => {
    if(stepData.companyLogoUrl){
      setImageUrl(stepData.companyLogoUrl)
    }
    if(stepData.visionMission){
      setVisionMission(stepData.visionMission)
    }
    if(stepData.wantedSkills){
      setTalentSkills(stepData.wantedSkills)
    }
  }, [])

  const handleInputChange = e => {
    const { value } = e.target;
    setVisionMission(value);
  };

  const saveSkills = () => {
    if (skill.length !== 0) {
      setTalentSkills([
        ...talentSkills,
        {
          skillName: skill
        },
      ]);
     
      setSkill('');
    }
  };

  const deleteSkill = (talentSkill, index) => {
    const updatedLanguageItems = talentSkills.filter((item, i) => i !== index);
    setTalentSkills(updatedLanguageItems);
  };

  const handleCloseSuccess = () => {
    setModalOptions({
      ...modalOptions,
      open: false,
    });
  };

  const upload = async event => {
    var checked = event.target;
    const { url } = await getFormDataContent(event);
    const file = checked.files[0];
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

  const goNextPage =  () => {
      const profile = JSON.parse(userData);
      let updatedData = {
        companyLogoUrl: imageUrl,
        visionMission,
        wantedSkills: talentSkills,
        
      };
      dispatch(addUserData(updatedData));
      history.push("/companyBasics")
      // const user = await updateCompany({
      //   body: { ...stepData, ...updatedData },
      //   _id: profile._id,
      //   token: profile.tokenCode,
      // });
      // 
      // if (user !== null || user !== undefined) {
      //   setModalOptions({
      //     ...modalOptions,
      //     open: true,
      //     message: 'Enjoy with your experience!',
      //     title: 'Login Steps Finish!',
      //     isSuccess: true,
      //     yesButton: false,
      //   });
      //   localStorage.setItem('userInformations', JSON.stringify(user));
      //   setTimeout(() => {
      //     history.push({
      //       pathname: `/companyProfile`,
      //       search: `?id=${profile ? profile._id : null}`,
      //     });
      //   }, 1000);
      // } else {
      //   setModalOptions({
      //     ...modalOptions,
      //     open: true,
      //     message: 'Please make sure that complete necessary fields!',
      //     title: 'Opps something went wrong please try again',
      //     isSuccess: false,
      //     yesButton: true,
      //   });
      // }
    
  };
  return (
    <Box>
      <Box ml={[0, 5, 5, 5]}>
        <Box
          w={['80%', '100%', '100%', '100%']}
          variant="h4"
          className={styles.mainTitle}>
          Personalize your company profile.
        </Box>
      </Box>
      <hr />

      <Box ml={[0, 5, 5, 5]} fontWeight="bold" mt={10}>
        <Box variant="h5" className={styles.subTitleBold}>
          Create your company profile
        </Box>
      </Box>

      <Box ml={[0, 5, 5, 5]} w={'80%'} fontWeight="bold" mt={2}>
        <Box variant="body1" className={styles.subTitle}>
          These fields are optional, but they will give job seekers valuable
          insights into your company.
        </Box>
      </Box>

      <Box ml={[0, 5, 5, 5]} fontWeight="bold" mt={10}>
        <Box variant="h5" className={styles.subTitleBold}>
          Company Logo
        </Box>
      </Box>

      <Box ml={[0, 5, 5, 5]} fontWeight="bold" mt={2}>
        <Box variant="body1" className={styles.subTitle}>
          {' '}
          Files should be at least 150px
        </Box>
      </Box>

      <Avatar
        src={
          !imageUrl || imageUrl.length === 0 || imageUrl === null
            ? 'https://via.placeholder.com/300x150?text=Upload+Your+Company+Logo'
            : imageUrl
        }
        className={classes.large}
      />
      <Box ml={[0, 5, 5, 5]} mt={2}>
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

      <Box ml={[0, 5, 5, 5]} mt={10}>
        <Box w={"90%"} variant="h5" className={styles.subTitleBold}>
          Tell us why your organization is a great place to work
        </Box>
      </Box>

      <Box w={'75%'} ml={[0, 5, 5, 5]} mt={2}>
        <Box variant="body1" className={styles.subTitle}>
          Consider using what’s on your careers page. This will help provide
          candidates with a meaningful summary of your company’s mission.
        </Box>
      </Box>

      <ThemeProvider theme={theme}>
        <Box id="vision" w={['75%', 300, 500, 800]} ml={[0, 5, 5, 5]} mt={10}>
          <FormControl size="small" variant="outlined">
            <TextField
              label="Vision and Mission"
              multiline
              value={visionMission}
              fullWidth
              rows={4}
              onChange={handleInputChange}
              variant="outlined"
            />
          </FormControl>
        </Box>
      </ThemeProvider>

      <Box>
        <Box ml={[0, 5, 5, 5]} mt={10}>
          <Box variant="h5" className={styles.subTitleBold}>
            Tech Stack
          </Box>
        </Box>

        <Box w={'75%'} ml={[0, 5, 5, 5]} mt={2}>
          <Box variant="body1" className={styles.subTitle}>
            We’ll match you with job-seekers who have experience using the technologies you rely on. Do you have multiple stacks? Give us your top 10 for best results:
          </Box>
        </Box>

        <Box
          m={5}
          ml={[0, 5, 5, 5]}
          w={[238, 340, 230, 347]}
          display={'flex'}
          float="left">
          <FormControl fullWidth id="skill">
            <ThemeProvider theme={theme}>
              <TextField
                fullWidth
                label="Skill"
                variant="outlined"
                size="small"
                id="skill"
                type="skill"
                name="skill"
                value={skill}
                onChange={e => setSkill(e.target.value)}
                placeholder="Add skill "
              />
            </ThemeProvider>
          </FormControl>

          <Box w={20} ml={5}>
            <ThemeProvider theme={theme}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={saveSkills}
                width="full"
                style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}>
                Add
              </Button>
            </ThemeProvider>
          </Box>
        </Box>
      </Box>

      <Box
        h={'auto'}
        w={[238, 340, 230, 500]}
        d="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        p={2}>
        {talentSkills.map((talentSkill, index) => {
          return (
            <Box key={index}>
              <ThemeProvider key={index} theme={theme}>
                <Chip
                  // key={index}
                  style={{
                    marginLeft: '10px',
                    marginTop: '5px',
                    backgroundColor: '#616161',
                  }}
                  deleteIcon={<HighlightOffIcon style={{ color: 'white' }} />}
                  label={
                    <Box
                      style={{
                        color: 'white',
                        fontFamily: 'Ubuntu',
                        fontWeight: 400,
                      }}>
                      {talentSkill.skillName}
                    </Box>
                  }
                  onDelete={() => deleteSkill(talentSkill, index)}
                />
              </ThemeProvider>
            </Box>
          );
        })}
      </Box>

      <Box w={100} ml={[0, 5, 5, 5]} mt={5}>
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
      <SuccessModal value={modalOptions} close={handleCloseSuccess} />
    </Box>
  );
}

export default Step4;
