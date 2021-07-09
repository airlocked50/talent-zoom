import React from 'react';
import { Box } from '@chakra-ui/react';
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import '../Talent/talent.css';
function CompanyVision({ user }) {
  return (
    <div className={'back'}>
      <CardHeader>
        <GridItem>
          <Box ml={2} className="category-talent-main-title">
            Company Vision and Mission
          </Box>
          <Box
            ml={2}
            className="category-talent-sub-title"
            style={{ whiteSpace: 'break-spaces' }}>
            {user.visionMission}
          </Box>
        </GridItem>
      </CardHeader>
    </div>
  );
}

export default CompanyVision;
