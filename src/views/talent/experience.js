/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Box } from '@chakra-ui/react';
import Step4 from '../../components/LoginSteps/Step4';
import Footer from '../../components/Nav/footer';

import styles from '../../components/LoginSteps/loginSteps.module.css';
function LoginStep4() {
  return (
    <div className={styles.mainDiv}>
      <Box
        w={['100%', 600, 780, 1000]}
        backgroundColor="white"
        p={[10, 10, 10, 10]}
        m={(0, 'auto')}
        mt={20}
        mb={60}>
        <Step4 />
      </Box>
      <div>
        <Footer marginTop={130} />
      </div>
    </div>
  );
}

export default LoginStep4;
