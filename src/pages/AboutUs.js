import React, { Component } from 'react';
import Navbar from '../modules/Navbar';
import Footer from '../modules/Footer';
import { LeadSpace, ButtonGroup } from '@carbon/ibmdotcom-react';
import { ArrowRight20, CheckmarkOutline24 } from '@carbon/icons-react';

class AboutUs extends Component {

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
          title="Disrupting the tech employment landscape"
          copy="TalentZoom is an employment marketplace that matches job seekers with top tech employers using AI matching and human touch points."
          gradient={true}
          image={{
            defaultSrc: '/images/employers-leadspace.jpg',
            alt: 'lead space image',
          }}
        />

        <div className="th--values">
          <div className="bx--row">
            <div className="bx--col-lg-4 bx--col-md-8 bx--col-sm-4">
              <h2>Our values</h2>
            </div>
            <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-4">
              <p>At TalentZoom, we believe in accessibility. We strive to create a world where job seekers can discover their dream opportunity with full transparence, and where employers can hire new team members with confidence.</p>
              <br/>
              <p className="th--values-items"><CheckmarkOutline24 /> Faster results</p>
              <p className="th--values-items"><CheckmarkOutline24 /> Cost effective</p>
              <p className="th--values-items"><CheckmarkOutline24 /> Better experience</p>
            </div>
            {/* <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-4"><br/></div> */}
            {/* <div className="bx--col-lg-0 bx--col-md-8 bx--col-sm-0"><br/><br/></div> */}
            <div className="bx--col-lg-8 bx--col-md-4 bx--col-sm-4">
              <div className="th--values-image">
                <img width="600" src="/images/home-seeking-simplified.svg" alt="tridimensional cube with Ts" />
              </div>
            </div>
          </div>
        </div>

        <div className="th--leadcopy" style={{backgroundImage: 'url(/images/about-us-robust.jpg)'}}>
          <h2>A robust hiring platform</h2>
          <p>The innovative solution to a job seeking and hiring.</p>
          <ButtonGroup
            buttons={[
              {
                href: '/signup',
                copy: 'For job seekers',
                renderIcon: ArrowRight20,
                className: 'th--btn-first'
              },
              {
                href: '/signup',
                copy: 'For employers',
                renderIcon: ArrowRight20,
                className: 'th--btn-second'
              },
            ]}
          />
        </div>

        <div className="th--meet-team">
          <div className="bx--row">
            <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-4">
              <h2>Meet the team</h2>
            </div>
            <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-4">
              <div className="th--meet-team-box">
                <h3>Our tech out <br />team</h3>
                <p>We pre-screen and qualify all of our amazing job seekers.</p>
              </div>
            </div>
            <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-4"><br/></div>
            <div className="bx--col-lg-0 bx--col-md-8 bx--col-sm-0"><br/><br/></div>
            <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-4">
              <div className="th--meet-team-box">
                <h3>Our talent advocates</h3>
                <p>We support candidates throughout the job seeking process.</p>
              </div>
            </div>
            <div className="bx--col-lg-0 bx--col-md-0 bx--col-sm-4"><br/></div>
            <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-4">
              <div className="th--meet-team-box">
                <h3>Our hiring success team</h3>
                <p>We support candidates throughout the job seeking process.</p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default AboutUs;
