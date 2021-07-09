import { Box, Flex } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Constants } from '../../constants/index';
import { addUserData } from '../../redux/actions/stepOneAction';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  Chip,
  Button,
  TextField,
  InputLabel,
  FormControl,
  Select,
} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import styles from './loginSteps.module.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const { LANGUAGE_LEVEL } = Constants;

function Step6() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (stepData.languages) {
      setLanguageLevel(stepData.languages);
    }
    if (stepData.skills) {
      setTalentSkills(stepData.skills);
    }
  }, []);
  const dispatch = useDispatch();
  const { stepData } = useSelector(state => state.step);
  const history = useHistory();

  const [level, setLevel] = useState({});
  const [language, setLanguage] = useState('');
  const [languageLevel, setLanguageLevel] = useState([]);

  const [skill, setSkill] = useState('');
  const [talentSkills, setTalentSkills] = useState([]);
  const [errorLanguage, setErrorLanguage] = useState(false);
  const [errorSkill, setErrorSkill] = useState(false);

  function handleSubmit() {
    // e.preventDefault()
    if (language.trim().length !== 0) {
      setLanguageLevel([
        ...languageLevel,
        { language: language, level: JSON.parse(level) },
      ]);
      
    }
  }
  const deleteLanguageItem = (languageItem, index) => {
   
    const updatedLanguageItems = languageLevel.filter((item, i) => i !== index);
    setLanguageLevel(updatedLanguageItems);
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
      
      setSkill('');
    }
  };

  const deleteSkill = (talentSkill, index) => {
    const updatedLanguageItems = talentSkills.filter((item, i) => i !== index);
    setTalentSkills(updatedLanguageItems);
  };

  const goNextPage = () => {
    let updatedData = {
      languages: languageLevel,
      skills: talentSkills,
    };
    if (languageLevel.length !== 0 && talentSkills.length !== 0) {
      dispatch(addUserData(updatedData));
      history.push('/talentSummary');
    }
    if(languageLevel.length === 0) {
      setErrorLanguage(true);
    }
    if(talentSkills.length === 0) {
      setErrorSkill(true);
    }
  };

  return (
    <Box>
      <Box w={'80%'} ml={[0,5,5,5]}>
        <Box variant="h4" className={styles.mainTitle}>
          What languages are you versed in?
        </Box>
      </Box>
      <hr />

      <Box mb={20}>
        <Box ml={[0,5,5,5]} mt={5}>
          <Box variant="h5" className={styles.subTitleBold}>
            Skills *
          </Box>
        </Box>

        <Box w={'80%'} ml={[0,5,5,5]}>
          <Box variant="body1" className={styles.subTitle}>
            What programming languages, frameworks, and other tech skills are
            you proficient with?
          </Box>
        </Box>

        <Flex float="left">
          <Box w={['90%', 180, 200, 250]} ml={[0,5,5,5]} mt={4}>
            <ThemeProvider theme={theme}>
              <TextField
                fullWidth
                error={errorSkill}
                size="small"
                onChange={e => {
                  setErrorSkill(false);
                  setSkill(e.target.value);
                }}
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

          <Box w={['70%', 100, 100, 100]} mt={4} ml={[1, 5, 5, 5]}>
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
        ml={[0,5,5,5]}
        d="flex"
        flexWrap="wrap"
        justifyContent="flex-start">
        {talentSkills.length < 1 ? (
          <Box mt={1} ml={[0,5,5,5]}>
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
          ))
        )}
      </Box>

      <Box h={'auto'}>
        <Box ml={[0,5,5,5]} mt={5}>
          <Box variant="h5" className={styles.subTitleBold}>
            Languages *
          </Box>
        </Box>

        <Box ml={[0,5,5,5]}>
          <Box variant="body1" className={styles.subTitle}>
            Oral and written languages
          </Box>
        </Box>

        <Flex direction="row" w={[270, 400, 500, 500]}>
          <Box display="inline-flex">
            <Box id="language" w={['60%', 150, 150, 150]} ml={[0,5,5,5]} mt={4}>
              <ThemeProvider theme={theme}>
                <TextField
                  error={errorLanguage}
                  fullWidth
                  size="small"
                  onChange={e => {
                    setErrorLanguage(false);
                    setLanguage(e.target.value);
                  }}
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
              <Box ml={2} mt={4} w={['60%', 150, 150, 150]}>
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

          <Box ml={[1,5,5,5]} mt={4}>
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
          w={[300, 500, 700, 900]}
          ml={[0,5,5,5]}
          d="flex"
          flexWrap="wrap"
          justifyContent="flex-start">
          {languageLevel.length < 1 ? (
            <Box ml={[0,5,5,5]} mt={3}>
              <Box variant="body1" className={styles.subTitle}>
                *Add language
              </Box>
            </Box>
          ) : (
            (languageLevel || []).map((languageItem, index) => (
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
                      {languageItem.language + '-' + languageItem.level.key}
                    </Box>
                  }
                  deleteIcon={<HighlightOffIcon style={{ color: 'white' }} />}
                  onDelete={() => deleteLanguageItem(languageItem, index)}
                />
              </ThemeProvider>
            ))
          )}
        </Box>
      </Box>

      

      <Box w={100} ml={[0,5,5,5]} mt={6}>
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
  );
}

export default Step6;
