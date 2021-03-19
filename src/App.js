import React, { Component } from 'react';
import './App.scss';
import './App.css';

import { LeadSpace, FeatureCardBlockLarge } from '@carbon/ibmdotcom-react';
import { Button } from 'carbon-components-react';
import { ArrowRight20, Fade16, Menu32 } from '@carbon/icons-react';

import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import {
  Header,
  HeaderGlobalBar,
  SideNav,
  SideNavItems,
  SideNavMenuItem
} from "carbon-components-react/lib/components/UIShell";

class App extends Component {

  componentDidMount() {

    // REPLACE the default leadspace button class
    var first_button = document.querySelector('.th--btn-first')
        first_button.classList.remove("bx--btn--tertiary")
        first_button.classList.add("bx--btn--primary")
    var second_button = document.querySelector('.th--btn-second')
        second_button.classList.remove("bx--btn--primary")
        second_button.classList.add("bx--btn--tertiary")

    // document.querySelector('.bx--leadspace--content__container').classList.add("bx--grid")

        

    console.log(document.querySelector('.bx--btn.bx--btn--tertiary'));
  }

  render() {
    return (
      <>

        <HeaderContainer render={({ isSideNavExpanded, onClickSideNavExpand }) => (
            <>
              <Header aria-label="IBM Platform Name">

                <a href="/" class="th--nav-logo">
                  <img src="/images/logo.svg" alt="Talent Zoom" />
                </a>

                <HeaderGlobalBar>

                  <div class="th--nav-links">
                    <a href="/">Job Seeker</a>
                    <a href="/">Employers</a>
                    <a href="/">About Us</a>
                    <a href="/">Login</a>
                    <Button as="button" renderIcon={ArrowRight20} role="button">Sign Up</Button>
                  </div>

                  <Button 
                    hasIconOnly 
                    kind="ghost" 
                    className="th--nav-menu"
                    onClick={onClickSideNavExpand} 
                    isActive={isSideNavExpanded} 
                    renderIcon={Menu32} 
                  />

                </HeaderGlobalBar>

                <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                  <SideNavItems>
                    <SideNavMenuItem href="javascript:void(0)">Job Seeker</SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">Employers</SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">About Us</SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">Login</SideNavMenuItem>
                    <SideNavMenuItem href="javascript:void(0)">Sign Up</SideNavMenuItem>
                  </SideNavItems>
                </SideNav>

              </Header>
            </>
          )}
        />

        <LeadSpace
          type="default"
          theme="g100"
          title="Get matched with your dream job"
          copy="Ditch the job applications and start getting matched with top employers."
          gradient={true}
          buttons={[
            {
              copy: 'I’m ready to be matched',
              renderIcon: ArrowRight20,
              href: 'https://www.example.com',
              className: 'th--btn-first'
            },
            {
              copy: 'I’m hiring',
              renderIcon: ArrowRight20,
              href: 'https://www.example.com',
              className: 'th--btn-second'
            },
          ]}
          image={{
            sources: [
              { src: '/images/app-leadspace.jpg', breakpoint: 'sm' },
              { src: '/images/app-leadspace.jpg', breakpoint: 'md' },
            ],
            defaultSrc: '/images/app-leadspace.jpg',
            alt: 'lead space image',
          }}
        />

        {/* <div class="bx--grid">
          <FeatureCardBlockLarge
            eyebrow="hello"
            heading="Want to work remote?"
            copy="As workplaces evolve, so do we. Discover remote, contract, and full time employment opportunities."
            cta="#"
            image={{
              defaultSrc: '/images/app-work-remote.jpg',
              alt: 'lead space image',
            }}
          />
        </div> */}
        
      </>
    );
  }
}

export default App;
