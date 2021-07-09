import React from 'react';
import { Box } from '@chakra-ui/react';
import Step1 from '../../components/CompanyLoginSteps/CompanyStep1';
import styles from '../../components/LoginSteps/loginSteps.module.css';
import Footer from '../../components/Nav/footer';

function CompanyStep1() {
  return (
    <div className={styles.mainDiv}>
      <Box
        w={[400, 500, 600, 1000]}
        backgroundColor="white"
        h={'auto'}
        p={10}
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

export default CompanyStep1;
