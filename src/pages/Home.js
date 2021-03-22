import React, { Component } from 'react';
import { LeadSpace, FeatureCardBlockLarge, LinkWithIcon } from '@carbon/ibmdotcom-react';
import { ArrowRight20 } from '@carbon/icons-react';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';
import './Home.scss';
import './Home.css';

class Home extends Component {

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
        <Navbar />

        <LeadSpace 
          theme="g100"
          title="Get matched with your dream job"
          copy="Ditch the job applications and start getting matched with top employers."
          gradient={true}
          buttons={[
            {
              copy: 'I’m ready to be matched',
              renderIcon: ArrowRight20,
              iconDescription: 'arrow right',
              href: '/signup',
              className: 'th--btn-first'
            },
            {
              copy: 'I’m hiring',
              renderIcon: ArrowRight20,
              iconDescription: 'arrow right',
              href: '/signup',
              className: 'th--btn-second'
            },
          ]}
          image={{
            sources: [
              { src: '/images/home-leadspace.jpg', breakpoint: 'sm' },
              { src: '/images/home-leadspace.jpg', breakpoint: 'md' },
            ],
            defaultSrc: '/images/home-leadspace.jpg',
            alt: 'lead space image',
          }}
        />

        <div className="th--solutions-first">
          <div className="bx--row">
            <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-8">
              <img className="th--solutions-image" src="/images/home-seeking-simplified.svg" alt="tridimensional Ts attached to each other"></img>
            </div>
            <div className="bx--col-lg-8 bx--col-md-4">
              <h2>Joob seeking, simplified</h2>
              <div className="bx--row">
                <div className="bx--col-lg-8 bx--col-md-8">
                  <div className="th--solutions-title"><span>01</span>Create a profile</div>
                  <div className="th--solutions-paragraph">Sign up and tell us what matters to you – from location preferences to compensation expectations.</div>
                </div>
                <div className="bx--col-lg-8 bx--col-md-8">
                  <div className="th--solutions-title"><span>02</span>Get matched</div>
                  <div className="th--solutions-paragraph">We’ll take it from here. Match with top employers and get alerted when companies request to interview you!</div>
                </div>
                <div className="bx--col-lg-8 bx--col-md-8">
                  <div className="th--solutions-title"><span>03</span>Meet your dedicated Talent Advocate</div>
                  <div className="th--solutions-paragraph">Our Talent Advocates are here to support you throughout the interview and hiring process.</div>
                </div>
                <div className="bx--col-lg-8 bx--col-md-8">
                  <div className="th--solutions-title"><span>04</span>Get hired</div>
                  <div className="th--solutions-paragraph">Nailed the interview? Receive an offer letter, a contract to sign, and a signing bonus!</div>
                </div>
              </div>
            </div>
            <div className="th--solutions-flex bx--col-lg-8 bx--col-md-4 bx--col-sm-0">
              <img className="th--solutions-image" src="/images/home-seeking-simplified.svg" alt="tridimensional Ts attached to each other"></img>
            </div>
          </div>
        </div>

        <div className="th--solutions-second">
          <div className="th--solutions-background"></div>
          <div className="bx--row">
            <div className="th--solutions-flex bx--col-lg-8 bx--col-md-4">
              <img className="th--solutions-image" src="/images/home-join-team.svg" alt="tridimensional Ts with persons sitting on it"></img>
            </div>
            <div className="bx--col-lg-8 bx--col-md-4">
              <h2>Join a team you love</h2>
              <div className="th--solutions-paragraph">Get qualified by our Tech-Out team to match with your ideal company and find the perfect fit.</div>
              <div className="th--solutions-links">
                <LinkWithIcon href="/signup">
                  <span>Sign up to get matched</span>
                  <ArrowRight20 />
                </LinkWithIcon>
                <LinkWithIcon href="/employers">
                  <span>Hiring? Build your team</span>
                  <ArrowRight20 />
                </LinkWithIcon>
              </div>
            </div>
          </div>
        </div>

        <div className="th--featured-first">
          <FeatureCardBlockLarge
            className="bx--card bx--feature-card-block-large__card th--featured-card"
            eyebrow="none"
            heading="Want to work remote?"
            copy="As workplaces evolve, so do we. Discover remote, contract, and full time employment opportunities."
            cta={{
              href: '#',
            }}
            image={{
              defaultSrc: '/images/home-work-remote.jpg',
              alt: 'lead space image',
            }}
          />
          <div className="th--featured-links">
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

        <div className="th--featured-second">
          <FeatureCardBlockLarge
            className="bx--card bx--feature-card-block-large__card th--featured-card"
            eyebrow="none"
            heading="You're in full control"
            copy="Receive interview requests directly from companies that fit your needs. We’ll be sure to block your profile from current and requested employers."
            cta={{
              href: '#',
            }}
            image={{
              defaultSrc: '/images/home-full-control.jpg',
              alt: 'lead space image',
            }}
          />
          <div className="th--featured-links">
            <LinkWithIcon href="/signup">
              <span>Sign up to get matched</span>
              <ArrowRight20 />
            </LinkWithIcon>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Home;
