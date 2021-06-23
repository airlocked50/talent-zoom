import React, { Component } from 'react';
import { LeadSpace, FeatureCardBlockLarge, LinkWithIcon } from '@carbon/ibmdotcom-react';
import { ArrowRight20 } from '@carbon/icons-react';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = JSON.parse(this.props.json);
  }

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

    var remote = document.querySelector(".th--featured-first-remotes");
    var remote_place = document.querySelector(".th--featured-first-remotes-place .bx--card__content");
        remote_place.appendChild(remote);

  }

  render() {
    return (
      <>
        <Navbar />

        <LeadSpace 
          theme="g100"
          title={this.state.home.leadspace.title}
          copy={this.state.home.leadspace.subtitle}
          gradient={true}
          buttons={[
            {
              copy: this.state.home.leadspace.cta_primary.text,
              renderIcon: ArrowRight20,
              iconDescription: 'arrow right',
              href: this.state.home.leadspace.cta_primary.href,
              className: 'th--btn-first'
            },
            {
              copy: this.state.home.leadspace.cta_secondary.text,
              renderIcon: ArrowRight20,
              iconDescription: 'arrow right',
              href: this.state.home.leadspace.cta_secondary.href,
              className: 'th--btn-second'
            },
          ]}
          image={{
            sources: [
              { src: this.state.home.leadspace.background_image.small, breakpoint: 'sm' },
              { src: this.state.home.leadspace.background_image.medium, breakpoint: 'md' },
            ],
            defaultSrc: this.state.home.leadspace.background_image.large,
            alt: 'leadspace image',
          }}
        />

        <div className="th--solutions-first">
          <div className="bx--row">
            <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-8">
              <img className="th--solutions-image" src={this.state.home.job_seeking.featured_image.src} alt={this.state.home.job_seeking.featured_image.alt}></img>
            </div>
            <div className="bx--col-lg-8 bx--col-md-4">
              <h2>{this.state.home.job_seeking.title}</h2>
              <p className="th--solutions-first-subtitle">For Frontend, Back End, Full Stack and Mobile Engineers, as well as Product Managers and Product Owners</p>
              <div className="bx--row">
                {Object.keys(this.state.home.job_seeking.cards).map(key => 
                  <div key={key} className="bx--col-lg-8 bx--col-md-8">
                    <div className="th--solutions-title"><span>{this.state.home.job_seeking.cards[key].number}</span>{this.state.home.job_seeking.cards[key].title}</div>
                    <div className="th--solutions-paragraph">{this.state.home.job_seeking.cards[key].text}</div>
                  </div>
                )}
              </div>
            </div>
            <div className="th--solutions-flex bx--col-lg-8 bx--col-md-4 bx--col-sm-0">
              <img className="th--solutions-image" src={this.state.home.job_seeking.featured_image.src} alt={this.state.home.job_seeking.featured_image.alt}></img>
            </div>
          </div>
        </div>

        <div className="th--solutions-second">
          <div className="th--solutions-background"></div>
          <div className="bx--row">
            <div className="th--solutions-flex bx--col-lg-8 bx--col-md-4">
              <img className="th--solutions-image" src={this.state.home.join_team.featured_image.src} alt={this.state.home.join_team.featured_image.alt}></img>
            </div>
            <div className="bx--col-lg-8 bx--col-md-4">
              <h2>Join a team you love, and a Community that thrives</h2>
              <h3>Team you'll love</h3>
              <div className="th--solutions-paragraph th--solutions-paragraph-small">We partner with Employers dedicated to positive work culture.</div>
              <div class="th--solutions-links th--solutions-links-bottom">
                <div class="bx--link-with-icon__container" data-autoid="dds--link-with-icon">
                  <a href="/signup" class="bx--link bx--link-with-icon">
                    <span>Sign up to get matched</span>
                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <h3>Got hired?</h3>
              <div className="th--solutions-paragraph th--solutions-paragraph-italic">What will you do with your $500 signing bonus?</div>
              <div className="th--solutions-paragraph th--solutions-paragraph-item"><span>-</span> Live your best life, you deserve it: Revamp your workspace, 	  pickup swag, or enjoy it  with friends and family.</div>
              <div className="th--solutions-paragraph th--solutions-paragraph-italic">Tech Talent Rewards</div>
              <div className="th--solutions-paragraph th--solutions-paragraph-item"><span>-</span> TZ Tech Talent community members receive monthly rewards.</div>
              <div className="th--solutions-paragraph th--solutions-paragraph-item"><span>-</span> Exclusive insight to tech industry specific trends and team culture competence.</div>
              <div className="th--solutions-paragraph th--solutions-paragraph-item"><span>-</span> We’ll hook you up with gift cards to places you love and services you’ll use, like Starbucks, Uber and so much more.</div>
              <h3>Have a friend who codes?</h3>
              <div className="th--solutions-paragraph th--solutions-paragraph-italic">TZ Refer a friend Bonus</div>
              <div className="th--solutions-paragraph th--solutions-paragraph-item"><span>-</span> TalentZoom compensates $300 for any referral who signs up and gets hired!</div>
              <div class="th--solutions-links th--solutions-links-bottom">
                <div class="bx--link-with-icon__container" data-autoid="dds--link-with-icon">
                  <a href="/contact" class="bx--link bx--link-with-icon">
                    <span>Email us</span>
                    <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
        </div>

        <div className="th--featured-first th--featured-first-remotes-place">
          <FeatureCardBlockLarge
            className="bx--card bx--feature-card-block-large__card th--featured-card"
            eyebrow="none"
            heading={this.state.home.work_remote.title}
            copy="TalentZoom's sophisticated network removes geographical barriers so you can work anywhere, for anyone around the globe."
            cta={{
              href: '#',
            }}
            image={{
              sources: [
                { src: this.state.home.work_remote.background_image.small, breakpoint: 'sm' },
                { src: this.state.home.work_remote.background_image.medium, breakpoint: 'md' },
              ],
              defaultSrc: this.state.home.work_remote.background_image.large,
              alt: 'featured image',
            }}
          />
          <p class="th--solutions-second-high th--featured-first-remotes">“The number of remote workers in the next five years is expected to be nearly double what it was before COVID-19: By 2025, 36.2 million Americans will be remote, an increase of 16.8 million people from pre-pandemic rates.”</p>
          <div className="th--featured-links">
            {Object.keys(this.state.home.work_remote.links).map(key =>
              <LinkWithIcon key={key} href={this.state.home.work_remote.links[key].href}>
                <span>{this.state.home.work_remote.links[key].text}</span>
                <ArrowRight20 />
              </LinkWithIcon>
            )}
          </div>
        </div>

        <div className="th--featured-second">
          <FeatureCardBlockLarge
            className="bx--card bx--feature-card-block-large__card th--featured-card"
            eyebrow="none"
            heading={this.state.home.full_control.title}
            copy={this.state.home.full_control.text}
            cta={{
              href: '#',
            }}
            image={{
              sources: [
                { src: this.state.home.full_control.background_image.small, breakpoint: 'sm' },
                { src: this.state.home.full_control.background_image.medium, breakpoint: 'md' },
              ],
              defaultSrc: this.state.home.full_control.background_image.large,
              alt: 'featured image',
            }}
          />
          <div className="th--featured-links">
            {Object.keys(this.state.home.full_control.links).map(key =>
              <LinkWithIcon key={key} href={this.state.home.full_control.links[key].href}>
                <span>{this.state.home.full_control.links[key].text}</span>
                <ArrowRight20 />
              </LinkWithIcon>
            )}
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Home;
