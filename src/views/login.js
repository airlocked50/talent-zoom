import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import '../components/sign.css';
import LoginTalentForm from '../components/LoginForm/LoginTalentForm';
import LoginCompanyForm from '../components/LoginForm/LoginCompanyForm';
import Footer from '../components/Nav/footer';
import { useLocation } from 'react-router-dom';

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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
  deneme: {
    display: "flex",
    justifyContent: "center",
  }
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

function Login() {
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
      <div className={'cont'}>
        <Box
          w={[430, 350, 450, 450]}
          h={[620, 400, 450, 450]}
          mt={[20, 20, 20, 20]}
          mb={[4, 10, 5, 5]}
          pt={5}
          boxShadow={'0 2px 2px 0 rgba(0,0,0,0.2)'}
          bgColor={'white'}>
          <div
            style={{ padding: 20, paddingTop: 30, backgroundColor: 'white', textAlign: 'center' }}>
            <Typography
              variant="h4"
              style={{
                fontSize: '2rem',
                fontWeight: '400',
                fontFamily: 'Ubuntu',
              }}>
              Log in
            </Typography>
          </div>

          <div className={classes.root}>
            <div className={classes.demo2}>
              <div className={classes.deneme}>
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
                  <LoginTalentForm />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <LoginCompanyForm />
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

export default Login;
/*
 */
