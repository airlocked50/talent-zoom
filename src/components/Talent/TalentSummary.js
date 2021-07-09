import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import CardHeader from '../material-ui-component/Card/CardHeader';
import GridItem from '../material-ui-component/Grid/GridItem';
import './talent.css';
function TalentSummary({ user }) {
  return (
    <div className={'back'}>
      <CardHeader>
        <GridItem>
          <Box className="category-talent-main-title " ml={2}>
            Summary
          </Box>

          <Flex>
            <div className={'main-item-div'}>
              <Box
                className="category-talent-sub-title"
                ml={2}
                w={[180, 400, 500, 600]}
                style={{ whiteSpace: 'break-spaces' }}>
                {user.summary}
              </Box>
            </div>
          </Flex>
        </GridItem>
      </CardHeader>
    </div>
  );
}

export default TalentSummary;
