import React, { Component } from 'react';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';
import { LeadSpace } from '@carbon/ibmdotcom-react';
import { Accordion, AccordionItem } from 'carbon-components-react';

class EmployersTerms extends Component {

  render() {
    return (
      <>
        <Navbar />

        <div className="th--faq-leadpsace">
          <LeadSpace 
            theme="white"
            title="Employers terms"
            gradient={false}
          />
        </div>

        <div className="th--faq">
          <div className="bx--row">
            <div className="bx--col-lg-4">
              <h2>Get answers to common questions and links to learn more.</h2>
            </div>
            <div className="bx--col-lg-12">
              <Accordion align="start">
                <AccordionItem title="Why choose TalentZoom?">
                  <p>Expanding your business starts with hiring top talent. TalentZoom provides employers with a better, faster, and more affordable way to grow your tech team. Our tech employment marketplace matches companies with pre-screened, fully-vetted tech talent using AI and high-value human touch points. Hire with better accuracy and less risk compared with traditional staffing agencies.</p>
                </AccordionItem>
                <AccordionItem title="How much does TalentZoom cost?">
                  <p>Unlike subscription-based models, TalentZoom offers two lower-risk pricing models:</p>
                  <ul>
                    <li>A monthly fee of 1% of the new hires salary for 12 months</li>
                    <li>Fixed fees of 12% based on annual compensation</li>
                  </ul>
                  <p>If the candidate leaves your team for any reason, your payments cease.</p>
                </AccordionItem>
                <AccordionItem title="How can I get started with TalentZoom?">
                  <p>Create a profile <a href="/signup">here</a>. Employers are asked to provide details including:</p>
                  <ul>
                    <li>A monthly fee of 1% of the new hires salary for 12 months</li>
                    <li>Fixed fees of 12% based on annual compensation</li>
                    <li>Tech stack and years of experience</li>
                  </ul>
                </AccordionItem>
                <AccordionItem title="What kind of job seeker can I match with through TalentZoom?">
                  <p>TalentZoom’s employment marketplace connects companies with ready-to-hire tech talent who have been pre-screened and fully-vetted by our Tech Out team. Match with a variety of job seekers looking for tech positions!</p>
                </AccordionItem>
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
