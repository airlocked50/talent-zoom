/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Constants } from '../../constants/index';
import { addUserData } from '../../redux/actions/stepOneAction';
import {
  createMuiTheme,
  FormControl,
  InputLabel,
  TextField,
  ThemeProvider,
  Select,
  Button,
  Typography,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

import styles from '../LoginSteps/loginSteps.module.css';

const { INDUSTRIES, COMPANY_SIZE } = Constants;
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
function Step2() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (stepData.headquartersAddress) {
      
      setCompanyInfo({
        ...companyInfo,
        hqAddress: stepData.headquartersAddress,
        companyUrl: stepData.companyUrl,
        employee: stepData.companyEmployeeNumber,
        industry: stepData.companyIndustry
      });
      console.log(JSON.stringify(companyInfo.employee.key))
    }
  }, []);
  const { stepData } = useSelector(state => state.step);
  const [companyInfo, setCompanyInfo] = useState({
    hqAddress: '',
    companyUrl: '',
    employee: {},
    industry: {},
  });
  const [errorHq, setErrorHq] = useState(false);
  const [errorEmp, setErrorEmp] = useState(false);
  const [errorIn, setErrorIn] = useState(false);


  const [isVisible, setIsVisible] = useState(true);
  

  const history = useHistory();
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
    if(name === "hqAddress"){
      setErrorHq(false);
    }
    // setErrorComp({companyUrl: false})
    // setErrorComp({hqAddress: false})
   
  };
  const handleEmployeeNumber = e => {
    setErrorEmp(false);
    setCompanyInfo({ ...companyInfo, employee: JSON.parse(e.target.value) });
    
  };

  const handleOtherIndustry = e => {
    setCompanyInfo({
      ...companyInfo,
      industry: { key: e.target.value, value: 19 },
    });
    
  };

  const handleIndustry = e => {
    if (JSON.parse(e.target.value).key === 'Other') {
      setIsVisible(false);
      setErrorIn(false);
      setCompanyInfo({
        ...companyInfo,
        industry: { key: 'Other', value: 19 },
      });
    
    } else {
      setIsVisible(true);
      setErrorIn(false);
      setCompanyInfo({ ...companyInfo, industry: JSON.parse(e.target.value) });
      
    }
  };

  const goNextPage = () => {
    let updatedData = {
      companyUrl: companyInfo.companyUrl,
      headquartersAddress: companyInfo.hqAddress,
      companyEmployeeNumber: companyInfo.employee,
      companyIndustry: companyInfo.industry,
    };
    if (
      companyInfo.hqAddress !== '' &&
      Object.keys(companyInfo.employee).length !== 0 &&
      Object.keys(companyInfo.industry).length !== 0
    ) {
      dispatch(addUserData(updatedData));
      history.push('/companyFinal');
    }
    if(companyInfo.hqAddress === '' ) {
      setErrorHq(true);
      window.scroll(0,0);
    }
    if(Object.keys(companyInfo.industry).length === 0) {
      setErrorIn(true)
    }
    if(Object.keys(companyInfo.employee).length === 0) {
      setErrorEmp(true);
    }
   
  };
  return (
    <>
      <Box ml={[0, 5, 5, 5]}>
        <Box w={"90%"} variant="h4" className={styles.mainTitle}>
          Introduce us to your company.
        </Box>
      </Box>
      <hr />
      <Box ml={[0, 5, 5, 5]} mt={10}>
        <Box variant="h5" className={styles.subTitleBold}>
          Tell us about your company
        </Box>
      </Box>

      <Box w={'80%'} ml={[0, 5, 5, 5]} mt={2}>
        <Box variant="body1" className={styles.subTitle}>
          Telling us more about your company helps us match you with the right
          job seekers.
        </Box>
      </Box>

      <Box w={[300, 300, 400, 400]} ml={[0, 5, 5, 5]}>
        <FormControl id="hqAddress">
          <ThemeProvider theme={theme}>
            <Box w={[200, 280, 280, 280]} display="flex" flexWrap="wrap" mt={5}>
              <TextField
                fullWidth
                label="Company Address"
                error={errorHq}
                variant="outlined"
                size="small"
                id="hqAddress"
                type="hqAddress"
                name="hqAddress"
                value={companyInfo.hqAddress}
                onChange={handleInputChange}
              />
            </Box>
          </ThemeProvider>
        </FormControl>

        <FormControl id="companyUrl" ml={4}>
          <ThemeProvider theme={theme}>
            <Box w={[200, 280, 280, 280]} display="flex" flexWrap="wrap" mt={5}>
              <TextField
                fullWidth
                // error={errorComp.companyUrl}
                label="Website URL"
                variant="outlined"
                size="small"
                id="companyUrl"
                type="companyUrl"
                name="companyUrl"
                value={companyInfo.companyUrl}
                onChange={handleInputChange}
              />
            </Box>
          </ThemeProvider>
        </FormControl>

        <ThemeProvider theme={theme}>
          <Box w={[200, 280, 280, 280]} display="flex" flexWrap="wrap" mt={5}>
            <FormControl
              variant="outlined"
              color="primary"
              fullWidth
              size="small">
              <InputLabel htmlFor="outlined-age-native-simple">
                Number of Employees
              </InputLabel>
              <Select
                native
                error={errorEmp}
                
                onChange={handleEmployeeNumber}
                label="Number of Employees"
                inputProps={{
                  name: 'companySize',
                  id: 'outlined-age-native-simple',
                }}>
                <option aria-label="None" value={JSON.stringify(companyInfo.employee || {})}>
                {(companyInfo.employee.key && companyInfo.employee.key) || ''}
                </option>
                {Object.values(COMPANY_SIZE).map((size, index) => (
                  <option value={JSON.stringify(size)} key={index}>
                    {size.key}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </ThemeProvider>

        <Box mt={10}>
          <Box variant="h5" className={styles.subTitleBold}>
            What industry is your company in?
          </Box>
        </Box>
        <Box mt={2} w={'80%'} className={styles.subTitle}>
          <Box variant="body1">
            This will help us improve the results of our matching algorithm.
          </Box>
        </Box>

        <ThemeProvider theme={theme}>
          <Box w={[200, 280, 280, 280]} display="flex" flexWrap="wrap" mt={5}>
            <FormControl
              variant="outlined"
              color="primary"
              fullWidth
              size="small">
              <InputLabel htmlFor="outlined-age-native-simple">
                Select an Industry
              </InputLabel>
              <Select
                native
                onChange={handleIndustry}
                error={errorIn}
                label="Select an Industry"
                inputProps={{
                  name: 'industry',
                  id: 'outlined-age-native-simple',
                }}>
                <option value={JSON.stringify(companyInfo.industry || {})}>
                  {(companyInfo.industry.key && companyInfo.industry.key) || ''}
                  </option>
                {Object.values(INDUSTRIES).map((industry, index) => (
                  <option key={index} value={JSON.stringify(industry)}>
                    {industry.key}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </ThemeProvider>

        <ThemeProvider theme={theme}>
          <FormControl id="other" ml={4}>
            <Box w={[200, 280, 280, 280]} display="flex" flexWrap="wrap" mt={5}>
              <TextField
                disabled={isVisible}
                fullWidth
                label="Type your Industry"
                variant="outlined"
                size="small"
                id="companyUrl"
                type="text"
                name="industry"
                onChange={handleOtherIndustry}
              />
            </Box>
          </FormControl>
        </ThemeProvider>
      </Box>

      <Box w={100} ml={[0, 5, 5, 5]} mt={10}>
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

export default Step2;
