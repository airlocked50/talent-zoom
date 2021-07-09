/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Constants } from '../../constants/index';
import { addUserData } from '../../redux/actions/stepOneAction';
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
import styles from '../LoginSteps/loginSteps.module.css';
import { updateCompany } from '../../api/companyApi';

const { JOB_TITLES, JOB_TIME_2, EXPERIENCE_YEAR } = Constants;

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function CompanyContract() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (stepData.contract) {
      setContract(stepData.contract);
    }
  }, []);
  const { stepData } = useSelector(state => state.step);
  const { userData } = useSelector(state => state.user);
  const [companyInfo, setCompanyInfo] = useState({
    jobTitle: '',
    jobTime: '',
    experience: '',
    salary: 0,
    roleDescription: ``,
  });
  const [talentSkills, setTalentSkills] = useState([]);
  const [skill, setSkill] = useState('');
  const [hourlyRate, setHourlyRate] = useState(0);
  const [contract, setContract] = useState([]);
  const history = useHistory();
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
  const descPlaceHolder = ` Business Overview -  What is the business challenge your team is solving? Who are the end users and how are they impacted?

Project Description - What is the project or product your team is working on? Is this a new or existing product? New Feature development? Maintenance? 

Job Description - Walk us through day to day responsibilities of this individual. How does that play into the larger team? Who will they interact with? 

Role Requirements - What programming languages will be used? What are the skills required to do the job and describe how they will be used. 

Candidate Qualifications - Years of experience, education, certifications, soft skills?`
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
  const createContract = () => {
    if (companyInfo.jobTitle.length !== 0) {
      setContract([...contract, { skills: talentSkills, companyInfo }]);
      setTalentSkills([]);
      setCompanyInfo({
        jobTitle: '',
        jobTime: '',
        experience: 0,
        salary: 0,
        roleDescription: ``,
      });
      setHourlyRate(0);
      window.scrollTo(0, 0);
    
    }
  };
  const deleteContract = (con, index) => {
    const updatedContracts = contract.filter((item, i) => i !== index);
    setContract(updatedContracts);
  };
  const goNextPage = async () => {
    const profile = JSON.parse(userData);
    let updatedData = {
      contract,
      isFirstLogin: 'false',
      name: profile.name,
      surname: profile.surname,
      email: profile.email,
    };
    dispatch(addUserData(updatedData));
    const user = await updateCompany({
        body: { ...stepData, ...updatedData },
        _id: profile._id,
        token: profile.tokenCode,
      });
     
      if (user !== null || user !== undefined) {
        localStorage.setItem('userInformations', JSON.stringify(user));
        setTimeout(() => {
          history.push({
            pathname: `/companyProfile`,
            search: `?id=${profile ? profile._id : null}`,
          });
        }, 1000);
      }
  };
  return (
    <Box h={'auto'}>
      <Box ml={[0, 5, 5, 5]}>
        <Box w={"90%"} variant="h4" className={styles.mainTitle}>
          Describe the role(s) you’re hiring for.
        </Box>
      </Box>

      <hr />
      <Box w={[300, 400, 700, 900]} display="flex" flexWrap="wrap" mt={5}>
        <ThemeProvider theme={theme}>
          <Box
            w={[200, '100%', 150, 260]}
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
            w={[200, '100%', 150, 260]}
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
            w={[200, '100%', 150, 260]}
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
                Years of Experience
              </InputLabel>
              <Select
                native
                value={companyInfo.experience}
                onChange={handleExperience}
                label="Years of Experience"
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

      <Box d="flex" flexWrap="wrap" w={['90%', 400, 700, 900]}>
        <ThemeProvider theme={theme}>
          <Box id="firstName" w={[200, '100%', 150, 260]} ml={5} mt={4}>
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
                onBlur={() =>
                  setHourlyRate(
                    Math.round((companyInfo.salary / 2080) * 1.45 * 100) / 100
                  )
                }
                id="salary"
                label="Annual Salary"
                variant="outlined"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                labelWidth={60}
              />
            </FormControl>
          </Box>
          <Box id="firstName" w={[200, '100%', 150, 260]} ml={5} mt={4}>
            <FormControl
              fullWidth
              size="small"
              // className={classes.margin}
              variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">
                Bill Rate
              </InputLabel>
              <OutlinedInput
                value={hourlyRate}
                disabled={true}
                type="number"
                name="hourlyRate"
                onChange={e => {
                  setHourlyRate(parseInt(e.target.value));
                }}
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
        <Box id="firstName" w={[200, '100%', 490, 825]} ml={5} mt={4}>
          <FormControl fullWidth size="small" variant="outlined">
            <TextField
              label="Role description"
              name="roleDescription"
              placeholder={descPlaceHolder}
              id="roleDescription"
              multiline
              rows={14}
              value={companyInfo.roleDescription}
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
              label="Skills required"
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

      <Box w={["70%",150, 150, 150]} ml={[5, 1, 5, 5]}>
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
        w={[238, 340, 230, 500]}
        ml={[0, 5, 5, 5]}
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
            Save & Add Another Role
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
  );
}

export default CompanyContract;

/*

 <Box w={[300, 400, 600, 900]} h={20} display="flex" float="left" mt={10}>
        <Select
          placeholder="Select position"
          onChange={handleTitle}
          name="jobTitle"
          mt={4}
          ml={[0, 5, 5, 5]}
        >
          {Object.values(JOB_TITLES).map((job, index) => (
            <option key={index} value={job.key}>
              {job.key}
            </option>
          ))}
        </Select>
        <Select
          placeholder="Select contract"
          onChange={handleTitle}
          name="jobTime"
          mt={4}
          ml={[0, 5, 5, 5]}
        >
          {Object.values(JOB_TIME).map((job, index) => (
            <option key={index} value={job.key}>
              {job.key}
            </option>
          ))}
        </Select>
        <Select
          placeholder="Select experience"
          onChange={handleExperience}
          name="experience"
          mt={4}
          ml={[0, 5, 5, 5]}
        >
          {Object.values(EXPERIENCE_YEAR).map((year, index) => (
            <option key={index} value={JSON.stringify(year.key)}>
              {year.key}
            </option>
          ))}
        </Select>
      </Box>
*/
