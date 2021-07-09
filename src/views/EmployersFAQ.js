import React, { Component } from 'react';
import Footer from '../components/Nav/footer';
import { LeadSpace } from '@carbon/ibmdotcom-react';
import { Accordion, AccordionItem } from 'carbon-components-react';
import parse from 'html-react-parser';

class EmployersFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(this.props.json);
  }
 componentDidMount() {
  window.dataLayer.push({
    event: 'pageview'
  })
 }
  render() {
    return (
      <>
        

        <div className="th--faq-leadpsace">
          <LeadSpace
            theme="white"
            title={this.state.employers_faq.leadspace.title}
            copy={this.state.employers_faq.leadspace.subtitle}
            gradient={false}
            image={{
              sources: [
                {
                  src: this.state.employers_faq.leadspace.background_image
                    .small,
                  breakpoint: 'sm',
                },
                {
                  src: this.state.employers_faq.leadspace.background_image
                    .medium,
                  breakpoint: 'md',
                },
              ],
              defaultSrc: this.state.employers_faq.leadspace.background_image
                .large,
              alt: 'leadspace image',
            }}
          />
        </div>

        <div className="th--faq">
          <div className="bx--row">
            <div className="bx--col-lg-4">
              <h2>{this.state.employers_faq.description}</h2>
            </div>
            <div className="bx--col-lg-12">
              <Accordion align="start">
                {Object.keys(this.state.employers_faq.list).map(key => (
                  <AccordionItem
                    key={key}
                    title={this.state.employers_faq.list[key].question}>
                    {parse(this.state.employers_faq.list[key].answer)}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default EmployersFAQ;
