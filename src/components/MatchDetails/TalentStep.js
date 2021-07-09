import { Box, Text } from '@chakra-ui/react';
import { Constants } from '../../constants/index';
import React, { useEffect } from 'react';
import { Chip } from '@material-ui/core';
import moment from 'moment';
import './bubbles.css';

function TalentStep({ content, offerLetter, talent }) {
  useEffect(() => {
    
  }, []);
  const renderHours = hour => {
    let arr = Object.values(Constants.APPOINMTMENT_TIME);
    const selectedHour = arr.find(item => item.value === hour);
  
    return (
      <Chip
        style={{ marginLeft: '10px', marginTop: '5px', height: 17 }}
        label={selectedHour ? selectedHour.key : '-'}
      />
    );
  };

  if (content) {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Box w={'50%'} />
        <div className={'speech-bubble-talent'}>
          <Text mb={5} fontWeight="bold" mt={3}>
             {talent.name + " " + talent.surname}
          </Text>
          {content && content.selectedDate && (
            <Text color={'#2196f3'}>Confirmed interview day/time</Text>
          )}
          {content && content.selectedDate && (
            <Text ml={3} fontWeight="bold" mt={3}>
              • {moment(content.selectedDate).format('dddd, MMMM Do YYYY')}
            </Text>
          )}
          {content && content.selectedHour && renderHours(content.selectedHour)}
          {content && content.message && (
            <Text color={'#2196f3'} mt={5}>
              Message
            </Text>
          )}
          {content && content.message && <Text mt={3}>{content.message}</Text>}
          {content && content.offerAccept !== undefined && (
            <Text color={'#2196f3'}>Offer Status</Text>
          )}
          {content && content.offerAccept !== undefined && (
            <Text mt={3} fontWeight="bold">
              {content.offerAccept === true ? 'Accepted' : 'Declined'}
            </Text>
          )}
        </div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default TalentStep;
