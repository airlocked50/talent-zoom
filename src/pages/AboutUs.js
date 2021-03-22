import React, { Component } from 'react';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';
import { LeadSpace } from '@carbon/ibmdotcom-react';

class AboutUs extends Component {

  render() {
    return (
      <>
        <Navbar />

        <LeadSpace 
          theme="g100"
          title="Disrupting the tech employment landscape"
          copy="TalentZoom is an employment marketplace that matches job seekers with top tech employers using AI matching and human touch points."
          gradient={true}
          image={{
            defaultSrc: '/images/employers-leadspace.jpg',
            alt: 'lead space image',
          }}
        />

        <Footer />
      </>
    );
  }
}

export default AboutUs;
