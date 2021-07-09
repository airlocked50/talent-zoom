import React from 'react';
import styles from './footer.module.css';
const Footer = () => {
  return (
    <footer className="th--footer">
      <div className="bx--row">
        <div className="bx--col-lg-4 bx--col-md-2 bx--col-sm-2">
          <img
            width="150"
            className="th--footer-logo"
            src="/images/footer-logo.svg"
            alt="TalentZoom"
          />
        </div>
        <div className={styles.mainContainer}>
          <ul className="bx--col-lg-0 bx--col-md-0 bx--col-sm-10">
            <p>We're social!</p>
            <div className={styles.mainContainer2}>
              <div className={styles.img}>
                <a
                  style={{ margin: 0, padding: 0 }}
                  target="_blank"
                  href="https://www.facebook.com/TalentZoom-100272468792772"
                  rel="noreferrer">
                  <img
                    width="32px"
                    className="th--footer-social"
                    src="/images/footer-facebook.svg"
                    alt="Facebook"
                  />
                </a>
              </div>
              <div className={styles.img}>
                <a
                  style={{ margin: 0, padding: 0 }}
                  target="_blank"
                  href="https://www.linkedin.com/company/talentzoom"
                  rel="noreferrer">
                  <img
                    width="32px"
                    className="th--footer-social"
                    src="/images/footer-linkedin.svg"
                    alt="Linkedin"
                  />
                </a>
              </div>
              <div className={styles.img}>
                <a
                  style={{ margin: 0, padding: 0 }}
                  target="_blank"
                  href="https://www.instagram.com/talentzoom/ "
                  rel="noreferrer">
                  <img
                    width="32px"
                    className="th--footer-social"
                    src="/images/insta-footer.svg"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
            <li>
              <a href="/about-us">About us</a>
            </li>
          </ul>
        </div>
        <div className="th--footer-spacer bx--col-lg-0 bx--col-md-0 bx--col-sm-4" />
        <ul className="bx--col-lg-4 bx--col-md-2 bx--col-sm-2">
          <li>
            <a href="/">Job seekers</a>
          </li>
          <li>
            <a href="/job-seekers-faq">Job seekers FAQ</a>
          </li>
          <li>
            <a href="/job-seekers-terms">Job seekers Terms</a>
          </li>
        </ul>
        <ul className="bx--col-lg-4 bx--col-md-2 bx--col-sm-2">
          <li>
            <a href="/employers">Employers</a>
          </li>
          <li>
            <a href="/employers-faq">Employers FAQ</a>
          </li>
          <li>
            <a href="/employers-terms">Employers Terms</a>
          </li>
        </ul>
        <ul className="bx--col-lg-4 bx--col-md-2 bx--col-sm-0">
          <li>
            {' '}
            <p>We're social!</p>
          </li>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <a
              style={{ margin: 0, padding: 0 }}
              target="_blank"
              href="https://www.facebook.com/TalentZoom-100272468792772"
              rel="noreferrer">
              <img
                width="32"
                className="th--footer-social"
                src="/images/footer-facebook.svg"
                alt="Facebook"
              />
            </a>
            <a
              style={{ margin: 0, padding: 0 }}
              target="_blank"
              href="https://www.linkedin.com/company/talentzoom"
              rel="noreferrer">
              <img
                width="32"
                className="th--footer-social"
                src="/images/footer-linkedin.svg"
                alt="Linkedin"
              />
            </a>
            <a
              style={{ margin: 0, padding: 0 }}
              target="_blank"
              href="https://www.instagram.com/talentzoom/ "
              rel="noreferrer">
              <img
                width="32"
                className="th--footer-social"
                src="/images/insta-footer.svg"
                alt="Instagram"
              />{' '}
            </a>
          </div>
          <li>
            <a href="/about-us">About us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
