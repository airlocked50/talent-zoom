import './Navbar.css';
import { Button } from 'carbon-components-react';
import { ArrowRight20, Menu32 } from '@carbon/icons-react';
import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import {
  Header,
  HeaderGlobalBar,
  SideNav,
  SideNavItems,
  SideNavMenuItem
} from "carbon-components-react/lib/components/UIShell";

const Navbar = () => {
  return (
    <HeaderContainer render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <>
        <Header aria-label="IBM Platform Name">
          <a href="/" className="th--nav-logo">
            <img src="/images/logo.svg" alt="TalentZoom" />
          </a>
          <HeaderGlobalBar>
            <div className="th--nav-links">
              <a href="/">Job seekers</a>
              <a href="/employers">Employers</a>
              <a href="/aboutus">About us</a>
              <a href="/login">Login</a>
              <Button href="/signup" as="button" iconDescription="arrow right" renderIcon={ArrowRight20} role="button">Sign up</Button>
            </div>
            <Button 
              hasIconOnly 
              kind="ghost" 
              className="th--nav-menu"
              onClick={onClickSideNavExpand} 
              isactive={isSideNavExpanded.toString()} 
              renderIcon={Menu32} 
              iconDescription="menu"
            />
          </HeaderGlobalBar>
          <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
            <SideNavItems>
              <SideNavMenuItem href="/">Job seekers</SideNavMenuItem>
              <SideNavMenuItem href="/employers">Employers</SideNavMenuItem>
              <SideNavMenuItem href="/aboutus">About us</SideNavMenuItem>
              <SideNavMenuItem href="/login">Login</SideNavMenuItem>
              <SideNavMenuItem href="/signup">Sign up</SideNavMenuItem>
            </SideNavItems>
          </SideNav>
        </Header>
      </>
    )} />
  )
}

export default Navbar;