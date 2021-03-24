import React, { Component } from 'react';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';
import { LeadSpace, ButtonGroup } from '@carbon/ibmdotcom-react';
import { ArrowRight20, CheckmarkOutline24 } from '@carbon/icons-react';
import DDSCard from '@carbon/ibmdotcom-web-components/es/components-react/card/card.js';
import DDSCardHeading from '@carbon/ibmdotcom-web-components/es/components-react/card/card-heading.js';
import DDSContentSectionHeading from '@carbon/ibmdotcom-web-components/es/components-react/content-section/content-section-heading.js';
import DDSCarousel from '@carbon/ibmdotcom-web-components/es/components-react/carousel/carousel.js';
import DDSCardSectionCarousel from '@carbon/ibmdotcom-web-components/es/components-react/card-section-carousel/card-section-carousel.js';

class AboutUs extends Component {

  constructor(props) {
    super(props);
    this.state = JSON.parse(this.props.json);
  }

  componentDidMount() {

    // REPLACE the default leadspace buttons stylesheet
    var first_button = document.querySelector('.th--leadcopy .th--btn-first')
        first_button.classList.remove("bx--btn--tertiary")
        first_button.classList.add("bx--btn--primary")
    var second_button = document.querySelector('.th--leadcopy .th--btn-second')
        second_button.classList.remove("bx--btn--primary")
        second_button.classList.add("bx--btn--tertiary")
  }

  render() {
    return (
      <>
        <Navbar />

        <LeadSpace 
          theme="g100"
          title={this.state.about_us.leadspace.title}
          copy={this.state.about_us.leadspace.subtitle}
          gradient={true}
          image={{
            sources: [
              { src: this.state.about_us.leadspace.background_image.small, breakpoint: 'sm' },
              { src: this.state.about_us.leadspace.background_image.medium, breakpoint: 'md' },
            ],
            defaultSrc: this.state.about_us.leadspace.background_image.large,
            alt: 'leadspace image',
          }}
        />

        <div className="th--values">
          <div className="bx--row">
            <div className="bx--col-lg-4 bx--col-md-8 bx--col-sm-4">
              <h2>{this.state.about_us.values.title}</h2>
            </div>
            <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-4">
              <p>{this.state.about_us.values.text}</p>
              <br/>
              {Object.keys(this.state.about_us.values.items).map(key =>
                <p key={key} className="th--values-items"><CheckmarkOutline24 /> {this.state.about_us.values.items[key]}</p>
              )}
            </div>
            <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-4">
              <div className="th--values-image">
                <img width="600" src={this.state.about_us.values.featured_image.src} alt={this.state.about_us.values.featured_image.alt} />
              </div>
            </div>
          </div>
        </div>

        <div className="th--leadcopy" style={{backgroundImage: `url(${this.state.about_us.robust_platform.background_image})`}}>
          <h2>{this.state.about_us.robust_platform.title}</h2>
          <p>{this.state.about_us.robust_platform.subtitle}</p>
          <ButtonGroup
            buttons={[
              {
                href: this.state.about_us.robust_platform.cta_primary.href,
                copy: this.state.about_us.robust_platform.cta_primary.text,
                renderIcon: ArrowRight20,
                className: 'th--btn-first'
              },
              {
                href: this.state.about_us.robust_platform.cta_secondary.href,
                copy: this.state.about_us.robust_platform.cta_secondary.text,
                renderIcon: ArrowRight20,
                className: 'th--btn-second'
              },
            ]}
          />
        </div>

        <div className="th--team">
          <DDSCardSectionCarousel>
            <DDSContentSectionHeading>{this.state.about_us.meet_team.title}</DDSContentSectionHeading>
            <DDSCarousel>
              {Object.keys(this.state.about_us.meet_team.cards).map(key =>
                <DDSCard key={key}>
                  <DDSCardHeading>{this.state.about_us.meet_team.cards[key].title}</DDSCardHeading>
                  {this.state.about_us.meet_team.cards[key].text}
                </DDSCard>
              )}
            </DDSCarousel>
          </DDSCardSectionCarousel>
        </div>

        <Footer />
      </>
    );
  }
}

export default AboutUs;
