import React, { Component } from 'react';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';
import { LeadSpace } from '@carbon/ibmdotcom-react';
import { Accordion, AccordionItem } from 'carbon-components-react';

class JobSeekersFAQ extends Component {

  render() {
    return (
      <>
        <Navbar />

        <div className="th--faq-leadpsace">
          <LeadSpace 
            theme="white"
            title="Job seekers frequently asked questions"
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
                  <p>At TalentZoom, we aim to match you with the role that is the best fit for you. We make job searching both automated and highly personalized, providing you with the easiest way to discover opportunities that fit your needs. No more applications, cover letters, or recruiters – simply sign up and let interested companies request to interview you!</p>
                </AccordionItem>
                <AccordionItem title="How can I join TalentZoom?">
                  <p>Create your profile <a href="/signup">here</a>! We assess all candidates for factors like compensation expectations, location preferences, tech stack, and years of experience to ensure we match you with your ideal position.</p>
                </AccordionItem>
                <AccordionItem title="What kinds of opportunities can I match with?">
                  <p>TalentZoom’s employers are seeking candidates for a variety of position types, including contract, full time, and remote.</p>
                </AccordionItem>
                <AccordionItem title="Will I be guaranteed a match?">
                  <p>You are not guaranteed to get matched with an employer through TalentZoom. You will only be notified with an opportunity when we have matched your skills and experience with an employer’s position criteria.</p>
                </AccordionItem>
                <AccordionItem title="What kinds of employers are on TalentZoom's employment marketplace?">
                  <p>TalentZoom’s careful employer screening process means you match only with companies who are actively looking to hire for current open positions.</p>
                </AccordionItem>
                <AccordionItem title="Can I choose who I interview with?">
                  <p>Yes! You are free to accept or decline any interview request you receive from a potential employer.</p>
                </AccordionItem>
                <AccordionItem title="How much does it cost?">
                  <p>Nothing at all. TalentZoom is free for job seekers!</p>
                </AccordionItem>
                <AccordionItem title="Can I block my current or past employers from viewing my profile?">
                  <p>Yes. As a part of your profile creation process, you will be able to indicate which companies you would like blocked from your profile.</p>
                </AccordionItem>
                <AccordionItem title="Can I see the employers on the TalentZoom marketplace and contact them directly?">
                  <p>No, your profile is visible to employers and they can request an interview through the integrated TalentZoom platform.</p>
                </AccordionItem>
                <AccordionItem title="How are the interviews structured?">
                  <p>This depends on the position you are interviewing for and the employer themselves. Our Talent Advocates can help prep you for your interviews and answer any questions you may have about the process!</p>
                </AccordionItem>
                <AccordionItem title="How long will it take for me to get hired?">
                  <p>This can vary depending on the number of interview requests you accept, as well as the employer’s internal processes.</p>
                </AccordionItem>
                <AccordionItem title="What resources and support does TalentZoom provide job seekers?">
                  <p>Each job seeker is assigned a dedicated Talent Advocate who is there to offer guidance and answer any questions you may have throughout the hiring process.</p>
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

export default JobSeekersFAQ;
