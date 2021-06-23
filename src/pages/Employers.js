import React, { Component } from 'react';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';
import { LeadSpace, FeatureCardBlockLarge, LinkWithIcon } from '@carbon/ibmdotcom-react';
import { ArrowRight20, CheckmarkOutline24 } from '@carbon/icons-react';

class Employers extends Component {

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

    // ADD copy to the job description card block
    var card =  document.querySelector('.th--featured-second-job-description');
        console.log(card);
  }

  render() {
    return (
      <>
        <Navbar />

        <LeadSpace 
          theme="g100"
          title={this.state.employers.leadspace.title}
          copy={this.state.employers.leadspace.subtitle}
          gradient={true}
          buttons={[
            {
              copy: this.state.employers.leadspace.cta_primary.text,
              renderIcon: ArrowRight20,
              iconDescription: 'arrow right',
              href: this.state.employers.leadspace.cta_primary.href,
              className: 'th--btn-first'
            },
            {
              copy: this.state.employers.leadspace.cta_secondary.text,
              renderIcon: ArrowRight20,
              iconDescription: 'arrow right',
              href: this.state.employers.leadspace.cta_secondary.href,
              className: 'th--btn-second'
            },
          ]}
          image={{
            sources: [
              { src: this.state.employers.leadspace.background_image.small, breakpoint: 'sm' },
              { src: this.state.employers.leadspace.background_image.medium, breakpoint: 'md' },
            ],
            defaultSrc: this.state.employers.leadspace.background_image.large,
            alt: 'leadspace image',
          }}
        />

        <div className="th--solutions-first">
          <div className="th--solutions-background-corner"></div>
          <div className="bx--row">
            <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-8">
              <img className="th--solutions-image" src={this.state.employers.recruiting.featured_image.src} alt={this.state.employers.recruiting.featured_image.alt}></img>
            </div>
            <div className="bx--col-lg-8 bx--col-md-4">
              <h2>{this.state.employers.recruiting.title}</h2>
              <p className="th--solutions-first-subtitle">We specialize in matching Frontend, Back End, Full Stack and Mobile Engineers, as well as Product Managers and Product Owners</p>
              <div className="bx--row">
                {Object.keys(this.state.employers.recruiting.cards).map(key => 
                  <div key={key} className="bx--col-lg-8 bx--col-md-8">
                    <div className="th--solutions-title"><span>{this.state.employers.recruiting.cards[key].number}</span>{this.state.employers.recruiting.cards[key].title}</div>
                    <div className="th--solutions-paragraph">{this.state.employers.recruiting.cards[key].text}</div>
                  </div>
                )}
              </div>
            </div>
            <div className="th--solutions-flex bx--col-lg-8 bx--col-md-4 bx--col-sm-0">
              <img className="th--solutions-image" src={this.state.employers.recruiting.featured_image.src} alt={this.state.employers.recruiting.featured_image.alt}></img>
            </div>
          </div>
        </div>

        <div className="th--solutions-second">
          <div className="bx--row">
            <div className="th--solutions-flex bx--col-lg-8 bx--col-md-4">
              <img className="th--solutions-image" src={this.state.employers.flexible_hiring.featured_image.src} alt={this.state.employers.flexible_hiring.featured_image.alt}></img>
            </div>
            <div className="bx--col-lg-8 bx--col-md-4">
              <h2 className="th--solutions-second-h2-high">Flexible hiring options to accommodate an evolving and ever changing workforce</h2>
              <div className="th--solutions-paragraph th--solutions-paragraph-high">
                <p>From hiring for contract, contract to hire and full-time to determining if the position will be in office or remote, TalentZoom has you covered.</p>
                <div class="th--solutions-links th--solutions-links-inline">
                  <div class="bx--link-with-icon__container" data-autoid="dds--link-with-icon">
                    <a href="" class="bx--link bx--link-with-icon">
                      <span>Create a profile</span>
                      <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path></svg>
                      </a>
                    </div>
                    <div class="bx--link-with-icon__container" data-autoid="dds--link-with-icon">
                      <a href="/employers-faq" class="bx--link bx--link-with-icon">
                        <span>Learn more</span>
                        <svg focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M11.8 2.8L10.8 3.8 16.2 9.3 1 9.3 1 10.7 16.2 10.7 10.8 16.2 11.8 17.2 19 10z"></path></svg>
                      </a>
                    </div>
                  </div>
                <p className="th--solutions-second-high">“41.8% of the American workforce continues to work remotely.“</p>
              </div>
            </div>
          </div>
        </div>

        <div class="th--featured-second th--featured-second-job-description">
          <section class="bx--feature-card-block-large" data-autoid="dds--feature-card-block-large">
            <div class="bx--feature-card-block-large__container">
              <div class="th--featured-card bx--tile bx--tile--clickable bx--card bx--feature-card-block-large__card">
                <div class="bx--image" data-autoid="dds--image__longdescription">
                  <picture>
                    <source media="(min-width: 672px)" srcset="/images/employers-looking-ahead.jpg" />
                    <source media="(min-width: 320px)" srcset="/images/employers-looking-ahead.jpg" />
                    <img class="bx--image__img bx--card__img" src="/images/employers-looking-ahead.jpg" alt="featured image" />
                  </picture>
                </div>
                <div class="bx--card__wrapper">
                  <div class="bx--card__content">
                    <h3 class="bx--card__heading">A position is more than a job description</h3>
                    <div class="bx--card__copy">
                      <p>- TalentZoom’s algorithms are designed for results. We found that employers that add soft skills and culture fit needs to their job descriptions attract the best matched candidates.</p>
                      <p>- Review matched candidates with Transparency : Review candidates you are most interested in. View compensation expectations, tech stack, and other details up front.</p>
                      <p>- You have complete control over your hiring process with TalentZoom. We deliver candidates. You decide who you interview. You make the offer.</p>
                      <br/>
                      <p className="th--featured-second-job-description-high">“76% of hiring staff say attracting quality candidates is their biggest challenge.”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="th--solutions-third">
          <div className="th--solutions-third-background-corner"></div>
          <div className="bx--row th--solutions-third-table">
            <div className="bx--col-lg-16 bx--col-md-8">
              <h2 className="th--solutions-third-h2-high">{this.state.employers.features.title}</h2>
            </div>
            <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
              <div className="th--solutions-third-header">Pricing</div>
              <div className="th--solutions-third-content th--solutions-third-bold">Monthly price</div>
              <div className="th--solutions-third-content th--solutions-third-bold">Full time hires</div>
              <div className="th--solutions-third-content th--solutions-third-bold">Part time, contract, contract-to-hire fees</div>
              <div className="th--solutions-third-content th--solutions-third-bold">TalentZoom contract term</div>
            </div>
            <div className="bx--col-lg-4 bx--col-md-2 bx--col-sm-2">
              <div className="th--solutions-third-header">Classic</div>
              <div className="th--solutions-third-content">None</div>
              <div className="th--solutions-third-content">12% of first year salary</div>
              <div className="th--solutions-third-content">Industry leading  low cost rates</div>
              <div className="th--solutions-third-content">N/A</div>
            </div>
            <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-8 th--solutions-third-spacer"></div>
            <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-2">
              <div className="th--solutions-third-header">Pricing</div>
              <div className="th--solutions-third-content th--solutions-third-bold">Monthly price</div>
              <div className="th--solutions-third-content th--solutions-third-bold">Full time hires</div>
              <div className="th--solutions-third-content th--solutions-third-bold">Part time, contract, contract-to-hire fees</div>
              <div className="th--solutions-third-content th--solutions-third-bold">TalentZoom contract term</div>
            </div>
            <div className="bx--col-lg-4 bx--col-md-2 bx--col-sm-2">
              <div className="th--solutions-third-header">Membership</div>
              <div className="th--solutions-third-content">$499/month</div>
              <div className="th--solutions-third-content">8% of first year salary</div>
              <div className="th--solutions-third-content">Industry leading low cost rates</div>
              <div className="th--solutions-third-content">Annual</div>
            </div>
            <div className="bx--col-lg-16 bx--col-md-8 bx--col-sm-8 th--solutions-third-spacer"></div>
            <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-2">
              <div className="th--solutions-third-header">TalentZoom Inclusive Service</div>
              <div className="th--solutions-third-content th--solutions-third-bold">Candidate access to montlhy rewards program</div>
              <div className="th--solutions-third-content th--solutions-third-bold">Weekly matched candidates</div>
              <div className="th--solutions-third-content th--solutions-third-bold">Instantly populated bill rates</div>
              <div className="th--solutions-third-content th--solutions-third-bold">Ability to convert contractors at anytime</div>
              <div className="th--solutions-third-content th--solutions-third-bold">Highly engaged Job seekers</div>
              <div className="th--solutions-third-content th--solutions-third-bold">Top quality industry talent</div>
              <div className="th--solutions-third-content th--solutions-third-bold">Cutting edge customer centric platform</div>
            </div>
            <div className="bx--col-lg-4 bx--col-md-2 bx--col-sm-1">
              <div className="th--solutions-third-header">Classic</div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
            </div>
            <div className="bx--col-lg-4 bx--col-md-2 bx--col-sm-1">
              <div className="th--solutions-third-header">Membership</div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
              <div className="th--solutions-third-content"><CheckmarkOutline24 /></div>
            </div>
          </div>
        </div>

        <div className="th--solutions-second th--solutions-white">
          <div className="bx--row">
            <div className="th--solutions-flex bx--col-lg-8 bx--col-md-4">
              <img className="th--solutions-image" src={this.state.employers.transparency.featured_image.src} alt={this.state.employers.transparency.featured_image.alt}></img>
            </div>
            <div className="bx--col-lg-8 bx--col-md-4">
              <h2>{this.state.employers.transparency.title}</h2>
              <div className="th--solutions-paragraph">{this.state.employers.transparency.text}</div>
              <div className="th--solutions-links">
                {Object.keys(this.state.employers.transparency.links).map(key =>
                  <LinkWithIcon key={key} href={this.state.employers.transparency.links[key].href}>
                    <span>{this.state.employers.transparency.links[key].text}</span>
                    <ArrowRight20 />
                  </LinkWithIcon>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="th--featured-second">
          <FeatureCardBlockLarge
            className="bx--card bx--feature-card-block-large__card th--featured-card"
            eyebrow="none"
            heading={this.state.employers.looking_ahead.title}
            copy={this.state.employers.looking_ahead.text}
            cta={{
              href: '#',
            }}
            image={{
              sources: [
                { src: this.state.employers.looking_ahead.background_image.small, breakpoint: 'sm' },
                { src: this.state.employers.looking_ahead.background_image.medium, breakpoint: 'md' },
              ],
              defaultSrc: this.state.employers.looking_ahead.background_image.large,
              alt: 'featured image',
            }}
          />
          <div className="th--featured-links">
            {Object.keys(this.state.employers.looking_ahead.links).map(key =>
              <LinkWithIcon key={key} href={this.state.employers.looking_ahead.links[key].href}>
                <span>{this.state.employers.looking_ahead.links[key].text}</span>
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

export default Employers;
