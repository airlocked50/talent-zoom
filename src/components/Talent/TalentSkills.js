import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import './talent.css';
import { Chip } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
function TalentSkills({ user }) {
  return (
    <div className={'back'}>
      <CardHeader>
        <GridItem h={'auto'}>
          <Box ml={2} className="category-talent-main-title">
            Skills
          </Box>
          <Box
            h={'auto'}
            w={['100%', '100%', '100%', '100%']}
            d="flex"
            mt={'10px'}
            flexWrap="wrap"
            justifyContent="flex-start">
            {(user.skills || []).map((skill, index) => {
              return (
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
                        {skill.skillName}
                      </Box>
                    }
                  />
                </ThemeProvider>
              );
            })}
          </Box>
        </GridItem>
      </CardHeader>
    </div>
  );
}

export default TalentSkills;
