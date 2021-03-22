import React, { Component } from 'react';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';
import { LeadSpace, FeatureCardBlockLarge, LinkWithIcon } from '@carbon/ibmdotcom-react';
import { ArrowRight20, CheckmarkOutline24 } from '@carbon/icons-react';

class Employers extends Component {

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
  }

  render() {
    return (
      <>
        <Navbar />

        <LeadSpace 
          theme="g100"
          title="Build your tech team"
          copy="Join TalentZoom’s employment marketplace and get match with top talent."
          gradient={true}
          buttons={[
            {
              copy: 'Get started',
              renderIcon: ArrowRight20,
              iconDescription: 'arrow right',
              href: '/signup',
              className: 'th--btn-first'
            },
            {
              copy: 'I’m a job seeker',
              renderIcon: ArrowRight20,
              iconDescription: 'arrow right',
              href: '/signup',
              className: 'th--btn-second'
            },
          ]}
          image={{
            defaultSrc: '/images/employers-leadspace.jpg',
            alt: 'lead space image',
          }}
        />

        <div className="th--solutions-first">
          <div className="th--solutions-background-corner"></div>
          <div className="bx--row">
            <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-8">
              <img className="th--solutions-image" src="/images/employers-recruiting.svg" alt="tridimensional blocks with persons sitting on it"></img>
            </div>
            <div className="bx--col-lg-8 bx--col-md-4">
              <h2>Recruiting tech talent, simplified</h2>
              <div className="bx--row">
                <div className="bx--col-lg-8 bx--col-md-8">
                  <div className="th--solutions-title"><span>01</span>Create your profile</div>
                  <div className="th--solutions-paragraph">Provide a company overview and submit your open positions.</div>
                </div>
                <div className="bx--col-lg-8 bx--col-md-8">
                  <div className="th--solutions-title"><span>02</span>Get matched</div>
                  <div className="th--solutions-paragraph">Our matching algorithms pair you with qualified candidates.</div>
                </div>
                <div className="bx--col-lg-8 bx--col-md-8">
                  <div className="th--solutions-title"><span>03</span>Interview top talend</div>
                  <div className="th--solutions-paragraph">Request and schedule interviews within TalentZoom's integrated digital platform.</div>
                </div>
                <div className="bx--col-lg-8 bx--col-md-8">
                  <div className="th--solutions-title"><span>04</span>Expand your team</div>
                  <div className="th--solutions-paragraph">Update your open positions in your employer profile and match with your next team members!</div>
                </div>
              </div>
            </div>
            <div className="th--solutions-flex bx--col-lg-8 bx--col-md-4 bx--col-sm-0">
              <img className="th--solutions-image" src="/images/employers-recruiting.svg" alt="tridimensional blocks with persons sitting on it"></img>
            </div>
          </div>
        </div>

        <div className="th--solutions-second">
          <div className="bx--row">
            <div className="th--solutions-flex bx--col-lg-8 bx--col-md-4">
              <img className="th--solutions-image" src="/images/employers-hiring.svg" alt="tridimensional Ts with persons sitting on it"></img>
            </div>
            <div className="bx--col-lg-8 bx--col-md-4">
              <h2>Flexible hiring options</h2>
              <div className="th--solutions-paragraph">As our world changes, so do our workplaces. Hire for contract, full-time, and remote positions with TalentZoom.</div>
              <div className="th--solutions-links">
                <LinkWithIcon href="/signup">
                  <span>Learn more</span>
                  <ArrowRight20 />
                </LinkWithIcon>
              </div>
            </div>
          </div>
        </div>

        <div className="th--solutions-third">
          <div className="th--solutions-third-background-corner"></div>
          <div className="bx--row">
            <div className="bx--col-lg-4 bx--col-md-4">
              <h2>Features</h2>
              <div className="th--solutions-paragraph">Ditch the job applications and start getting matched with top employers.</div>
              <div className="th--solutions-links">
                <LinkWithIcon href="/signup">
                  <span>Created a profile</span>
                  <ArrowRight20 />
                </LinkWithIcon>
              </div>
            </div>
            <div className="bx--col-lg-4 bx--col-md-4">
              <div className="th--solutions-box">
                <ul>
                  <li>
                    <h3>TalentZoom</h3>
                  </li>
                  <li>
                    <p>High-quality, high intent Job Seekers</p>
                    <CheckmarkOutline24 />
                  </li>
                  <li>
                    <p>AI Driven matching</p>
                    <CheckmarkOutline24 />
                  </li>
                  <li>
                    <p>Interview requests with scheduling and calendar</p>
                      <CheckmarkOutline24 />
                    </li>
                  <li>
                    <p>Automated offers</p>
                    <CheckmarkOutline24 />
                  </li>
                  <li>
                    <p>Dedicated Talent Advocate support</p>
                    <CheckmarkOutline24 />
                  </li>
                  <li>
                    <p>Employer branding</p>
                    <CheckmarkOutline24 />
                  </li>
                </ul>
              </div>
            </div>
            <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-8"><br/><br/></div>
            <div className="bx--col-lg-0 bx--col-md-8"><br/><br/></div>
            <div className="bx--col-lg-4 bx--col-md-4">
              <div className="th--solutions-box th--solutions-box-highlighted">
                <ul>
                  <li>
                    <h3>Hiring an employee?</h3>
                  </li>
                  <li>
                    <p>1% of salary monthly fee</p>
                    <CheckmarkOutline24 />
                  </li>
                  <li>
                    <p>Fee cap - 12% of salary</p>
                    <CheckmarkOutline24 />
                  </li>
                  <li>
                    <p>Payment schedule for up to 12 months*</p>
                      <CheckmarkOutline24 />
                    </li>
                  <li className="th--solutions-box-end">
                    <p>*Payments cease if the TalentZoom hire is terminated or resigns from their position before the 12 month payment period ends.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-8"><br/><br/></div>
            <div className="bx--col-lg-4 bx--col-md-4">
              <div className="th--solutions-box">
                <ul>
                  <li>
                    <h3>Hiring a contractor?</h3>
                  </li>
                  <li>
                    <p>Fixed fees of 12% based on annual compensation</p>
                    <CheckmarkOutline24 />
                  </li>
                  <li>
                    <p>Fees are set on a per hour basis</p>
                    <CheckmarkOutline24 />
                  </li>
                  <li>
                    <p>Transparent contractor pay rate</p>
                      <CheckmarkOutline24 />
                    </li>
                  <li>
                    <p>No conversions fees after 12 months of contracting*</p>
                    <CheckmarkOutline24 />
                  </li>
                  <li className="th--solutions-box-end">
                    <p>*Want to convert your contractor before the 12 month mark? We will include a sliding scale for conversion fees.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="th--solutions-second th--solutions-white">
          <div className="bx--row">
            <div className="th--solutions-flex bx--col-lg-8 bx--col-md-4">
              <img className="th--solutions-image" src="/images/employers-transparency.svg" alt="tridimensional T with a person sitting on it"></img>
            </div>
            <div className="bx--col-lg-8 bx--col-md-4">
              <h2>Hire with transparency</h2>
              <div className="th--solutions-paragraph">Apply to the candidates you're most interested in. View compensation expectations, tech stack, and other details up front.</div>
              <div className="th--solutions-links">
                <LinkWithIcon href="/signup">
                  <span>Create a profile</span>
                  <ArrowRight20 />
                </LinkWithIcon>
              </div>
            </div>
          </div>
        </div>

        <div className="th--featured-second">
          <FeatureCardBlockLarge
            className="bx--card bx--feature-card-block-large__card th--featured-card"
            eyebrow="none"
            heading="Looking ahead to a diverse and inclusive future"
            copy="Partnering with us means partnering with organizations that support our values and dedication to creating equal oportunity for everyone."
            cta={{
              href: '#',
            }}
            image={{
              defaultSrc: '/images/employers-looking-ahead.jpg',
              alt: 'lead space image',
            }}
          />
          <div className="th--featured-links">
            <LinkWithIcon href="/signup">
              <span>Get started</span>
              <ArrowRight20 />
            </LinkWithIcon>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Employers;
