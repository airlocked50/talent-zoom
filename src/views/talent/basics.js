/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Box } from '@chakra-ui/react';
import Step1 from '../../components/LoginSteps/Step1';
import Footer from '../../components/Nav/footer';

import styles from '../../components/LoginSteps/loginSteps.module.css';

function LoginStep1() {
  return (
    <div className={styles.mainDiv}>
      <Box
        w={['100%', 500, 600, 1000]}
        backgroundColor="white"
        h={'auto'}
        p={[0, 10, 10, 10]}
        m={(0, 'auto')}
        mt={20}
        mb={5}>
        <Step1 />
      </Box>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LoginStep1;
