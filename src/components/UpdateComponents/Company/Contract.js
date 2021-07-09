/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Constants } from '../../../constants/index';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
  FormControl,
  InputLabel,
  ThemeProvider,
  Select,
  createMuiTheme,
  OutlinedInput,
  InputAdornment,
  TextField,
  Button,
  Chip,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { updateUserData } from '../../../redux/actions/updateAction';

const { JOB_TITLES, JOB_TIME_2, EXPERIENCE_YEAR } = Constants;

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function Contract({ contracts }) {
  const [companyInfo, setCompanyInfo] = useState({
    jobTitle: '',
    jobTime: '',
    experience: '',
    salary: '',
    roleDescription: ``,
    hourlyRate: 0,
  });
  const [talentSkills, setTalentSkills] = useState([]);
  const [skill, setSkill] = useState('');
  const [contract, setContract] = useState(contracts);
  const dispatch = useDispatch();

  const handleTitle = e => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
    
  };
  const handleExperience = e => {
    const { value } = e.target;
    setCompanyInfo({ ...companyInfo, experience: value });
    
  };
  const handleSalary = e => {
    const { value } = e.target;
    setCompanyInfo({ ...companyInfo, salary: parseInt(value) });
   
  };
  const handleHourlyRate = e => {
    const { value } = e.target;
    setCompanyInfo({ ...companyInfo, hourlyRate: parseInt(value) });
    
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
  const descPlaceHolder = ` Business Overview -  What is the business challenge your team is solving? Who are the end users and how are they impacted?

  Project Description - What is the project or product your team is working on? Is this a new or existing product? New Feature development?  Maintenance? 
  
  Job Description - Walk us through day to day responsibilities of this individual. How does that play into the larger team? Who will they interact with? 
  
  Role Requirements - What programming languages will be used? What are the skills required to do the job and describe how they will be used. 
  
  Candidate Qualifications - Years of experience, education, certifications, soft skills?`
  const createContract = () => {
    setContract([...contract, { skills: talentSkills, companyInfo }]);
    setTalentSkills([]);
      setCompanyInfo({
        jobTitle: '',
        jobTime: '',
        experience: 0,
        salary: 0,
        roleDescription: ``,
        hourlyRate: 0,
      })
  
    let updatedData = {
      contract: [...contract, { skills: talentSkills, companyInfo }],
    };
    dispatch(updateUserData(updatedData));
    
  };
  const deleteContract = (con, index) => {
    const updatedContracts = contract.filter((item, i) => i !== index);
    let updatedData = {
      contract: updatedContracts,
    };
    dispatch(updateUserData(updatedData));
    setContract(updatedContracts);
  };
  return (
    <Box h={'auto'}>
      <Box w={[200, 400, 800, 900]} display="flex" flexWrap="wrap" mt={5}>
        <ThemeProvider theme={theme}>
          <Box
            w={[200, '100%', 200, 260]}
            display="flex"
            flexWrap="wrap"
            ml={5}
            mt={5}>
            <FormControl
              variant="outlined"
              color="primary"
              fullWidth
              size="small">
              <InputLabel htmlFor="outlined-age-native-simple">
                Title
              </InputLabel>
              <Select
                native
                value={companyInfo.jobTitle}
                onChange={handleTitle}
                label="Title"
                inputProps={{
                  name: 'jobTitle',
                  id: 'outlined-age-native-simple',
                }}>
                <option aria-label="None" value="" />
                {Object.values(JOB_TITLES).map((job, index) => (
                  <option key={index} value={job.key}>
                    {job.key}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box
            w={[200, '100%', 200, 260]}
            display="flex"
            flexWrap="wrap"
            ml={5}
            mt={5}>
            <FormControl
              variant="outlined"
              color="primary"
              fullWidth
              size="small">
              <InputLabel htmlFor="outlined-age-native-simple">
                Employment Type
              </InputLabel>
              <Select
                native
                value={companyInfo.jobTime}
                onChange={handleTitle}
                label="Employment Type"
                inputProps={{
                  name: 'jobTime',
                  id: 'outlined-age-native-simple',
                }}>
                <option aria-label="None" value="" />
                {Object.values(JOB_TIME_2).map((job, index) => (
                  <option key={index} value={job.key}>
                    {job.key}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box
            w={[200, '100%', 200, 260]}
            display="flex"
            flexWrap="wrap"
            ml={5}
            mt={5}>
            <FormControl
              variant="outlined"
              color="primary"
              fullWidth
              size="small">
              <InputLabel htmlFor="outlined-age-native-simple">
                Experience
              </InputLabel>
              <Select
                native
                value={companyInfo.experience}
                onChange={handleExperience}
                label="Experience"
                inputProps={{
                  name: 'age',
                  id: 'outlined-age-native-simple',
                }}>
                <option aria-label="None" value="" />
                {Object.values(EXPERIENCE_YEAR).map((year, index) => (
                  <option key={index} value={JSON.stringify(year.key)}>
                    {year.key}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </ThemeProvider>
      </Box>

      <Box d="flex" flexWrap="wrap" w={['90%', 400, 800, 900]}>
        <ThemeProvider theme={theme}>
          <Box id="firstName" w={[200, '100%', 200, 260]} ml={5} mt={4}>
            <FormControl
              fullWidth
              size="small"
              // className={classes.margin}
              variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">
                Annual Salary
              </InputLabel>
              <OutlinedInput
                type="number"
                name="salary"
                value={companyInfo.salary}
                onChange={handleSalary}
                onKeyDown={(evt) => (evt.key === ',' || evt.key === '.') && evt.preventDefault()}
                id="salary"
                onBlur={() =>
                  setCompanyInfo({
                    ...companyInfo,
                    hourlyRate:
                    Math.round(((companyInfo.salary / 2080) * 1.45) * 100) / 100
                  })
                }
                label="Yearly Salary"
                variant="outlined"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
          </Box>

          <Box id="firstName" w={[200, '100%', 200, 260]} ml={5} mt={4}>
            <FormControl
              fullWidth
              size="small"
              // className={classes.margin}
              variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">
                Bill Rate
              </InputLabel>
              <OutlinedInput
                value={companyInfo.hourlyRate}
                type="number"
                name="hourlyRate"
                disabled={true}
                onChange={handleHourlyRate}
                placeholder="20 (per hour) "
                id="hourlyRate"
                label="Bill Rate"
                variant="outlined"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
          </Box>

        </ThemeProvider>
      </Box>

      <ThemeProvider theme={theme}>
        <Box id="firstName" w={[200, '80%', 640, 825]} ml={5} mt={4}>
          <FormControl fullWidth size="small" variant="outlined">
            <TextField
              label="Role description"
              name="roleDescription"
              id="roleDescription"
              placeholder={descPlaceHolder}
              multiline
              value={companyInfo.roleDescription}
              rows={14}
              onChange={handleTitle}
              variant="outlined"
            />
          </FormControl>
        </Box>
      </ThemeProvider>

      <Box m={5} w={["80%", '100%', 500, 600]} display={'flex'} float="left">
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

        <Box w={["80%",150, 150, 150]} ml={5}>
          <ThemeProvider theme={theme}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={saveSkills}
              width="full"
              style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}>
              Add Skill
            </Button>
          </ThemeProvider>
        </Box>
      </Box>

      <Box
        h={'auto'}
        w={[238, '100%', '100%', 500]}
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

      <Box w={180} ml={5}>
        <ThemeProvider theme={theme}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={createContract}
            width="full"
            style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}>
            Add position
          </Button>
        </ThemeProvider>
      </Box>

      <Box
        h={'auto'}
        w={[238, 340, 230, 500]}
        d="flex"
        flexWrap="wrap"
        justifyContent="flex-start"
        p={2}
        mt={5}>
        {contract.map((con, index) => {
          return (
            <Box key={index}>
              <ThemeProvider key={index} theme={theme}>
                <Chip
                  color="primary"
                  // key={index}
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
                      {con.companyInfo.jobTitle}
                    </Box>
                  }
                  deleteIcon={<HighlightOffIcon style={{ color: 'white' }} />}
                  onDelete={() => deleteContract(con, index)}
                />
              </ThemeProvider>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Contract;
