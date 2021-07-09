import React from 'react';
import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from '../../LoginSteps/loginSteps.module.css';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import { updateUserData } from '../../../redux/actions/updateAction';

import ProfessionalExperience from '../../JobExperince/ProfessionalExperience';
import {
  Chip,
  FormControlLabel,
  FormControl,
  Checkbox,
  Icon,
  TextField,
  Button,
  InputLabel,
  Select,
  Typography,
} from '@material-ui/core';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function WorkExperience({ user }) {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleEdu, setIsVisibleEdu] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
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
  const [year, setYear] = useState(user.experienceYear);
  const [talentExperiences, setTalentExperiences] = useState(
    user.workedCompanies
  );
  const [talentEducations, setTalentEducations] = useState(user.educations);

  function handleSubmitEducation(e) {
    e.preventDefault();
    if (study.school.length !== 0 && study.degree.length !== 0) {
      setTalentEducations([...talentEducations, study]);
      setStudy({
        school: '',
        degree: '',
        startDate: '01/01/2021',
        endDate: '01/01/2020',
      });
      let updatedData = {
        educations: [...talentEducations, study],
      };
      dispatch(updateUserData(updatedData));
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
    let updatedData = {
      educations: updatedTalentEducation,
    };
    dispatch(updateUserData(updatedData));
    
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
    setTalentExperiences([...talentExperiences, experience]);
    let updatedData = {
      workedCompanies: [...talentExperiences, experience],
    };
    dispatch(updateUserData(updatedData));
   
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
    let updatedData = {
      workedCompanies: updatedTalentExperience,
    };
    dispatch(updateUserData(updatedData));
   
  };

  const handleCurrent = e => {
    setIsVisible(!isVisible);
    if (e.target.checked) {
      setExperience({ ...experience, endDate: 'Still working' });
    } else {
      setExperience({ ...experience, endDate: '03/03/2021' });
    }
  };

  const handleYears = e => {
    setYear(parseInt(e.target.value));
    
  };

  const handleBlur = () => {
    let updatedData = {
      experienceYear: year,
    };
    dispatch(updateUserData(updatedData));
  };

  return (
    <Box>
      {/* <Box ml={[3, 5, 5, 5]} mt={10}>
        <Box variant="h5" className={styles.subTitleBold}>
          Years of professional experience
        </Box>
      </Box> */}

      {/* <Box w={[250, 300, 300, 350]} ml={[3, 5, 5, 5]} mt={5}>
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
              onBlur={handleBlur}
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

      <Box ml={[3, 5, 5, 5]} mt={5}>
        <Box variant="h5" className={styles.subTitleBold}>
          Add your professional experience
        </Box>
      </Box>

      {showExperience === false ? (
        <Box ml={[3, 5, 5, 5]} mt={2}>
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
          w={['auto', 'auto', 550, 900]}
          border="1px"
          borderColor="gray.200"
          mt={10}
          p={5}
          borderRadius={5}>
          <Box direction="row" borderWidth="1" borderColor="blue">
            <Box
              h={'auto'}
              w={'100%'}
              d="flex"
              flexWrap="wrap"
              justifyContent="flex-start">
              <Box id="company" w={['85%', 200, 240, 350]} mt={4}>
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
                w={['85%', 200, 240, 350]}
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
              w={[200, 300, 400, 600]}
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
              <Box id="firstName" w={['85%', 260, 490, 820]} mt={2}>
                <FormControl fullWidth size="small" variant="outlined">
                  <TextField
                    label="Position Description"
                    id="roleDescription"
                    multiline
                    rows={4}
                    name="description"
                    type="text"
                    placeholder="Tell us about the: project, business challenge, programming languages, end users & how they were impacted... be specific!"
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
                  width="full"
                  style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}>
                  Save
                </Button>
                <Box ml={5}>
                  <Button
                    fullWidth
                    color="primary"
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
        ml={[1, 5, 5, 5]}
        w={[180, 400, 500, 700]}
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
          w={[300, 500, 600, 800]}
          border="1px"
          borderColor="gray.200"
          mt={10}
          p={5}
          borderRadius={5}>
          <Box direction="row">
            <Box
              h={'auto'}
              w={800}
              d="flex"
              flexWrap="wrap"
              justifyContent="flex-start">
              <Box id="company" w={[90, 200, 300, 350]} mt={4}>
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

              <Box id="company" w={[90, 200, 300, 350]} ml={4} mt={4}>
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
              w={[200, 300, 400, 600]}
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
        ml={[1, 5, 5, 5]}
        d="flex"
        flexWrap="wrap"
        justifyContent="flex-start">
        {(talentEducations || []).map((talentEducation, index) => (
          <ThemeProvider key={index} theme={theme}>
            <Chip
              color="primary"
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
                  {talentEducation.school + '-' + talentEducation.degree}
                </Box>
              }
              onDelete={() => deleteEducation(talentEducation, index)}
            />
          </ThemeProvider>
        ))}
      </Box>
    </Box>
  );
}

export default WorkExperience;
