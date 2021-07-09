import React, { useEffect, useState } from 'react';
import { Box, Checkbox } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, Button } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

import styles from '../LoginSteps/loginSteps.module.css';
const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

function Step3() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [terms, setTerms] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [errorTerms, setErrorTerms] = useState(false);
  const history = useHistory();
  const goNextPage = () => {
    if (terms === true && policy === true) history.push('/companyFinal');
    if (terms === false || policy === false) {
      setErrorTerms(true);
    }
  };
  return (
    <>
      <Box ml={[0, 5, 5, 5]}>
        <Box variant="h4" className={styles.mainTitle}>
          We believe in data privacy and compliance.
        </Box>
      </Box>
      <hr />
      <Box ml={[0, 5, 5, 5]} mt={10}>
        <Box variant="h5" className={styles.subTitleBold}>
          Please review and accept our Terms and Conditions:
        </Box>
      </Box>

      <Box ml={[0, 5, 5, 5]} w={'80%'} mt={2}>
        <Box variant="body1" className={styles.subTitle}>
          Hired is committed to protecting your data. As part of our continuing
          compliance efforts, please accept our updated terms.
        </Box>
      </Box>

      <Box w={'100%'} display="flex" flexDir="column" mt={5} ml={[0, 5, 5, 5]}>
        <Checkbox
          border="#555555"
          textAlign="center"
          id="terms"
          color="#424242"
          onClick={e => {
            setErrorTerms(false);
            setTerms(e.target.checked);
          }}
          fontFamily="Ubuntu">
          I accept TalentZoom’s{' '}
          <a
            style={{ color: '#1A75D1', textDecoration: 'underline' }}
            target="_blank"
            href="/employers-terms">
            Terms & Conditions
          </a>
          .
        </Checkbox>
        <Checkbox
          border="#555555"
          textAlign="center"
          id="contiditons"
          color="#424242"
          onClick={e => {
            setErrorTerms(false);
            setPolicy(e.target.checked);
          }}
          fontFamily="Ubuntu">
          I consent to TalentZoom’s{' '}
          <a
            style={{ color: '#1A75D1', textDecoration: 'underline' }}
            target="_blank"
            href="/privacy">
            Privacy Policy
          </a>
          ,
        </Checkbox>
      </Box>

      {errorTerms === false ? (
        <> </>
      ) : (
        <Box w={['70%', '90%', '90%', '90%']} ml={5} mt={3}>
          <Box className={styles.subTitleError}>
            Please accept the TalentZoom’s Terms, Conditions & Policies
          </Box>
        </Box>
      )}

      <Box w={100} ml={[0, 5, 5, 5]} mt={10}>
        <ThemeProvider theme={theme}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={goNextPage}
            width="full"
            mt={4}
            style={{ textTransform: 'none', fontFamily: 'Ubuntu' }}>
            Next
          </Button>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default Step3;
