import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../redux/actions/userAction';
import Button from '@material-ui/core/Button';
import { Button as CarbonButton } from 'carbon-components-react';
import { ArrowRight20, Menu32 } from '@carbon/icons-react';
import { blue, purple } from '@material-ui/core/colors';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  logoContainer: {
    paddingLeft: 8,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: '400',
    fontFamily: 'Ubuntu',
    '&:focus, &:hover, &:visited, &:link, &:active': {
      color: 'black',
      backgroundColor: 'transparent',
    },
  },
  buttonFind: {
    marginRight: 36,
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: '400',
    fontFamily: 'Ubuntu',
    whiteSpace: 'break-spaces',
    '&:hover': {
      color: 'black',
      backgroundColor: 'transparent',
    },
  },
  title: {
    display: 'none',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Navigation({ history }) {
  const classes = useStyles();
  // const history = useHistory();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [logOuts, setLogOuts] = React.useState(false);
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
  }, [userData]);

  const logOut = async () => {
    await localStorage.setItem('userInformations', null);
    await dispatch(setUserData(null));
    setLogOuts(!logOuts);
    history.push('/');
  };

  const goProfile = () => {
    if (user !== null) {
      if (user.type === 1) {
        history.push({
          pathname: `/talentProfile`,
          search: `?id=${user ? user._id : null}`,
        });
      } else {
        history.push({
          pathname: `/companyProfile`,
          search: `?id=${user ? user._id : null}`,
        });
      }
    }
    return '/';
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderNav = () => {
    if (!user) {
      return (
        <div>
          <Button className={classes.button} href="/" color="inherit">
            Job seeker
          </Button>
          <Button className={classes.button} href="/employer" color="inherit">
            Employers
          </Button>
          <Button className={classes.button} href="/aboutus" color="inherit">
            About Us
          </Button>
          <Button className={classes.button} href="/login" color="inherit">
            Login
          </Button>

          <CarbonButton
            onClick={() => history.push('/signUp')}
            as="button"
            iconDescription="arrow right"
            renderIcon={ArrowRight20}
            role="button">
            Sign up
          </CarbonButton>
        </div>
      );
    } else {
      return (
        <>
          <Button className={classes.button} href="/" color="inherit">
            Job seeker
          </Button>
          <Button className={classes.button} href="/employer" color="inherit">
            Employers
          </Button>
          <Button className={classes.button} href="/aboutus" color="inherit">
            About Us
          </Button>
          {user.type === 0 ? (
            <Button
              className={classes.button}
              href="/companyInbox"
              color="inherit">
              Inbox
            </Button>
          ) : (
            <Button
              className={classes.button}
              href="/talentInbox"
              color="inherit">
              Inbox
            </Button>
          )}
          <Button className={classes.button} href={user !== null ? (user.type === 1 ? `/talentProfile?id=${user ? user._id : null}` : `/companyProfile?id=${user ? user._id : null}`) : "/"} color="inherit">
            {`${user ? user.name : null} ${user ? user.surname : ''}`}
          </Button>
          <Button className={classes.button} onClick={logOut} color="inherit">
            Logout
          </Button>
        </>
      );
    }
  };

  const renderNavMobile = () => {
    if (!user) {
      return (
        <div>
          <MenuItem>
            <Button className={classes.button} href="/" color="inherit">
              Job seeker
            </Button>
          </MenuItem>
          <MenuItem>
            <Button className={classes.button} href="/employer" color="inherit">
              Employers
            </Button>
          </MenuItem>
          <MenuItem>
            <Button className={classes.button} href="/aboutus" color="inherit">
              About Us
            </Button>
          </MenuItem>
          <MenuItem>
            <Button className={classes.button} href="/login" color="inherit">
              Login
            </Button>
          </MenuItem>
          <MenuItem>
            <CarbonButton
              onClick={() => history.push('/signUp')}
              as="button"
              iconDescription="arrow right"
              renderIcon={ArrowRight20}
              role="button">
              Sign up
            </CarbonButton>
          </MenuItem>
        </div>
      );
    } else {
      return (
        <div>
          <MenuItem>
            <Button className={classes.button} href="/" color="inherit">
              Job seeker
            </Button>
          </MenuItem>
          <MenuItem>
            <Button className={classes.button} href="/employer" color="inherit">
              Employers
            </Button>
          </MenuItem>
          <MenuItem>
            <Button className={classes.button} href="/aboutus" color="inherit">
              About Us
            </Button>
          </MenuItem>
          <MenuItem>
            {user.type === 0 ? (
              <Button
                className={classes.button}
                href="/companyInbox"
                color="inherit">
                Inbox
              </Button>
            ) : (
              <Button
                className={classes.button}
                href="/talentInbox"
                color="inherit">
                Inbox
              </Button>
            )}
          </MenuItem>
          <MenuItem>
            <Button 
            className={classes.button} 
            href={user !== null ? (user.type === 1 ? `/talentProfile?id=${user ? user._id : null}` : `/companyProfile?id=${user ? user._id : null}`) : "/"} 
            color="inherit">
              {`${user ? user.name : null} ${user ? user.surname : ''}`}
            </Button>
          </MenuItem>
          <MenuItem>
            <Button className={classes.button} onClick={logOut} color="inherit">
              Logout
            </Button>
          </MenuItem>
        </div>
      );
    }
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      {renderNavMobile()}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar color="white" position="static">
        <Toolbar>
          <div className={classes.logoContainer}>
            <svg width="150" height="50" xmlns="http://www.w3.org/2000/svg">
              <a href="/">
                <image href="/tz-logo-nav.svg" height="50" width="150" />
              </a>
            </svg>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>{renderNav()}</div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
