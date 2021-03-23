const Footer = () => {
  return (
    <footer className="th--footer">
      <div className="bx--row">
        <div className="bx--col-lg-4 bx--col-md-2 bx--col-sm-2">
          <img width="150" className="th--footer-logo" src="/images/footer-logo.svg" alt="TalentZoom" />
        </div>
        <ul className="bx--col-lg-0 bx--col-md-0 bx--col-sm-2">
          <p>We're on social</p>
          <img width="32" className="th--footer-social" src="/images/footer-facebook.svg" alt="Facebook" />
          <img width="32" className="th--footer-social" src="/images/footer-linkedin.svg" alt="Linkedin" />
          <img width="32" className="th--footer-social" src="/images/footer-twitter.svg" alt="Twitter" />
          <li><a href="/">About us</a></li>
        </ul>
        <div className="th--footer-spacer bx--col-lg-0 bx--col-md-0 bx--col-sm-4"></div>
        <ul className="bx--col-lg-4 bx--col-md-2 bx--col-sm-2">
          <li><a href="/">Job seekers</a></li>
          <li><a href="/job-seekers-faq">Job seeker FAQ</a></li>
          <li><a href="/job-seekers-terms">Job seeker Terms</a></li>
        </ul>
        <ul className="bx--col-lg-4 bx--col-md-2 bx--col-sm-2">
          <li><a href="/employers">Employer</a></li>
          <li><a href="/employers-faq">Employer FAQ</a></li>
          <li><a href="/employers-terms">Employer Terms</a></li>
        </ul>
        <ul className="bx--col-lg-4 bx--col-md-2 bx--col-sm-0">
          <p>We're on social</p>
          <img width="32" className="th--footer-social" src="/images/footer-facebook.svg" alt="Facebook" />
          <img width="32" className="th--footer-social" src="/images/footer-linkedin.svg" alt="Linkedin" />
          <img width="32" className="th--footer-social" src="/images/footer-twitter.svg" alt="Twitter" />
          <li><a href="/about-us">About us</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;