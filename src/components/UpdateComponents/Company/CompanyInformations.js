/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Constants } from '../../../constants/index';
import styles from '../../LoginSteps/loginSteps.module.css';
import {
  createMuiTheme,
  FormControl,
  InputLabel,
  TextField,
  ThemeProvider,
  Select,
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { updateUserData } from '../../../redux/actions/updateAction';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';

const { INDUSTRIES, COMPANY_SIZE } = Constants;
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
function CompanyInformations({ infos }) {
  const [companyInfo, setCompanyInfo] = useState({
    companyName: infos.companyName,
    headquartersAddress: infos.headquartersAddress,
    companyEmployeeNumber: infos.companyEmployeeNumber,
    companyIndustry: infos.companyIndustry,
    companyCity: infos.companyCity,
    phone: infos.phone,
  });
  const [companyUrl, setCompanyUrl] = useState(infos.companyUrl);
  const [isVisible, setIsVisible] = useState(true);
  React.useEffect(() => {}, []);

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;
    setCompanyInfo({ ...companyInfo, [name]: value });
  };
  const handleEmployeeNumber = e => {
    setCompanyInfo({
      ...companyInfo,
      companyEmployeeNumber: JSON.parse(e.target.value),
    });
    const updatedData = {
      ...companyInfo,
      companyEmployeeNumber: JSON.parse(e.target.value),
    };

    dispatch(updateUserData(updatedData));
  };

  const handleOtherIndustry = e => {
    setCompanyInfo({
      ...companyInfo,
      companyIndustry: { key: e.target.value, value: 19 },
    });
    const updatedData = {
      ...companyInfo,
      companyIndustry: { key: e.target.value, value: 19 },
    };
    dispatch(updateUserData(updatedData));
  };

  const handleIndustry = e => {
    if (JSON.parse(e.target.value).key === 'Other') {
      setIsVisible(false);
      setCompanyInfo({
        ...companyInfo,
        companyIndustry: { key: 'Other', value: 19 },
      });
      const updatedData = {
        ...companyInfo,
        companyIndustry: { key: 'Other', value: 19 },
      };
      dispatch(updateUserData(updatedData));
    } else {
      setIsVisible(true);
      setCompanyInfo({
        ...companyInfo,
        companyIndustry: JSON.parse(e.target.value),
      });
      const updatedData = {
        ...companyInfo,
        companyIndustry: JSON.parse(e.target.value),
      };
      dispatch(updateUserData(updatedData));
    }
  };

  const handleOnblur = () => {
    let updatedData = {
      companyUrl: companyUrl,
      headquartersAddress: companyInfo.headquartersAddress,
      companyEmployeeNumber: companyInfo.companyEmployeeNumber,
      companyCity: companyInfo.companyCity,
      phone: companyInfo.phone,
      companyIndustry: companyInfo.companyIndustry,
    };
    dispatch(updateUserData(updatedData));
  };

  return (
    <>
      <Box w={[280, 300, 400, 400]} ml={[0, 5, 5, 5]}>
        <Box ml={[0, 5, 5, 5]} mt={10}>
          <Box variant="h5" className={styles.subTitleBold}>
            Phone number
          </Box>
        </Box>

        <Box
          w={[240, 280, 280, 280]}
          display="flex"
          flexWrap="wrap"
          ml={[0, 5, 5, 5]}
          mt={5}>
          <PhoneInput
            inputStyle={{ height: 40, width: '100%' }}
            onlyCountries={['us']}
            country={'us'}
            value={companyInfo.phone}
            onChange={e => setCompanyInfo({ ...companyInfo, phone: e })}
            onBlur={handleOnblur}
          />
        </Box>

        <Box ml={[0, 5, 5, 5]} mt={10}>
          <Box variant="h5" className={styles.subTitleBold}>
            Tell us about your company
          </Box>
        </Box>

        <Box ml={[0, 5, 5, 5]} mt={2}>
          <Box variant="body1" className={styles.subTitle}>
            This will help candidates learn if your company aligns with what
            they are looking for.
          </Box>
        </Box>
        <FormControl id="headquartersAddress">
          <ThemeProvider theme={theme}>
            <Box
              w={[240, 280, 280, 280]}
              display="flex"
              flexWrap="wrap"
              ml={[0, 5, 5, 5]}
              mt={5}>
              <TextField
                fullWidth
                label="Headquarters Address"
                variant="outlined"
                size="small"
                id="headquartersAddress"
                type="headquartersAddress"
                name="headquartersAddress"
                value={companyInfo.headquartersAddress}
                onChange={handleInputChange}
                onBlur={handleOnblur}
              />
            </Box>
          </ThemeProvider>
        </FormControl>

        <FormControl id="companyUrl" ml={4}>
          <ThemeProvider theme={theme}>
            <Box
              w={[240, 280, 280, 280]}
              display="flex"
              flexWrap="wrap"
              ml={[0, 5, 5, 5]}
              mt={5}>
              <TextField
                fullWidth
                label="Company Website Url"
                variant="outlined"
                size="small"
                id="companyUrl"
                type="companyUrl"
                name="companyUrl"
                value={companyUrl}
                onChange={e => setCompanyUrl(e.target.value)}
                onBlur={handleOnblur}
              />
            </Box>
          </ThemeProvider>
        </FormControl>

        <ThemeProvider theme={theme}>
          <Box
            w={[240, 280, 280, 280]}
            display="flex"
            flexWrap="wrap"
            ml={[0, 5, 5, 5]}
            mt={5}>
            <FormControl
              variant="outlined"
              color="primary"
              fullWidth
              size="small">
              <InputLabel htmlFor="outlined-age-native-simple">
                Select a number of employees
              </InputLabel>
              <Select
                native
                onChange={handleEmployeeNumber}
                label="Select a number of employees"
                inputProps={{
                  name: 'companyEmployeeNumber',
                  id: 'outlined-age-native-simple',
                }}>
                <option
                  value={JSON.stringify(infos.companyEmployeeNumber || {})}>
                  {(infos.companyEmployeeNumber &&
                    infos.companyEmployeeNumber.key) ||
                    ''}
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

        <Box
          ml={[0, 5, 5, 5]}
          fontWeight="bold"
          mt={10}
          className={styles.subTitleBold}>
          Industry
        </Box>
        <Box ml={[0, 5, 5, 5]} mt={2} className={styles.subTitle}>
          Knowing your company's industry helps our algorithm make better
          recommendations that align to candidate preferences.
        </Box>

        <ThemeProvider theme={theme}>
          <Box
            w={[240, 280, 280, 280]}
            display="flex"
            flexWrap="wrap"
            ml={[0, 5, 5, 5]}
            mt={5}>
            <FormControl
              variant="outlined"
              color="primary"
              fullWidth
              size="small">
              <InputLabel htmlFor="outlined-age-native-simple">
                Select an industry
              </InputLabel>
              <Select
                native
                onChange={handleIndustry}
                label="Select an industry"
                inputProps={{
                  name: 'companyIndustry',
                  id: 'outlined-age-native-simple',
                }}>
                <option value={JSON.stringify(infos.companyIndustry || {})}>
                  {(infos.companyIndustry && infos.companyIndustry.key) || ''}
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
            <Box
              w={[240, 280, 280, 280]}
              display="flex"
              flexWrap="wrap"
              ml={[0, 5, 5, 5]}
              mt={5}>
              <TextField
                disabled={isVisible}
                fullWidth
                label="Type Your Industry"
                variant="outlined"
                size="small"
                id="companyIndustry"
                type="text"
                name="companyIndustry"
                onChange={handleOtherIndustry}
              />
            </Box>
          </FormControl>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default CompanyInformations;
