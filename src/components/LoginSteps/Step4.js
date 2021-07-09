/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { Box } from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DateFnsUtils from '@date-io/date-fns';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { addUserData } from '../../redux/actions/stepOneAction';
import ProfessionalExperience from '../JobExperince/ProfessionalExperience';
import {
  Icon,
  Button,
  InputLabel,
  Select,
  FormControl,
  TextField,
  FormControlLabel,
  Checkbox,
  Chip,
  Typography,
} from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import styles from './loginSteps.module.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function Step4() {
  window.scrollTo(0, 0);
  useEffect(() => {
    if (stepData.experienceYear) {
      setYear(stepData.experienceYear);
    }
    if (stepData.educations) {
      setTalentEducations(stepData.educations);
    }
    if (stepData.workedCompanies) {
      setTalentExperiences(stepData.workedCompanies);
    }
  }, []);
  const { stepData } = useSelector(state => state.step);
  const history = useHistory();
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleEdu, setIsVisibleEdu] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [isErrorCompany, setIsErrorCompany] = useState(false);
  const [isErrorPosition, setIsErrorPosition] = useState(false);
  const [errorExperience, setErrorExperience] = useState(false);
  const [study, setStudy] = useState({
    school: '',
    degree: '',
    startDate: '01/01/2021',
    endDate: '01/01/2021',
  });
  const [experience, setExperience] = useState({
    company: '',
    position: '',
    startDate: '01/01/2021',
    endDate: '01/01/2021',
    description: ``,
  });
  const [year, setYear] = useState(undefined);
  const [talentEducations, setTalentEducations] = useState([]);
  const [talentExperiences, setTalentExperiences] = useState([]);

  function handleSubmitEducation(e) {
    e.preventDefault();
    if (study.school.length !== 0 && study.degree.length !== 0) {
      setTalentEducations([...talentEducations, study]);
      setIsVisibleEdu(!isVisibleEdu);
      setStudy({
        school: '',
        degree: '',
        startDate: '01/01/2021',
        endDate: '01/01/2021',
      });
      setShowEducation(false);
    }
    
  }
  const handleInputChangeEducation = e => {
    const { name, value } = e.target;
    setStudy({ ...study, [name]: value });
  };

  const deleteEducation = (talentEducation, index) => {
    
    const updatedTalentEducation = talentEducations.filter(
      (te, i) => i !== index
    );
    setTalentEducations(updatedTalentEducation);
    
  };

  const handleCurrentEducation = e => {
    setIsVisibleEdu(!isVisibleEdu);
    if (e.target.checked) {
      setStudy({ ...study, endDate: 'Still studying' });
    } else {
      setStudy({ ...study, endDate: '01/01/2021' });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (experience.company.length !== 0) {
      if (experience.position.length !== 0) {
        setTalentExperiences([...talentExperiences, experience]);
        setShowExperience(false);
        setIsVisible(!isVisible);
        setExperience({
          company: '',
          position: '',
          startDate: '01/01/2021',
          endDate: '01/01/2021',
          description: '',
        });
        
       
      } else {
        setIsErrorPosition(true);
      }
    } else {
      setIsErrorCompany(true);
    }

    setTimeout(() => {
      setIsErrorCompany(false);
      setIsErrorPosition(false);
    }, 3000);
  }
  const handleInputChange = e => {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const deleteExperience = (talentExperience, index) => {
   
    const updatedTalentExperience = talentExperiences.filter(
      (te, i) => i !== index
    );
    setTalentExperiences(updatedTalentExperience);
   
  };

  const handleYears = e => {
    setYear(parseInt(e.target.value));
    setErrorExperience(false);
  
  };

  const goNextPage = () => {
    let updatedData = {
      workedCompanies: talentExperiences,
      // experienceYear: year,
      educations: talentEducations,
    };
    dispatch(addUserData(updatedData));
    history.push('/talentSkills');
    // if(year !== undefined) {
      
      
    // }
    // if(year === undefined) {
    //   setErrorExperience(true);
    //   window.scrollTo(0, 0);
    // }
    
  };

  const handleCurrent = e => {
    setIsVisible(!isVisible);
    if (e.target.checked) {
      setExperience({ ...experience, endDate: 'Still working' });
    } else {
      setExperience({ ...experience, endDate: '01/01/2021' });
    }
  };

  return (
    <>
      <Box ml={5}>
        <Box variant="h4" className={styles.mainTitle}>
          Tell us about your experience.
        </Box>
      </Box>
      <hr />

      {/* <Box ml={5} mt={10}>
        <Box variant="h5" className={styles.subTitleBold}>
          Years of professional experience
        </Box>
      </Box>

      <Box w={['100%', 300, 300, 350]} ml={5} mt={5}>
        <ThemeProvider theme={theme}>
          <FormControl variant="outlined" color="primary" fullWidth>
            <InputLabel htmlFor="outlined-age-native-simple">
              Professional Experience
            </InputLabel>
            <Select
              native
              value={year}
              placeholder="Select years of professional experience"
              onChange={handleYears}
              error={errorExperience}
              label="Professional Experience"
              inputProps={{
                name: 'age',
                id: 'outlined-age-native-simple',
              }}>
              <option aria-label="None" value="" />
              <option key="1" value="0">{`<1 Years`}</option>
              <option key="2" value="1">
                1 Year
              </option>
              <option key="3" value="2">
                2 Years
              </option>
              <option key="4" value="3">
                3 Years
              </option>
              <option key="5" value="4">
                4 Years
              </option>
              <option key="6" value="5">
                5 Years
              </option>
              <option key="7" value="6">
                6 Years
              </option>
              <option key="8" value="7">
                7 Years
              </option>
              <option key="9" value="8">
                8 Years
              </option>
              <option key="10" value="9">
                9 Years
              </option>
              <option key="11" value="10">
                10+ Years
              </option>
            </Select>
          </FormControl>
        </ThemeProvider>
      </Box> */}

      <Box ml={5} mt={5}>
        <Box variant="h5" className={styles.subTitleBold}>
          Add your professional experience
        </Box>
      </Box>

      {showExperience === false ? (
        <Box ml={5} mt={2}>
          <ThemeProvider theme={theme}>
            <Button
              onClick={() => setShowExperience(true)}
              startIcon={<Icon color="primary">add_circle</Icon>}>
              <Typography
                color="primary"
                style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}
                variant="button">
                Add experience
              </Typography>
            </Button>
          </ThemeProvider>
        </Box>
      ) : (
        <Box
          w={['auto', 'auto', 600, 900]}
          border="1px"
          borderColor="gray.200"
          mt={10}
          p={5}
          ml={5}
          borderRadius={5}>
          <Box direction="row" borderWidth="1" borderColor="blue">
            <Box
              h={'auto'}
              w={'auto'}
              d="flex"
              flexWrap="wrap"
              justifyContent="flex-start">
              <Box id="company" w={['100%', 200, 250, 350]} mt={4}>
                <ThemeProvider theme={theme}>
                  <TextField
                    fullWidth
                    size="small"
                    name="company"
                    type="text"
                    placeholder="Company"
                    value={experience.company}
                    onChange={handleInputChange}
                    id="company"
                    label="Company"
                    variant="outlined"
                  />
                </ThemeProvider>
              </Box>

              <Box
                id="position"
                w={['100%', 200, 250, 350]}
                ml={[0, 5, 5, 5]}
                mt={4}>
                <ThemeProvider theme={theme}>
                  <TextField
                    fullWidth
                    size="small"
                    name="position"
                    type="text"
                    placeholder="Position"
                    value={experience.position}
                    onChange={handleInputChange}
                    id="position"
                    label="Position"
                    variant="outlined"
                  />
                </ThemeProvider>
              </Box>
            </Box>

            <Box
              ml={2}
              w={["90%", 300, 400, 600]}
              h={'auto'}
              d={{ md: 'flex' }}
              mt={2}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Box>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={experience.startDate}
                    onChange={date =>
                      setExperience({ ...experience, startDate: date })
                    }
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Box>

                <Box ml={[0, 0, 5, 5]}>
                  {isVisible === false ? (
                    <KeyboardDatePicker
                      disableToolbar
                      disabled={isVisible}
                      value={experience.endDate}
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      onChange={date =>
                        setExperience({ ...experience, endDate: date })
                      }
                      id="date-picker-inline"
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </Box>
              </MuiPickersUtilsProvider>

              <Box w={80} ml={[0, 5, 10, 10]} mt={4}>
                <ThemeProvider theme={theme}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        // checked={state.checkedB}
                        onChange={handleCurrent}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label={
                      <Typography
                        style={{ color: '#424242', fontFamily: 'Ubuntu' }}>
                        I work here now
                      </Typography>
                    }
                  />
                </ThemeProvider>
              </Box>
            </Box>

            <ThemeProvider theme={theme}>
              <Box id="firstName" w={['100%', 260, 490, 820]} mt={2}>
                <FormControl fullWidth size="small" variant="outlined">
                  <TextField
                    label="Position Description"
                    id="roleDescription"
                    multiline
                    rows={4}
                    name="description"
                    type="text"
                    placeholder="Tell us about the: project, business challenge, programming languages, end users & how they were impacted... be specific!?"
                    value={experience.description}
                    onChange={handleInputChange}
                    variant="outlined"
                  />
                </FormControl>
              </Box>
            </ThemeProvider>

            <Box w={[200, 300, 300, 200]} display="flex" mt={4}>
              <ThemeProvider theme={theme}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}
                  width="full">
                  Save
                </Button>
                <Box ml={5}>
                  <Button
                    fullWidth
                    onClick={() => setShowExperience(false)}
                    width="full"
                    style={{
                      color: '#424242',
                      textTransform: 'none',
                      fontFamily: 'Ubuntu',
                    }}>
                    Cancel
                  </Button>
                </Box>
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
      )}

      <Box
        h={'auto'}
        ml={5}
        w={[250, 400, 500, 700]}
        d="flex"
        flexWrap="wrap"
        justifyContent="flex-start">
        {talentExperiences.map((talentExperience, index) => {
          return (
            <div key={index}>
              <ThemeProvider theme={theme}>
                <ProfessionalExperience
                  talentExperience={talentExperience}
                  index={index}
                  deleteJob={() => deleteExperience(talentExperience, index)}
                />
              </ThemeProvider>
            </div>
          );
        })}
      </Box>

      <Box ml={5} mt={5}>
        <Box variant="h5" className={styles.subTitleBold}>
          Add your education details
        </Box>
      </Box>

      {showEducation === false ? (
        <Box ml={5} mt={2}>
          <ThemeProvider theme={theme}>
            <Button
              onClick={() => setShowEducation(true)}
              startIcon={<Icon color="primary">add_circle</Icon>}>
              <Typography
                color="primary"
                style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}
                variant="button">
                Add education
              </Typography>
            </Button>
          </ThemeProvider>
        </Box>
      ) : (
        <Box
          w={['auto', 'auto', 600, 800]}
          border="1px"
          borderColor="gray.200"
          mt={10}
          ml={5}
          p={5}
          borderRadius={5}>
          <Box direction="row">
            <Box
              h={'auto'}
              w={'100%'}
              d="flex"
              flexWrap="wrap"
              justifyContent="flex-start">
              <Box id="company" w={['100%', 200, 250, 350]} mt={4}>
                <ThemeProvider theme={theme}>
                  <TextField
                    size="small"
                    fullWidth
                    label="School"
                    id="school"
                    name="school"
                    type="text"
                    placeholder="University / School"
                    value={study.school}
                    onChange={handleInputChangeEducation}
                    variant="outlined"
                  />
                </ThemeProvider>
              </Box>

              <Box
                id="company"
                w={['100%', 200, 250, 350]}
                ml={[0, 4, 4, 4]}
                mt={4}>
                <ThemeProvider theme={theme}>
                  <TextField
                    size="small"
                    fullWidth
                    label="Degree"
                    id="degree"
                    name="degree"
                    type="text"
                    placeholder="Degree, field of study"
                    value={study.degree}
                    onChange={handleInputChangeEducation}
                    variant="outlined"
                  />
                </ThemeProvider>
              </Box>
            </Box>

            <Box
              ml={2}
              w={["90%", 300, '100%', 600]}
              h={'auto'}
              d={{ md: 'flex' }}
              mt={2}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Box>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={study.startDate}
                    onChange={date => setStudy({ ...study, startDate: date })}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Box>

                <Box ml={[0, 0, 5, 5]}>
                  {isVisibleEdu === false ? (
                    <KeyboardDatePicker
                      disableToolbar
                      disabled={isVisibleEdu}
                      value={study.endDate}
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      onChange={date => setStudy({ ...study, endDate: date })}
                      id="date-picker-inline"
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </Box>
              </MuiPickersUtilsProvider>

              <Box w={80} ml={[0, 5, 10, 10]} mt={4}>
                <ThemeProvider theme={theme}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={handleCurrentEducation}
                        name="checkedB"
                        color="primary"
                      />
                    }
                    label={
                      <Typography
                        style={{ color: '#424242', fontFamily: 'Ubuntu' }}>
                        Currently study here
                      </Typography>
                    }
                  />
                </ThemeProvider>
              </Box>
            </Box>

            <Box w={[200, 300, 300, 200]} display="flex" mt={4}>
              <ThemeProvider theme={theme}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleSubmitEducation}
                  width="full"
                  style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}>
                  Save
                </Button>
                <Box ml={5}>
                  <Button
                    fullWidth
                    color="primary"
                    onClick={() => setShowEducation(false)}
                    width="full"
                    style={{
                      color: '#424242',
                      textTransform: 'none',
                      fontFamily: 'Ubuntu',
                    }}>
                    Cancel
                  </Button>
                </Box>
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
      )}

      <Box
        h={'auto'}
        w={[300, 500, 700, 900]}
        ml={5}
        d="flex"
        flexWrap="wrap"
        justifyContent="flex-start">
        {(talentEducations || []).map((talentEducation, index) => (
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
                  {talentEducation.school + '-' + talentEducation.degree}
                </Box>
              }
              deleteIcon={<HighlightOffIcon style={{ color: 'white' }} />}
              onDelete={() => deleteEducation(talentEducation, index)}
            />
          </ThemeProvider>
        ))}
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
    </>
  );
}

export default Step4;
