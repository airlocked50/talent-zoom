import React, { Component } from 'react';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';
import { LeadSpace } from '@carbon/ibmdotcom-react';
import { Accordion, AccordionItem } from 'carbon-components-react';

class JobSeekersTerms extends Component {

  render() {
    return (
      <>
        <Navbar />

        <div className="th--faq-leadpsace">
          <LeadSpace 
            theme="white"
            title="Job seekers terms"
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
                  <p>At TalentZoom, we aim to match you with the role that is the best fit for you. We make job searching both automated and highly personalized, providing you with the easiest way to discover opportunities that fit your needs. No more applications, cover letters, or recruiters – simply sign up and let interested companies request to interview you. Plus, receive a signing bonus when you accept an offer through TalentZoom!</p>
                </AccordionItem>
                <AccordionItem title="How can I join TalentZoom?">
                  <p>Create your profile <a href="/signup">here</a>! We assess all candidates for factors like compensation expectations, location preferences, tech stack, and years of experience to ensure we match you with your ideal position.</p>
                </AccordionItem>
                <AccordionItem title="What kinds of opportunities can I match with?">
                  <p>TalentZoom’s employers are seeking candidates for a variety of position types, including full time, contract, and remote.</p>
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

export default JobSeekersTerms;
