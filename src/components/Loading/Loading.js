import { Box } from '@material-ui/core';
import React from 'react';
import './Loading.css';
const Loading = () => (
  <div className={'container'}>
    <Box>
      <lottie-player
        src="https://assets7.lottiefiles.com/temp/lf20_mf5PGi.json"
        background="transparent"
        speed="1.7"
        loop
        autoplay
      />
    </Box>
  </div>
);

export default Loading;
