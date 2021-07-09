import React from 'react';
import { Box } from '@chakra-ui/react';
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import '../Talent/talent.css';
import { Chip } from '@material-ui/core';
function CompanyContract({ user }) {
  return (
    <div className={'back'}>
      <CardHeader>
        <GridItem>
          <Box ml={2} className="category-talent-main-title">
            Open Positions
          </Box>
          {(user.contract || []).map((contract, index) => {
            return (
              <div key={index} className={'main-item-div'}>
                <Box
                  ml={2}
                  className="category-talent-sub-title-work-experience">
                  {contract.companyInfo.jobTitle} (
                  {contract.companyInfo.jobTime}){' '}
                </Box>
                <Box className="category-talent-sub-title" ml={2}>
                  {' '}
                  - Experience: {contract.companyInfo.experience} years{' '}
                </Box>
                <Box ml={2} className="category-talent-sub-title">
                  {' '}
                  - Salary: ${contract.companyInfo.salary}
                </Box>
                <Box
                  ml={2}
                  className="category-talent-sub-title"
                  style={{ whiteSpace: 'break-spaces' }}>
                  - Role Description:
                </Box>
                <Box
                  ml={4}
                  className="category-talent-sub-title"
                  style={{ whiteSpace: 'break-spaces' }}>
                  {contract.companyInfo.roleDescription}
                </Box>
                <Box
                  ml={2}
                  className="category-talent-sub-title"
                  style={{ whiteSpace: 'break-spaces' }}>
                  - Required Skills:
                </Box>
                <Box
                  ml={4}
                  h={'auto'}
                  w={[238, 340, 230, 500]}
                  d="flex"
                  flexWrap="wrap"
                  justifyContent="flex-start"
                  className="category-talent-sub-title"
                  style={{ whiteSpace: 'break-spaces' }}>
                  {contract.skills.map(item => {
                    return (<Chip
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
                        {item.skillName}
                      </Box>
                    }
                  />)
                  })}
                </Box>
              </div>
            );
          })}
        </GridItem>
      </CardHeader>
    </div>
  );
}

export default CompanyContract;
