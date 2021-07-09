import React from 'react';
import { Box } from '@chakra-ui/react';
import Step6 from '../../components/LoginSteps/Step6';
import Footer from '../../components/Nav/footer';

import styles from '../../components/LoginSteps/loginSteps.module.css';
function LoginStep6() {
  return (
    <div className={styles.mainDiv}>
      <Box
        w={['100%', 600, 780, 1000]}
        backgroundColor="white"
        h={'auto'}
        p={[10, 10, 10, 10]}
        m={(0, 'auto')}
        mt={20}
        mb={5}>
        <Step6 />
      </Box>
      <div>
        <Footer marginTop={130} />
      </div>
    </div>
  );
}

export default LoginStep6;
