import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { NoSsr } from '@material-ui/core';
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import './talent.css';
function TalentRoles({ user }) {
  return (
    <NoSsr>
      <div className={'back'}>
        <CardHeader>
          <GridItem>
            <Box className="category-talent-main-title">Desired Roles</Box>
            <Box>
              {(user.wantedRoles || []).map((role, index) => {
                return (
                  <div key={index} className={'main-item-div'}>
                    <Box className="category-talent-sub-title">
                      {' '}
                      {role.key} - {role.years}{' '}
                      {role.years === 1 ? 'Year' : 'Years'}{' '}
                    </Box>
                  </div>
                );
              })}
            </Box>
          </GridItem>
        </CardHeader>
      </div>
    </NoSsr>
  );
}

export default TalentRoles;
