import React, { Component } from 'react';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';
import { LeadSpace } from '@carbon/ibmdotcom-react';
import { Accordion, AccordionItem } from 'carbon-components-react';

class EmployersFAQ extends Component {

  render() {
    return (
      <>
        <Navbar />

        <div className="th--faq-leadpsace">
          <LeadSpace 
            theme="white"
            title="Employers frequently asked questions"
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
                    <li>Open positions for fulfillment</li>
                    <li>Employment type and compensation details</li>
                    <li>Tech stack and years of experience</li>
                  </ul>
                </AccordionItem>
                <AccordionItem title="What kind of job seeker can I match with through TalentZoom?">
                  <p>TalentZoom’s employment marketplace connects companies with ready-to-hire tech talent who have been pre-screened and fully-vetted by our Tech Out team. Match with a variety of job seekers looking for tech positions!</p>
                </AccordionItem>
                <AccordionItem title="How do you pre-screen job seekers?">
                  <p>Our screening process is highly personalized and depends on the tech stack. Our Talent Advocates and Tech Out team screen each job seeker for skills required for the exact role they are matched with, to ensure their experience is relevant to the opportunity. Screening may also involve a managerial reference from the candidate.</p>
                </AccordionItem>
                <AccordionItem title="How long until I receive a match with a qualified job seeker?">
                  <p>Gaining access to a large and diverse candidate pool through TalentZoom’s employment marketplace means increasing your chances of getting matched quickly and accurately with job seekers that fit your needs. Providing the most up-to-date and detailed information in your employer profile is the best way to increase matching time. You’ll receive real-time alerts when you’ve received a match!</p>
                </AccordionItem>
                <AccordionItem title="Can I contact job seekers outside of the TalentZoom platform?">
                  <p>TalentZoom’s platform offers integrated communications features, so all contact between employers and job seekers occurs within the platform. Schedule interviews and send offers directly to candidates you’re interested in within the TalentZoom platform. Your dedicated Hiring Success Manager is there to answer any further questions you may have!</p>
                </AccordionItem>
                <AccordionItem title="Is there anyone I can turn to for support throughout the hiring process?">
                  <p>A dedicated Hiring Success Manager is assigned to each TalentZoom employer for support in all stages of the hiring process. Your Hiring Success Manager is there to answer any questions you may have, offer guidance, and ensure you successfully fulfill your open roles with talent that is the best fit for your team.</p>
                </AccordionItem>
                <AccordionItem title="What are the hiring options?">
                  <p>TalentZoom offers support in hiring for contract and full-time employment opportunities. Contractors are hired as W-2 employees, with benefits!</p>
                </AccordionItem>
                <AccordionItem title="How often will an employer have to communicate with TalentZoom?">
                  <p>TalentZoom personalizes the hiring process by offering support and communication when your hiring team sees fit. We simplify the hiring process by alerting you with ready-to-hire candidates that you have matched with, so you only need to reach out to us with additional questions you may have.</p>
                </AccordionItem>
                <AccordionItem title="What if I need to hire for more roles over time?">
                  <p>Update your employer profile anytime with your new open positions – our team gets alerted and the matching process begins right away.</p>
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

export default EmployersFAQ;
