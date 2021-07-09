/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Box } from '@chakra-ui/react';
import Step2 from '../../components/LoginSteps/Step2';
import Footer from '../../components/Nav/footer';
import styles from '../../components/LoginSteps/loginSteps.module.css';

function LoginStep2() {
  return (
    <div className={styles.mainDiv}>
      <Box
        w={['100%', 500, 600, 1000]}
        backgroundColor="white"
        h={'auto'}
        p={[10, 10, 10, 10]}
        m={(0, 'auto')}
        mt={20}
        mb={5}>
        <Step2 />
      </Box>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LoginStep2;
