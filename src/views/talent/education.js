import React from 'react';
import { Box } from '@chakra-ui/react';
import Step5 from '../../components/LoginSteps/Step5';
import Footer from '../../components/Nav/footer';

function LoginStep5() {
  return (
    <div style={{ backgroundColor: '#F4F4F4', paddingTop: 10 }}>
      <Box
        w={[375, 600, 780, 1000]}
        backgroundColor="white"
        h={'auto'}
        p={10}
        m={(0, 'auto')}
        mt={20}
        mb={5}>
        <Step5 />
      </Box>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LoginStep5;
