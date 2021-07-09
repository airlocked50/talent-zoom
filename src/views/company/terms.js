import React from 'react';
import { Box } from '@chakra-ui/react';
import Step3 from '../../components/CompanyLoginSteps/CompanyStep3';
import Footer from '../../components/Nav/footer';
import styles from '../../components/LoginSteps/loginSteps.module.css';

function CompanyStep3() {
  return (
    <div className={styles.mainDiv}>
      <Box
        w={[400, 500, 600, 1000]}
        backgroundColor="white"
        h={580}
        p={10}
        m={(0, 'auto')}
        mt={20}
        mb={5}>
        <Step3 />
      </Box>
      <div>
        <Footer marginTop={80} />
      </div>
    </div>
  );
}

export default CompanyStep3;
