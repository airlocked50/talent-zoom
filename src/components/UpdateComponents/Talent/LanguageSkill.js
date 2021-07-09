import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Constants } from '../../../constants/index';

import styles from '../../LoginSteps/loginSteps.module.css';
import { updateUserData } from '../../../redux/actions/updateAction';
import {
  Chip,
  Button,
  TextField,
  InputLabel,
  FormControl,
  Select,
} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
const { LANGUAGE_LEVEL } = Constants;

function LanguageSkill({ user }) {
  const dispatch = useDispatch();

  const [level, setLevel] = useState({});
  const [language, setLanguage] = useState('');
  const [languageLevel, setLanguageLevel] = useState(user.languages);

  const [skill, setSkill] = useState('');
  const [talentSkills, setTalentSkills] = useState(user.skills);

  function handleSubmit() {
    // e.preventDefault()
    if (language.trim().length !== 0) {
      setLanguageLevel([
        ...languageLevel,
        { language: language, level: JSON.parse(level) },
      ]);
      let updatedData = {
        languages: [
          ...languageLevel,
          { language: language, level: JSON.parse(level) },
        ],
      };
      dispatch(updateUserData(updatedData));
     
    }
  }
  const deleteLanguageItem = (languageItem, index) => {
   
    const updatedLanguageItems = languageLevel.filter((item, i) => i !== index);
    setLanguageLevel(updatedLanguageItems);
    let updatedData = {
      languages: updatedLanguageItems,
    };
    dispatch(updateUserData(updatedData));
  };

  const handleLanguageLevel = e => {
    const { value } = e.target;
    setLevel(value);

  };

  const saveSkills = () => {
    const trimmedSkill = skill.trim();
    if (trimmedSkill.length !== 0) {
      setTalentSkills([
        ...talentSkills,
        {
          skillName:
            trimmedSkill.charAt(0).toUpperCase() +
            trimmedSkill.slice(1).toLowerCase(),
        },
      ]);
      let updatedData = {
        skills: [
          ...talentSkills,
          {
            skillName:
              trimmedSkill.charAt(0).toUpperCase() +
              trimmedSkill.slice(1).toLowerCase(),
          },
        ],
      };
      dispatch(updateUserData(updatedData));
      
      setSkill('');
    }
  };

  const deleteSkill = (talentSkill, index) => {
    const updatedLanguageItems = talentSkills.filter((item, i) => i !== index);
    setTalentSkills(updatedLanguageItems);
    let updatedData = {
      skills: updatedLanguageItems,
    };
    dispatch(updateUserData(updatedData));
  };

  return (
    <Box>
       <Box mb={20}>
        <Box ml={5} mt={5}>
          <Box variant="h5" className={styles.subTitleBold}>
            Skills *
          </Box>
        </Box>
        <Box ml={5}>
          <Box variant="body1" className={styles.subTitle}>
            What programming languages, frameworks, and other tech skills are
            you proficient with?
          </Box>
        </Box>
        <Flex float="left">
          <Box w={[150, 180, 200, 250]} ml={5} mt={4}>
            <ThemeProvider theme={theme}>
              <TextField
                fullWidth
                size="small"
                onChange={e => setSkill(e.target.value)}
                name="skill"
                type="text"
                placeholder="Type in a skill and press 'Add' "
                value={skill}
                id="skill"
                label="Skill"
                variant="outlined"
              />
            </ThemeProvider>
          </Box>

          <Box w={[100, 100, 100, 100]} mt={4} ml={[1, 5, 5, 5]}>
            <ThemeProvider theme={theme}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={saveSkills}
                width="full"
                mt={4}
                style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}>
                Save
              </Button>
            </ThemeProvider>
          </Box>
        </Flex>
      </Box>

      <Box
        h={'auto'}
        w={[300, 500, 700, 900]}
        d="flex"
        flexWrap="wrap"
        justifyContent="flex-start">
        {talentSkills.length < 1 ? (
          <Box mt={1} ml={5}>
            <Box variant="body1" className={styles.subTitle}>
              *Add skill
            </Box>
          </Box>
        ) : (
          (talentSkills || []).map((talentSkill, index) => (
            <ThemeProvider key={index} theme={theme}>
              <Chip
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
          ))
        )}
      </Box>
      <Box h={'auto'}>
        <Box ml={5} mt={5}>
          <Box variant="h5" className={styles.subTitleBold}>
            Languages *
          </Box>
        </Box>

        <Box ml={5}>
          <Box variant="body1" className={styles.subTitle}>
            Oral and written languages
          </Box>
        </Box>

        <Flex direction="row" w={["100%", 400, 500, 500]}>
          <Box display="inline-flex">
            <Box id="language" w={['90%', 150, 150, 150]} ml={5} mt={4}>
              <ThemeProvider theme={theme}>
                <TextField
                  fullWidth
                  size="small"
                  onChange={e => setLanguage(e.target.value)}
                  name="language"
                  type="text"
                  placeholder="Language"
                  value={language}
                  id="company"
                  label="Language"
                  variant="outlined"
                />
              </ThemeProvider>
            </Box>
            <ThemeProvider theme={theme}>
              <Box w={['90%', 150, 150, 150]} ml={2} mt={4}>
                <FormControl
                  size="small"
                  variant="outlined"
                  color="primary"
                  fullWidth>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Level
                  </InputLabel>
                  <Select
                    native
                    onChange={handleLanguageLevel}
                    label="Level"
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-native-simple',
                    }}>
                    <option aria-label="None" value="" />
                    {Object.values(LANGUAGE_LEVEL).map((language, index) => {
                      return (
                        <option key={index} value={JSON.stringify(language)}>
                          {language.key}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </ThemeProvider>
          </Box>

          <Box w={90} ml={[1,5,5,5]} mt={4}>
            <ThemeProvider theme={theme}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                width="full"
                mt={4}
                style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}>
                Save
              </Button>
            </ThemeProvider>
          </Box>
        </Flex>
        <Box
          h={'auto'}
          w={[200, 500, 700, 900]}
          mt={5}
          ml={2}
          d="flex"
          flexWrap="wrap"
          justifyContent="flex-start">
          {languageLevel.length < 1 ? (
            <Box ml={5} mt={3}>
              <Box variant="body1" className={styles.subTitle}>
                *Add language
              </Box>
            </Box>
          ) : (
            (languageLevel || []).map((languageItem, index) => (
              <ThemeProvider key={index} theme={theme}>
                <Chip
                  label={
                    <Box
                      style={{
                        color: 'white',
                        fontFamily: 'Ubuntu',
                        fontWeight: 400,
                      }}>
                      {languageItem.language + '-' + languageItem.level.key}
                    </Box>
                  }
                  style={{
                    marginLeft: '10px',
                    marginTop: '5px',
                    backgroundColor: '#616161',
                  }}
                  deleteIcon={<HighlightOffIcon style={{ color: 'white' }} />}
                  onDelete={() => deleteLanguageItem(languageItem, index)}
                />
              </ThemeProvider>
            ))
          )}
        </Box>
      </Box>

     
    </Box>
  );
}

export default LanguageSkill;
