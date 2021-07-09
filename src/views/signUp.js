import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import SignUpFormTalent from '../components/SignUpForm/SignUpFormTalent';
import SignUpFormCompany from '../components/SignUpForm/SignUpFormCompany';
import '../components/sign.css';
import Footer from '../components/Nav/footer';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#FFFFFF',
  },
}));

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      width: '100%',
      backgroundColor: '#2097f5',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: 'black',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
      color: '#2097f5',
    },
  },
}))(props => <Tab {...props} />);

function SignUpTalent() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const location = useLocation();

  useEffect(() => {
    window.dataLayer.push({
      event: 'pageview'
    })
    if (location.state !== undefined || null) {
      setValue(location.state);
    }
    if (location.hash == '#employers') {
      setValue(1);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div>
      <div className={'signContainer'}>
        <Box
          w={[450, 450, 450, 450]}
          pb={10}
          pt={5}
          mt={[10, 20, 20, 20]}
          mb={[0, 0, 10, 10]}
          boxShadow={'0 2px 2px 0 rgba(0,0,0,0.2)'}
          bgColor={'white'}>
          <div style={{ padding: 20, paddingTop: 30, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column' }}>
            {value === 0 ? (
              <Box
                variant="h4"
                style={{
                  marginBottom: 10,
                  fontSize: '2rem',
                  fontWeight: '400',
                  fontFamily: 'Ubuntu',
                  textAlign: "center",
                }}>
                Join TalentZoom
              </Box>
            ) : (
              <Box
                w={['70%','90%','90%','90%']}
                variant="h4"
                style={{
                  marginBottom: 10,
                  fontSize: '2rem',
                  fontWeight: '400',
                  fontFamily: 'Ubuntu',
                  textAlign: "center",
                }}>
                Create Your Company Profile
              </Box>
            )}

            <Box w={[300, 400, 400, 400]}>
              {value === 0 ? (
                <Typography
                  variant="body1"
                  style={{
                    fontSize: '1rem',
                    fontWeight: '400',
                    fontFamily: 'Ubuntu',
                    textAlign: "center",
                  }}>
                  Create a free TalentZoom profile and let companies apply
                  directly to you.
                </Typography>
              ) : (
                <Typography
                  variant="body1"
                  style={{
                    fontSize: '1rem',
                    fontWeight: '400',
                    fontFamily: 'Ubuntu',
                    textAlign: "center",
                  }}>
                  Create a TalentZoom profile and get matched with top talent.
                </Typography>
              )}
            </Box>
          </div>

          <div className={classes.root}>
            <div className={classes.demo2}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <StyledTabs value={value} onChange={handleChange}>
                  <StyledTab label="Job seekers" />
                  <StyledTab label="Employers" />
                </StyledTabs>
              </div>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}>
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <SignUpFormTalent />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <SignUpFormCompany />
                </TabPanel>
              </SwipeableViews>
            </div>
          </div>
        </Box>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpTalent;
/*
 */
