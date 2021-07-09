import { Box, Text } from '@chakra-ui/react';
import { Constants } from '../../constants/index';
import React, { useState } from 'react';
import { Button, Chip } from '@material-ui/core';
import moment from 'moment';
import './bubbles.css';
import PreviewOffer from '../Modals/PreviewOffer';

function CompanyStep({ content, companyLogo, companyName }) {
  const [openModalOffer, setOpenModalOffer] = useState(false);

  const renderHours = hours => {
    return (hours || []).map((hour, i) => {
      let arr = Object.values(Constants.APPOINMTMENT_TIME);
      const selectedHour = arr.find(item => item.value === hour);
      return (
        <Chip
          key={i}
          style={{ marginLeft: '10px', marginTop: '5px', height: 17 }}
          label={selectedHour ? selectedHour.key : '-'}
        />
      );
    });
  };

  const handleCloseOffer = () => {
    setOpenModalOffer(false);
  };

  const renderContent = () => {
    return ((content && content.suitableDates) || []).map((dates, i) => {
      return (
        <div key={i}>
          <Text ml={3} fontWeight="bold" mt={3}>
            • {moment(dates.date).format('dddd, MMMM Do YYYY')}
          </Text>
          <Box
            h={'auto'}
            w={'40%'}
            d="flex"
            flexWrap="wrap"
            justifyContent="flex-start"
            p={2}>
            {renderHours(dates.hours)}
          </Box>
        </div>
      );
    });
  };

  return (
    <div className={'speech-bubble'}>
      <Text mb={5} fontWeight="bold" mt={3}>
        {companyName}
      </Text>
      {content && content.suitableDates.length !== 0 && (
        <Text color={'#2196f3'}>Requested interview day/time</Text>
      )}
      {renderContent()}
      {content && content.message && (
        <Text color={'#2196f3'} mt={5}>
          Message
        </Text>
      )}
      {content && content.message && <Text mt={3}>{content.message}</Text>}
      {content && content.offer && (
        <Text mt={3} color={'#2196f3'}>
          Recent Offer
        </Text>
      )}
      {content && content.offer && (
        <Button
          mt={3}
          onClick={() => setOpenModalOffer(true)}
          color={'#2196f3'}
          style={{ textTransform: 'none' }}>
          Click to preview offer
        </Button>
      )}
      <PreviewOffer
        offerLetter={content.offer}
        logo={companyLogo}
        date={content.offerDate}
        value={openModalOffer}
        close={handleCloseOffer}
      />
    </div>
  );
}

export default CompanyStep;
