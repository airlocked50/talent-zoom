/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box, FormControl, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import styles from '../../LoginSteps/loginSteps.module.css';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../../redux/actions/updateAction';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  getHeaderFromBase64,
  getFormDataContent,
  base64ToBinary,
} from '../../../utils/functions/upload';
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

function Vision({ vision, photo, wantedSkills }) {
  const [imageUrl, setImageUrl] = useState(photo);

  const [skill, setSkill] = useState('');
  const [visionMission, setVisionMission] = useState(vision);
  const [talentSkills, setTalentSkills] = useState(wantedSkills);

  const dispatch = useDispatch();
  const classes = useStyles();

  const saveSkills = () => {
    if (skill.length !== 0) {
      setTalentSkills([
        ...talentSkills,
        {
          skillName: skill
        },
      ]);
      let updatedData = {
        wantedSkills: [
          ...talentSkills,
          {
            skillName: skill
          },
        ],
      };
      dispatch(updateUserData(updatedData));
    
      setSkill('');
    }
  };

  const deleteSkill = (talentSkill, index) => {
    const updatedTalentItems = talentSkills.filter((item, i) => i !== index);
    setTalentSkills(updatedTalentItems);
    let updatedData = {
      wantedSkills: talentSkills,
    };
    dispatch(updateUserData(updatedData));
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
          setImageUrl(response.request.responseURL.split('?Con')[0]);
          let updatedData = {
            companyLogoUrl: response.request.responseURL.split('?Con')[0],
          };
          dispatch(updateUserData(updatedData));
        })
        .catch(err => {
       
        });
    };
  };
  const updateMision = () => {
    let updatedData = {
      visionMission: visionMission,
    };
    dispatch(updateUserData(updatedData));
  };

  return (
    <Box>
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

      <Box ml={[0, 5, 5, 5]} mt={10}>
        <Box variant="h5" className={styles.subTitleBold}>
          Vision / mission statement
        </Box>
      </Box>

      <Box w={'80%'} ml={[0, 5, 5, 5]} mt={2}>
        <Box variant="body1" className={styles.subTitle}>
          A compelling mission statement is meaninful to candidates who look for
          a strong sense of purpose to connect with. Consider using what is on
          your company's careers page.
        </Box>
      </Box>

      <ThemeProvider theme={theme}>
        <Box id="vision" w={['80%', '80%', 470, 800]} ml={[0, 5, 5, 5]} mt={10}>
          <FormControl size="small" variant="outlined">
            <TextField
              label="Vision and Mission"
              multiline
              fullWidth
              rows={4}
              value={visionMission}
              onBlur={updateMision}
              onChange={e => setVisionMission(e.target.value)}
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

        <Box w={'80%'} ml={[0, 5, 5, 5]} mt={2}>
          <Box variant="body1" className={styles.subTitle}>
            {' '}
            The tech stack you employ is key for matching skills and candidate
            preferences. Add as many technologies as you think relevant for
            prospective candidates.
          </Box>
        </Box>

        <Box
          ml={[0, 5, 5, 5]}
          mt={2}
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

          <Box w={20} ml={[0, 5, 5, 5]}>
            <ThemeProvider theme={theme}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={saveSkills}
                style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}
                width="full">
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
                  style={{
                    marginLeft: '10px',
                    marginTop: '5px',
                    backgroundColor: '#616161',
                  }}
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
                  deleteIcon={<HighlightOffIcon style={{ color: 'white' }} />}
                  onDelete={() => deleteSkill(talentSkill, index)}
                />
              </ThemeProvider>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Vision;
