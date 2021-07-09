import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import moment from 'moment';
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import './talent.css';

function TalentEducation({ user }) {
  return (
    <div className={'back'}>
      <CardHeader>
        <GridItem>
          <Box ml={2} className="category-talent-main-title ">
            Education
          </Box>
          {(user.educations || []).map((education, index) => {
            return (
              <div key={index} className={'main-item-div'}>
                <Box
                  ml={'8px'}
                  className="category-talent-sub-title-work-experience">
                  {education.school} - {education.degree} - (
                  {moment(education.startDate).format('YYYY')} -{' '}
                  {education.endDate === 'Still studying'
                    ? 'Still studying'
                    : moment(education.endDate).format('YYYY')}{' '}
                  )
                </Box>
              </div>
            );
          })}
        </GridItem>
      </CardHeader>
    </div>
  );
}

export default TalentEducation;
/*
   <Box key={index}>
            <Flex
              flexDirection="row"
            >
              <Text fontSize="xl">{education.school}</Text>
              <Text color="#1f2228" mr={8}>
              </Text>
            </Flex>
            <Text ml={2} color="#1f2228">
              {education.degree} ({moment(education.startDate).format('YYYY-MM')} - {moment(education.endDate).format('YYYY-MM')}) 
            </Text>
          </Box>
 */
