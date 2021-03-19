import React, { Component } from 'react';
import './App.scss';
import './App.css';

import { LeadSpace, FeatureCardBlockLarge } from '@carbon/ibmdotcom-react';
import { ArrowRight20 } from '@carbon/icons-react';

class App extends Component {

  componentDidMount() {

    // REPLACE the default leadspace button class
    var first_button = document.querySelector('.th--btn-first')
        first_button.classList.remove("bx--btn--tertiary")
        first_button.classList.add("bx--btn--primary")
    var second_button = document.querySelector('.th--btn-second')
        second_button.classList.remove("bx--btn--primary")
        second_button.classList.add("bx--btn--tertiary")

    console.log(document.querySelector('.bx--btn.bx--btn--tertiary'));
  }

  render() {
    return (
      <>
        <LeadSpace
          type="default"
          theme="g100"
          title="Get matched with your dream job"
          copy="Ditch the job applications and start getting matched with top employers."
          gradient={true}
          buttons={[
            {
              copy: 'I’m ready to be matched',
              renderIcon: ArrowRight20,
              href: 'https://www.example.com',
              className: 'th--btn-first'
            },
            {
              copy: 'I’m hiring',
              renderIcon: ArrowRight20,
              href: 'https://www.example.com',
              className: 'th--btn-second'
            },
          ]}
          image={{
            sources: [
              { src: '/images/app-leadspace.jpg', breakpoint: 'sm' },
              { src: '/images/app-leadspace.jpg', breakpoint: 'md' },
            ],
            defaultSrc: '/images/app-leadspace.jpg',
            alt: 'lead space image',
          }}
        />

        <div class="bx--grid">
          <FeatureCardBlockLarge
            eyebrow="hello"
            heading="Want to work remote?"
            copy="As workplaces evolve, so do we. Discover remote, contract, and full time employment opportunities."
            cta="#"
            image={{
              defaultSrc: '/images/app-work-remote.jpg',
              alt: 'lead space image',
            }}
          />
        </div>
        
      </>
    );
  }
}

export default App;
