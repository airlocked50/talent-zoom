import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import moment from 'moment';
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import './talent.css';
function TalentWorkExperience({ user }) {
  return (
    <div className={'back'}>
      <CardHeader>
        <GridItem>
          <Box ml={2} className="category-talent-main-title">
            Work Experience
          </Box>
          {(user.workedCompanies || []).map((company, index) => {
            return (
              <div key={index} className={'main-item-div'}>
                <Box
                  ml={'8px'}
                  className="category-talent-sub-title-work-experience">
                  {' '}
                  {company.position} - {company.company} (
                  {moment(company.startDate).format('YYYY-MM')} -{' '}
                  {company.endDate === 'Still working'
                    ? 'Still working'
                    : moment(company.endDate).format('YYYY-MM')}
                  ){' '}
                </Box>
                <Box
                  ml={'15px'}
                  className="category-talent-sub-title"
                  style={{ whiteSpace: 'break-spaces' }}>
                  {company.description}
                </Box>
              </div>
            );
          })}
        </GridItem>
      </CardHeader>
    </div>
  );
}

export default TalentWorkExperience;
