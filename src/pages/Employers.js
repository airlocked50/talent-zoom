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
              <h2>{this.state.employers.flexible_hiring.title}</h2>
              <div className="th--solutions-paragraph">{this.state.employers.flexible_hiring.text}</div>
              <div className="th--solutions-links">
                {Object.keys(this.state.employers.flexible_hiring.links).map(key =>
                  <LinkWithIcon key={key} href={this.state.employers.flexible_hiring.links[key].href}>
                    <span>{this.state.employers.flexible_hiring.links[key].text}</span>
                    <ArrowRight20 />
                  </LinkWithIcon>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="th--solutions-third">
          <div className="th--solutions-third-background-corner"></div>
          <div className="bx--row">
            <div className="bx--col-lg-4 bx--col-md-4">
              <h2>{this.state.employers.features.title}</h2>
              <div className="th--solutions-paragraph">{this.state.employers.features.text}</div>
              <div className="th--solutions-links">
                {Object.keys(this.state.employers.features.links).map(key =>
                  <LinkWithIcon key={key} href={this.state.employers.features.links[key].href}>
                    <span>{this.state.employers.features.links[key].text}</span>
                    <ArrowRight20 />
                  </LinkWithIcon>
                )}
              </div>
            </div>
            <div className="bx--col-lg-4 bx--col-md-4">
              <div className="th--solutions-box">
                <ul>
                  <li>
                    <h3>{this.state.employers.features.first_card.title}</h3>
                  </li>
                  {Object.keys(this.state.employers.features.first_card.items).map(key =>
                    <li key={key}>
                      <p>{this.state.employers.features.first_card.items[key]}</p>
                      <CheckmarkOutline24 />
                    </li>
                  )}
                  <li className="th--solutions-box-end">
                    <p>{this.state.employers.features.first_card.footer}</p>
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
                    <h3>{this.state.employers.features.second_card.title}</h3>
                  </li>
                  {Object.keys(this.state.employers.features.second_card.items).map(key =>
                    <li key={key}>
                      <p>{this.state.employers.features.second_card.items[key]}</p>
                      <CheckmarkOutline24 />
                    </li>
                  )}
                  <li className="th--solutions-box-end">
                    <p>{this.state.employers.features.second_card.footer}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-8"><br/><br/></div>
            <div className="bx--col-lg-4 bx--col-md-4">
              <div className="th--solutions-box">
                <ul>
                  <li>
                    <h3>{this.state.employers.features.third_card.title}</h3>
                  </li>
                  {Object.keys(this.state.employers.features.third_card.items).map(key =>
                    <li key={key}>
                      <p>{this.state.employers.features.third_card.items[key]}</p>
                      <CheckmarkOutline24 />
                    </li>
                  )}
                  <li className="th--solutions-box-end">
                    <p>{this.state.employers.features.third_card.footer}</p>
                  </li>
                </ul>
              </div>
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
