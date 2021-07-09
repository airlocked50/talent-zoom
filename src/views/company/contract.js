import React from 'react';
import { Box } from '@chakra-ui/react';
import CompanyContract from '../../components/CompanyLoginSteps/CompanyContract';

import styles from '../../components/LoginSteps/loginSteps.module.css';
import Footer from '../../components/Nav/footer';

function Contract() {
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
        <CompanyContract />
      </Box>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Contract;
