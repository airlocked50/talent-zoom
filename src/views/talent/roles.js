/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Box } from '@chakra-ui/react';
import Step3 from '../../components/LoginSteps/Step3';
import Footer from '../../components/Nav/footer';
import styles from '../../components/LoginSteps/loginSteps.module.css';

function LoginStep3() {
  return (
    <div className={styles.mainDiv}>
      <Box
        w={[400, 600, 780, 1000]}
        backgroundColor="white"
        h={'auto'}
        p={[10, 10, 10, 10]}
        m={(0, 'auto')}
        mt={20}
        mb={5}>
        <Step3 />
      </Box>
      <div>
        <Footer marginTop={70} />
      </div>
    </div>
  );
}

export default LoginStep3;
