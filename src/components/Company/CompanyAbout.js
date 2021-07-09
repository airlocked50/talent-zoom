import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import GridItem from '../material-ui-component/Grid/GridItem';

import '../Talent/talent.css';
function CompanyAbout({ user, mainUser }) {
  const history = useHistory();

  function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? '+1 ' : '';
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }

  const renderPhone = () => {
    const profileId = history.location.search.split('?id=')[1];
    if (mainUser && profileId === mainUser._id) {
      return (
        <>
          <Box mt={3} className="sub-title-about">
            Employer phone number
          </Box>
          <Box className="sub-body-about">{formatPhoneNumber(user.phone)}</Box>
        </>
      );
    }
  };
  return (
    <Box h={'auto'}>
      <Flex flexDirection="column" justify="center" align="center" mt={5}>
        <GridItem mt={5} ml={10}>
          <Box className="name">{user.companyName ? user.companyName : ''}</Box>
          <Box className="sub-body-about">
            {user.livingCity ? user.livingCity : ''}
          </Box>

          <a
            className="visit"
            target="_blank"
            href={user.companyUrl ? `https://${user.companyUrl}` : '/'}
            rel="noreferrer">
            Visit company website
          </a>
          <hr className="line" />
        </GridItem>

        {/* <Box mt={3} className="sub-title-about">
          Company Address
        </Box>
        <Box className="sub-body-about">
          {user.headquartersAddress ? user.headquartersAddress : ''}
        </Box> */}

        <Box mt={3} className="sub-title-about">
          Headquarters
        </Box>
        <Box className="sub-body-about">
          {user.headquartersAddress ? user.headquartersAddress : ''}
        </Box>

        <Box mt={3} className="sub-title-about">
          Actively seeking
        </Box>
        {(user.wantedRoles || []).map((contract, index) => {
          return (
            <Box key={index} className="sub-body-about">
              {contract.key}
            </Box>
          );
        })}

        <Box mt={3} className="sub-title-about">
          Technology we use
        </Box>
        {(user.wantedSkills || []).map((item, index) => {
          return (
            <Box key={index} className="sub-body-about">
              {item.skillName}
            </Box>
          );
        })}

        <Box mt={3} className="sub-title-about">
          Cities we hire in
        </Box>
        {(user.wantedWorkCity || []).map((contract, index) => {
          return (
            <Box key={index} className="sub-body-about">
              {contract.key}
            </Box>
          );
        })}

        <Box mt={3} className="sub-title-about">
          Industry
        </Box>
        <Box className="sub-body-about">
          {user.companyIndustry
            ? user.companyIndustry.key
              ? user.companyIndustry.key
              : ''
            : ''}
        </Box>

        <Box mt={3} className="sub-title-about">
          Company size
        </Box>
        <Box className="sub-body-about">
          {user.companyEmployeeNumber
            ? user.companyEmployeeNumber.key
              ? user.companyEmployeeNumber.key
              : ''
            : ''}
        </Box>

        {/* {renderPhone()} */}
      </Flex>
    </Box>
  );
}

export default CompanyAbout;
