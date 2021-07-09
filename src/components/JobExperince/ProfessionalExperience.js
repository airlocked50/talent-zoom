import React from 'react';
import { Chip } from '@material-ui/core';

import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Box } from '@chakra-ui/react';

function ProfessionalExperience({ talentExperience, index, deleteJob }) {
  return (
    <Chip
      key={index}
      label={
        <Box
          style={{
            color: 'white',
            fontFamily: 'Ubuntu',
            fontWeight: 400,
          }}>
          {talentExperience.company + ' - ' + talentExperience.position}
        </Box>
      }
      onDelete={deleteJob}
      deleteIcon={<HighlightOffIcon style={{ color: 'white' }} />}
      style={{
        marginTop: 10,
        marginLeft: '10px',
        backgroundColor: '#616161',
      }}
    />
  );
}

export default ProfessionalExperience;
/* <Box
      key={index}
      borderWidth={1}
      borderRadius={5}
      borderColor={"#7DB0E4"}
      w={350}
      mt={10}
    >
      <Stat ml={5}>
        <Text fontWeight="bold" mt={3} fontSize="md">
          {talentExperience.company}
        </Text>
        <StatLabel>{talentExperience.position}</StatLabel>
        <StatHelpText>
          {moment(talentExperience.startDate).utc().format("YYYY-MM")} -{" "}
          {moment(talentExperience.endDate).utc().format("YYYY-MM")}
        </StatHelpText> 
      </Stat>
   </Box>*/
