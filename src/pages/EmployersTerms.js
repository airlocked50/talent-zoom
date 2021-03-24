import React, { Component } from 'react';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';
import { LeadSpace } from '@carbon/ibmdotcom-react';
import { Accordion, AccordionItem } from 'carbon-components-react';
import parse from 'html-react-parser';

class EmployersTerms extends Component {

  constructor(props) {
    super(props);
    this.state = JSON.parse(this.props.json);
  }

  render() {
    return (
      <>
        <Navbar />

        <div className="th--faq-leadpsace">
          <LeadSpace 
            theme="white"
            title={this.state.employers_terms.leadspace.title}
            copy={this.state.employers_terms.leadspace.subtitle}
            gradient={false}
            image={{
              sources: [
                { src: this.state.employers_terms.leadspace.background_image.small, breakpoint: 'sm' },
                { src: this.state.employers_terms.leadspace.background_image.medium, breakpoint: 'md' },
              ],
              defaultSrc: this.state.employers_terms.leadspace.background_image.large,
              alt: 'leadspace image',
            }}
          />
        </div>

        <div className="th--faq">
          <div className="bx--row">
            <div className="bx--col-lg-4">
              <h2>{this.state.employers_terms.description}</h2>
            </div>
            <div className="bx--col-lg-12">
              <Accordion align="start">
                {Object.keys(this.state.employers_terms.list).map(key => 
                  <AccordionItem key={key} title={this.state.employers_terms.list[key].question}>
                    {parse(this.state.employers_terms.list[key].answer)}
                  </AccordionItem>
                )}
              </Accordion>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default EmployersTerms;
