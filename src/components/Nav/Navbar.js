import { Button } from 'carbon-components-react';
import React, { useEffect } from 'react';
import { ArrowRight20, Menu32, Close32 } from '@carbon/icons-react';
import HeaderContainer from 'carbon-components-react/lib/components/UIShell/HeaderContainer';
import {
  Header,
  HeaderGlobalBar,
  SideNav,
  SideNavItems,
  SideNavMenuItem,
} from 'carbon-components-react/lib/components/UIShell';

import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../../redux/actions/userAction';
import { useHistory } from 'react-router-dom';
import '../../index.css';
import '../../index.scss';

const Navbar = () => {
  const history = useHistory();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [logOuts, setLogOuts] = React.useState(false);
  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.user);
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
  };

  const renderNav = () => {
    if (!user) {
      return (
        <>
          <a href="/">Job seekers</a>
          <a href="/employers">Employers</a>
          <a href="/about-us">About us</a>
          <a href="/login">Log in</a>
          <a href="/signup">
            <Button
              as="button"
              iconDescription="arrow right"
              renderIcon={ArrowRight20}
              role="button">
              Sign up
            </Button>
          </a>
        </>
      );
    } else {
      return (
        <>
          <a href="/">Job seekers</a>
          <a href="/employers">Employers</a>
          <a href="/about-us">About us</a>

          {user.type === 0 ? (
            <a href="/companyInbox">Inbox</a>
          ) : (
            <a href="/talentInbox">Inbox</a>
          )}

          <a
            href={
              user !== null
                ? user.type === 1
                  ? `/talentProfile?id=${user ? user._id : null}`
                  : `/companyProfile?id=${user ? user._id : null}`
                : '/'
            }>{`${user ? user.name : null} ${user ? user.surname : ''}`}</a>
          <a
            style={{ cursor: 'pointer' }}
            href="/"
            onClick={logOut}
            color="inherit">
            Logout
          </a>
        </>
      );
    }
  };
  const renderNavMobile = () => {
    if (!user) {
      return (
        <>
          <SideNavItems>
            <SideNavMenuItem href="/">Job seekers</SideNavMenuItem>
            <SideNavMenuItem href="/employers">Employers</SideNavMenuItem>
            <SideNavMenuItem href="/about-us">About us</SideNavMenuItem>
            <SideNavMenuItem href="/login">Log in</SideNavMenuItem>
            <SideNavMenuItem href="/signup">Sign up</SideNavMenuItem>
          </SideNavItems>
        </>
      );
    } else {
      return (
        <>
          <SideNavItems>
            <SideNavMenuItem href="/">Job seekers</SideNavMenuItem>
            <SideNavMenuItem href="/employers">Employers</SideNavMenuItem>
            <SideNavMenuItem href="/about-us">About us</SideNavMenuItem>
            {user.type === 0 ? (
              <SideNavMenuItem href="/companyInbox">Inbox</SideNavMenuItem>
            ) : (
              <SideNavMenuItem href="/talentInbox">Inbox</SideNavMenuItem>
            )}

            <SideNavMenuItem
              href={
                user !== null
                  ? user.type === 1
                    ? `/talentProfile?id=${user ? user._id : null}`
                    : `/companyProfile?id=${user ? user._id : null}`
                  : '/'
              }>
              {' '}
              {`${user ? user.name : null} ${user ? user.surname : ''}`}
            </SideNavMenuItem>
            <SideNavMenuItem href="/" onClick={logOut}>
              Logout
            </SideNavMenuItem>
          </SideNavItems>
        </>
      );
    }
  };

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="IBM Platform Name">
            <a href="/" className="th--nav-logo">
              <img src="/images/logo.svg" alt="TalentZoom" />
            </a>
            <HeaderGlobalBar>
              <div className="th--nav-links">{renderNav()}</div>
              <Button
                hasIconOnly
                kind="ghost"
                className="th--nav-menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded.toString()}
                renderIcon={isSideNavExpanded === true ? Close32 : Menu32}
                
              />
            </HeaderGlobalBar>
            <SideNav
              aria-label="Side navigation"
              isPersistent={false}
              expanded={isSideNavExpanded}>
              {renderNavMobile()}
            </SideNav>
          </Header>
        </>
      )}
    />
  );
};

export default Navbar;
