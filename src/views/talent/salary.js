import React from 'react';
import { Box } from '@chakra-ui/react';
import Step7 from '../../components/LoginSteps/Step7';
import Footer from '../../components/Nav/footer';

import styles from '../../components/LoginSteps/loginSteps.module.css';

function LoginStep7() {
  return (
    <div className={styles.mainDiv}>
      <Box
        w={['100%', 600, 780, 1000]}
        backgroundColor="white"
        // h={"auto"}
        p={[10, 10, 10, 10]}
        m={(0, 'auto')}
        mb={5}
        mt={20}
        h={'auto'}>
        <Step7 />
      </Box>
      <div>
        <Footer marginTop={130} />
      </div>
    </div>
  );
}

export default LoginStep7;
