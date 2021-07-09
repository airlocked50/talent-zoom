import { Box, Stat, StatHelpText, StatLabel, Text } from '@chakra-ui/react';
import React from 'react';
import moment from 'moment';

function TalentEducation({ talentEducation }) {
  return (
    <Box borderWidth="1px" w={[250, 320, 500, 500]}>
      <Stat ml={5}>
        <Text fontWeight="bold" mt={10} fontSize="md">
          {talentEducation.school}
        </Text>
        <StatLabel>{talentEducation.degree}</StatLabel>
        <StatHelpText>
          {moment(talentEducation.startDate).format('YYYY')} -{' '}
          {moment(talentEducation.endDate).format('YYYY')}
        </StatHelpText>
      </Stat>
    </Box>
  );
}

export default TalentEducation;
