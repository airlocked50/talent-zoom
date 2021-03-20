import React, { Component } from 'react';
import './App.scss';
import './App.css';

import { LeadSpace, FeatureCardBlockLarge, LinkWithIcon } from '@carbon/ibmdotcom-react';
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

class App extends Component {

  componentDidMount() {

    // REPLACE the default leadspace buttons stylesheet
    var first_button = document.querySelector('.th--btn-first')
        first_button.classList.remove("bx--btn--tertiary")
        first_button.classList.add("bx--btn--primary")
    var second_button = document.querySelector('.th--btn-second')
        second_button.classList.remove("bx--btn--primary")
        second_button.classList.add("bx--btn--tertiary")

    // REPLACE the default featured FIRST card stylesheet and link behaviors
    var current_featured = document.querySelector('.th--featured-first .th--featured-card')
    var new_featured = document.createElement('div')
        new_featured.classList.add("th--featured-card", "bx--tile", "bx--tile--clickable", "bx--card", "bx--feature-card-block-large__card")
        current_featured.parentNode.appendChild(new_featured)
        while (current_featured.childNodes.length > 0) {
          new_featured.appendChild(current_featured.childNodes[0]);
        }
        current_featured.remove()
        document.querySelector('.bx--card__eyebrow').remove()

    // ADD the links inside the FIRST card
    var current_content = document.querySelector('.th--featured-first .th--featured-card .bx--card__footer')
    var new_links = document.querySelector('.th--featured-first .th--featured-links')
        while (new_links.childNodes.length > 0) {
          current_content.appendChild(new_links.childNodes[0]);
        }

    // REPLACE the default featured SECOND card stylesheet and link behaviors
    var current_featured_2 = document.querySelector('.th--featured-second .th--featured-card')
    var new_featured_2 = document.createElement('div')
        new_featured_2.classList.add("th--featured-card", "bx--tile", "bx--tile--clickable", "bx--card", "bx--feature-card-block-large__card")
        current_featured_2.parentNode.appendChild(new_featured_2)
        while (current_featured_2.childNodes.length > 0) {
          new_featured_2.appendChild(current_featured_2.childNodes[0]);
        }
        current_featured_2.remove()
        document.querySelector('.bx--card__eyebrow').remove()

    // ADD the links inside the SECOND card
    var current_content_2 = document.querySelector('.th--featured-second .th--featured-card .bx--card__footer')
    var new_links_2 = document.querySelector('.th--featured-second .th--featured-links')
        while (new_links_2.childNodes.length > 0) {
          current_content_2.appendChild(new_links_2.childNodes[0]);
        }

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
                  <a href="/">Job seeker</a>
                  <a href="/employer">Employers</a>
                  <a href="/aboutus">About us</a>
                  <a href="/login">Login</a>
                  <Button href="/signup" as="button" renderIcon={ArrowRight20} role="button">Sign up</Button>
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
                  <SideNavMenuItem href="/">Job seeker</SideNavMenuItem>
                  <SideNavMenuItem href="/employer">Employers</SideNavMenuItem>
                  <SideNavMenuItem href="/aboutus">About us</SideNavMenuItem>
                  <SideNavMenuItem href="/login">Login</SideNavMenuItem>
                  <SideNavMenuItem href="/signup">Sign up</SideNavMenuItem>
                </SideNavItems>
              </SideNav>
            </Header>
          </>
        )} />

        <LeadSpace type="default"
          theme="g100"
          title="Get matched with your dream job"
          copy="Ditch the job applications and start getting matched with top employers."
          gradient={true}
          buttons={[
            {
              copy: 'I’m ready to be matched',
              renderIcon: ArrowRight20,
              href: '/signup',
              className: 'th--btn-first'
            },
            {
              copy: 'I’m hiring',
              renderIcon: ArrowRight20,
              href: '/signup',
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

        <div class="th--featured-first">
          <FeatureCardBlockLarge
            className="bx--card bx--feature-card-block-large__card th--featured-card"
            eyebrow="none"
            heading="Want to work remote?"
            copy="As workplaces evolve, so do we. Discover remote, contract, and full time employment opportunities."
            cta={{
              href: '#',
            }}
            image={{
              defaultSrc: '/images/app-work-remote.jpg',
              alt: 'lead space image',
            }}
          />
          <div class="th--featured-links">
            <LinkWithIcon href="/signup">
              <span>Create a profile</span>
              <ArrowRight20 />
            </LinkWithIcon>
            <LinkWithIcon href="faqjobseeker">
              <span>Learn more</span>
              <ArrowRight20 />
            </LinkWithIcon>
          </div>
        </div>

        <div class="th--featured-second">
          <FeatureCardBlockLarge
            className="bx--card bx--feature-card-block-large__card th--featured-card"
            eyebrow="none"
            heading="You're in full control"
            copy="Receive interview requests directly from companies that fit your needs. We’ll be sure to block your profile from current and requested employers."
            cta={{
              href: '#',
            }}
            image={{
              defaultSrc: '/images/app-full-control.jpg',
              alt: 'lead space image',
            }}
          />
          <div class="th--featured-links">
            <LinkWithIcon href="/signup">
              <span>Sign up to get matched</span>
              <ArrowRight20 />
            </LinkWithIcon>
          </div>
        </div>
        
      </>
    );
  }
}

export default App;
