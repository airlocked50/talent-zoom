import React, { Component } from 'react';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';
import './Employers.scss';
import { LeadSpace } from '@carbon/ibmdotcom-react';
import { ArrowRight20 } from '@carbon/icons-react';

class Employers extends Component {

  componentDidMount() {

    // REPLACE the default leadspace buttons stylesheet
    var first_button = document.querySelector('.th--btn-first')
        first_button.classList.remove("bx--btn--tertiary")
        first_button.classList.add("bx--btn--primary")
    var second_button = document.querySelector('.th--btn-second')
        second_button.classList.remove("bx--btn--primary")
        second_button.classList.add("bx--btn--tertiary")
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

        <Footer />
      </>
    );
  }
}

export default Employers;
