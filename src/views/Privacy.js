import React, { Component } from 'react';
import Footer from '../components/Nav/footer';
import { LeadSpace } from '@carbon/ibmdotcom-react';
// import { Accordion, AccordionItem } from 'carbon-components-react';
// import parse from 'html-react-parser';

class Privacy extends Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(this.props.json);
  }

  render() {
    return (
      <>
        <div className="th--faq-leadpsace">
          <LeadSpace
            theme="white"
            title={this.state.privacy.leadspace.title}
            copy={this.state.privacy.leadspace.subtitle}
            gradient={false}
            image={{
              sources: [
                {
                  src: this.state.privacy.leadspace.background_image.small,
                  breakpoint: 'sm',
                },
                {
                  src: this.state.privacy.leadspace.background_image.medium,
                  breakpoint: 'md',
                },
              ],
              defaultSrc: this.state.privacy.leadspace.background_image.large,
              alt: 'leadspace image',
            }}
          />
        </div>

        <div className="th--terms">
          <div className="bx--row">
            <div className="bx--col-lg-3" />
            <div className="bx--col-lg-10">
              <p style={{ textDecoration: 'underline' }}>
                BY ACCESSING OR USING THE SERVICES, YOU AGREE TO THE PRACTICES
                AND POLICIES OUTLINED IN THIS PRIVACY POLICY AND YOU HEREBY
                CONSENT TO THE COLLECTION, USE, AND SHARING OF YOUR INFORMATION
                AS DESCRIBED IN THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH
                THIS PRIVACY POLICY, YOU MAY NOT USE THE WEBSITE. IF YOU USE THE
                WEBSITE ON BEHALF OF SOMEONE ELSE OR ON BEHALF OF AN ENTITY
                (SUCH AS YOUR EMPLOYER), YOU REPRESENT THAT YOU ARE AUTHORIZED
                BY SUCH INDIVIDUAL OR ENTITY TO ACCEPT THIS PRIVACY POLICY ON
                SUCH INDIVIDUAL’S OR ENTITY’S BEHALF.
              </p>
              <p>
                <b>INTRODUCTION</b>
              </p>
              <p>
                TalentZoom (<b>“TalentZoom,”</b> <b>“we,”</b> <b>“us,”</b> or{' '}
                <b>“our”</b>) is committed to respecting the privacy rights of
                our registered Job Seekers, Employers, visitors, and other users
                of www.TalentZoom.io, including any content, functionality, and
                services offered on or through www.TalentZoom.io (
                <b>the "Website" </b>or <b>“Platform”</b>) and related websites,
                applications, services and mobile applications provided by
                TalentZoom and on/in which this Privacy Policy is posted or
                referenced (collectively, the <b>“Services”</b>). We created
                this Privacy Policy (<b>“Privacy Policy”</b>) to give you
                confidence as you use the Website and the Services and to
                demonstrate our commitment to the protection of your privacy.
              </p>
              <p>
                This Privacy Policy covers our practices with respect to
                personally identifiable information (
                <b>“Personal Information”</b>) that we gather when you use the
                Services. This Privacy Policy does not apply to any other web
                service or digital service that you may be able to access
                through the Services or any web service or digital services of
                TalentZoom’s business partners, each of which have data
                collection, storage and use practices and policies that may
                differ from this Privacy Policy.
              </p>
              <p>
                <b>INFORMATION WE COLLECT</b>
              </p>
              <p>
                Some of the Services require us to learn more about you so that
                we can best meet your needs.
              </p>
              <p>
                <b>Personal Information We Collect Directly From You</b>
              </p>
              <p>
                We receive Personal Information directly from you when you
                voluntarily provide us with such Personal Information,
                including, without limitation, the following:
              </p>
              <ul>
                <li>
                  Contact data (such as your e-mail address and phone number);
                </li>
                <li>
                  Demographic data (such as your gender, your date of birth and
                  your zip code);
                </li>
                <li>
                  Other identifying information that you voluntarily choose to
                  provide to us, including without limitation unique identifiers
                  such as passwords, and Personal Information in emails or
                  letters that you send to us; and
                </li>
                <li>
                  We may also collect additional information, which may be
                  Personal Information, as otherwise described to you at the
                  point of collection or pursuant to your consent. If you choose
                  not to provide us with any Personal Information, you may still
                  access and use some of the Services, but features of the
                  Services that require your Personal Information will not be
                  accessible to you.
                </li>
              </ul>
              <p>
                <b>Information From Third Party Sources</b>
              </p>
              <p>
                Some third parties, such as our business partners and service
                providers, provide us with Personal Information about you, such
                as the following:
              </p>
              <ul>
                <li>
                  <b>Account information for third party services:</b> If you
                  interact with a third party service when using our Services,
                  such as if you use a third party service to log-in to our
                  Services (e.g., Facebook or Google), or if you share content
                  from our Services through a third party social media service,
                  the third party service will send us certain information about
                  you if the third party service and your account settings allow
                  such sharing. The information we receive will depend on the
                  policies and your account settings with the third party
                  service. The information transmitted to us is covered by this
                  Privacy Policy.
                </li>
              </ul>
              <p>
                <b>
                  Information we automatically collect when you use our Services
                </b>
              </p>
              <p>
                <b>INFORMATION COLLECTED BY OUR SERVICES</b>
              </p>
              <p>
                We collect information (including Personal Information and
                Traffic Data) when you use and interact with the Services, and
                in some cases we may also collect information from third party
                sources. Such means of collection include:
              </p>
              <ul>
                <li>
                  When you use the Services’ interactive tools and services;
                </li>
                <li>
                  When you voluntarily provide information in free-form text
                  boxes through the Services or through responses to surveys,
                  questionnaires and the like;
                </li>
                <li>
                  If you download and install certain applications and software
                  we make available, we may receive and collect information
                  transmitted from your computing device for the purpose of
                  providing you the relevant Services, such as information
                  regarding when you are logged on and available to receive
                  updates or alert notices;
                </li>
                <li>
                  Through cookies, web beacons, analytics services and other
                  tracking technology (collectively, <b>“Tracking Tools”</b>),
                  as described below; and
                </li>
                <li>
                  When you use the “Contact Us” function on the Site, send us an
                  email or otherwise contact us.
                </li>
              </ul>
              <p>
                <b>AUTOMATICALLY COLLECTED INFORMATION</b>
              </p>
              <p>
                <b>Tracking Tools</b>
              </p>
              <p>
                Some information, which may include Personal Information, is
                automatically collected when you use our Services, such as the
                following:
              </p>
              <ul>
                <li>
                  <b>Traffic Data:</b> We may automatically collect certain data
                  when you use the Services, such as:
                  <ul>
                    <li>IP address;</li>
                    <li>domain server;</li>
                    <li>type of device(s) used to access the Services;</li>
                    <li>web browser(s) used to access the Services;</li>
                    <li>
                      referring webpage or other source through which you
                      accessed the Services; • geolocation information; and
                    </li>
                    <li>
                      other statistics and information associated with the
                      interaction between your browser or device and the
                      Services (collectively <b>“Traffic Data”</b>). Depending
                      on applicable law, some Traffic Data may be Personal
                      Information.
                    </li>
                  </ul>
                </li>
                <p>
                  We may use tools outlined below in order to provide our
                  Services to, advertise to, and to better understand users.
                </p>
                <li>
                  <b>Cookies: </b>“Cookies” are small computer files transferred
                  to your computing device that contain information such as user
                  ID, user preferences, lists of pages visited and activities
                  conducted while using the Services. We use cookies to improve
                  or tailor the Services, customize advertisements by tracking
                  navigation habits, measuring performance, and storing
                  authentication status so re-entering credentials is not
                  required, customize user experiences with the Services, and
                  for analytics and fraud prevention. For more information on
                  cookies, including how to control your cookie settings and
                  preferences, visit http://www.allaboutcookies.org.
                </li>
                <li>
                  <b>Flash Cookies: </b>Certain features of our Website may use
                  local stored objects (or Flash cookies) to collect and store
                  information about your preferences and navigation to, from,
                  and on our Website. Flash cookies are not managed by the same
                  browser settings as are used for browser cookies.
                </li>
                <p>
                  Some cookies are placed by a third party on your device and
                  provide information to us and third parties about your
                  browsing habits (such as your visits to our Services, the
                  pages you have visited, and the links and advertisements you
                  have clicked). These cookies can be used to determine whether
                  certain third party services are being used, to identify your
                  interests, and to serve advertisements relevant to you. We do
                  not control third party cookies.
                </p>
                <li>
                  <b>Web Beacons: </b>“Web Beacons” (a.k.a. clear GIFs or pixel
                  tags) are tiny graphic image files embedded in a web page or
                  email that may be used to collect information about the use of
                  our Services, the websites of selected advertisers and the
                  emails, special promotions or newsletters that we send. The
                  information collected by Web Beacons allows us to analyze how
                  many people are using the Services, using selected publishers’
                  websites or opening emails, and for what purpose, and also
                  allows us to enhance our interest-based advertising (discussed
                  further below).
                </li>
                <li>
                  <b>Web Service Analytics: </b>We may use third-party analytics
                  services in connection with the Services, including, for
                  example, to register mouse clicks, mouse movements, scrolling
                  activity and text typed into the Site. We use the information
                  collected from these services to help make the Services easier
                  to use and as otherwise set forth in “How We Use Your
                  Information.” These analytics services generally do not
                  collect Personal Information unless you voluntarily provide it
                  and generally do not track your browsing habits across web
                  services that do not use their services.
                </li>
                <li>
                  <b>Mobile Device Identifiers: </b>As with other Tracking
                  Tools, mobile device identifiers help TalentZoom learn more
                  about our users’ demographics and internet behaviors in order
                  to personalize and improve the Services. Mobile device
                  identifiers are data stored on mobile devices that may track
                  mobile device and data and activities occurring on and through
                  it, as well as the applications installed on it. Mobile device
                  identifiers enable collection of Personal Information (such as
                  media access control, address and location) and Traffic Data.
                </li>
                <li>
                  <b>Engagement Tools: </b>We may use a type of advertising
                  commonly known as interest-based or online behavioral
                  advertising. This means that some of our partners use Tracking
                  Tools, such as cookies, pixel tags, and web beacons, to
                  collect information about a user’s online activities to
                  display TalentZoom ads to the user based on the user’s
                  interests (<b>“Engagement Tools”</b>). Such partners may
                  include third-party service providers, advertisers,
                  advertising networks or platforms, traffic measurement service
                  providers, marketing analytics service providers, and other
                  third party service providers. Other Tracking Tools used by
                  our partners may collect information when you use the
                  Services, such as IP address, mobile device ID, operating
                  system, browser, web page interactions, geographic location
                  and demographic information, such as gender and age range.
                  These Tracking Tools help TalentZoom learn more about our
                  users’ demographics and internet behaviors.
                </li>
                <li>
                  <b>
                    Options for Opting out of Cookies and Mobile Device
                    Identifiers:{' '}
                  </b>
                  Some web browsers allow you to reject cookies or to alert you
                  when a Cookie is placed on your computer, tablet or mobile
                  device. You may be able to reject mobile device identifiers by
                  activating the appropriate setting on your mobile device.
                  Although you are not required to accept TalentZoom’s cookies
                  or mobile device identifiers, if you block or reject them, you
                  may not have access to all features available through the
                  Services.
                  <ul>
                    <li>
                      You may opt out of receiving certain cookies and certain
                      trackers by visiting the Network Advertising Initiative
                      (NAI) opt out page or the Digital Advertising Alliance
                      (DAA) consumer opt-out page, or by installing the DAA’s
                      AppChoice app (for iOS; for Android) on your mobile
                      computing device. When you use these opt-out features, an
                      “opt-out” Cookie will be placed on your computer, tablet
                      or mobile computing device indicating that you do not want
                      to receive interest-based advertising from NAI or DAA
                      member companies. If you delete cookies on your computer,
                      tablet or mobile computing device, you may need to opt out
                      again. For information about how to opt out of
                      interest-based advertising on mobile devices, please visit
                      http://www.applicationprivacy.org/expressing-your-behavioral-advertising-choices-on-a-mobile-device.
                      You will need to opt out of each browser and device for
                      which you desire to apply these opt-out features.
                    </li>
                    <li>
                      Even after opting out of Engagement Tools, you may still
                      see TalentZoom and other advertisements that are not
                      interest-based (i.e., not targeted toward you). Also,
                      opting out does not mean that TalentZoom is no longer
                      using Tracking Tools — TalentZoom still may collect
                      information about your use of the Services even after you
                      have opted out of Engagement Tools, and may still serve
                      advertisements to you via the Services based on
                      information it collects via the Services.
                    </li>
                  </ul>
                  <p>
                    This Privacy Policy does not cover the use of cookies and
                    other Tracking Tools by any third parties, and we aren’t
                    responsible for their privacy policies and practices. Please
                    be aware that some cookies placed by third parties can
                    continue to track your activities online even after you have
                    left our Services.
                  </p>
                </li>
                <li>
                  <b>
                    How TalentZoom Responds to Browser “Do Not Track” (DNT)
                    Signals:
                  </b>
                  Some web browsers (including Safari, Internet Explorer,
                  Firefox and Chrome) incorporate a “Do Not Track” (DNT) or
                  similar feature that signals to web services that a visitor
                  does not want to have his/her online activity and behavior
                  tracked. If a web service operator elects to respond to a
                  particular DNT signal, the web service operator may refrain
                  from collecting certain Personal Information about the
                  browser’s user. Not all browsers offer a DNT option and there
                  is currently no industry consensus as to what constitutes a
                  DNT signal. For these reasons, many web service operators,
                  including TalentZoom, do not proactively respond to DNT
                  signals. For more information about DNT signals, visit
                  http://allaboutdnt.com.
                </li>
              </ul>

              <p>
                <b>HOW WE USE YOUR INFORMATION</b>
              </p>
              <p>
                We may use information that is not Personal Information to
                better understand who uses the Site and how we can deliver a
                better experience, or otherwise at our discretion.
              </p>
              <p>
                We use information, including Personal Information, to provide
                the Services and to help improve the Services, to develop new
                services, and to advertise (for example, to display TalentZoom
                ads on other web services). Specifically, such use may include:
              </p>

              <ul>
                <li>
                  Providing you with the products, services and information you
                  request;
                </li>
                <li>
                  Responding to correspondence that we receive from you;
                  <ul>
                    <li>
                      Contacting you when necessary or requested, including to
                      remind you of an upcoming appointment;
                    </li>
                    <li>
                      Providing, maintaining, administering or expanding the
                      Services, performing business analyses, or for other
                      internal purposes to support, improve or enhance our
                      business, the Services, and other products and services we
                      offer;
                    </li>
                    <li>
                      Customizing or tailoring your experience of the Services,
                      which may include sending customized messages or showing
                      you Sponsored Results;
                    </li>
                    <li>
                      Notifying you about certain resources or services we think
                      you may be interested in learning more about;
                    </li>
                    <li>
                      Sending you information about TalentZoom or our products
                      or Services;
                    </li>
                    <li>
                      Sending emails and other communications that display
                      content that we think will interest you;
                    </li>
                    <li>
                      Combining information received from third parties with
                      information that we have from or about you and using the
                      combined information for any of the purposes described in
                      this Privacy Policy;
                    </li>
                    <li>
                      Showing you advertisements, including interest-based or
                      online behavioral advertising;
                    </li>
                    <li>
                      Using statistical information that we collect in any way
                      permitted by law, including from third parties in
                      connection with their commercial and marketing efforts;
                    </li>
                    <li>
                      Fulfilling our legally required obligations, such as
                      preventing, detecting and investigating security incidents
                      and potentially illegal or prohibited activities;
                    </li>
                  </ul>
                </li>
                <li>
                  Resolving disputes;
                  <ul>
                    <li>
                      Protecting against or deterring fraudulent, illegal, or
                      harmful actions; and
                    </li>
                  </ul>
                </li>
                <li>Enforcing our Terms of Use and other agreements.</li>
              </ul>

              <p>
                <b>HOW WE SHARE YOUR INFORMATION</b>
              </p>
              <p>
                In certain circumstances, and in order to perform the Services,
                we may share certain information that we collect from you, as
                described in this section:
              </p>
              <ul>
                <li>
                  <b>Job Seeker Content to Employers:</b> We may share Job
                  Seeker Content with Employers in connection with the Services.
                </li>
                <li>
                  <b>Employer Content to Job Seekers:</b> We may share Employer
                  Content with Job Seekers in connection with the Services.
                </li>
                <li>
                  <b>Email Addresses: </b> We do not sell email addresses to
                  third parties. We may share your Personal Information with our
                  partners to customize or display our advertising
                </li>
                <li>
                  <b>Personal Information and/or Traffic Data: </b> We may share
                  your Personal Information and/or Traffic Data with our
                  partners who perform operational services (such as hosting,
                  billing, fulfillment, data storage, security, insurance
                  verification, web service analytics, or ad serving) and/or who
                  make certain services, features or functionality available to
                  our users.
                </li>
                <li>
                  <b>Cross Device Matching:</b> To determine if users have
                  interacted with content across multiple devices and to match
                  such devices, we work with partners who analyze device
                  activity data and/or rely on your information (including
                  demographic, geographic and interest-based data). To
                  supplement this analysis, we also provide de-identified data
                  to these partners. Based on this data, we may then display
                  targeted advertisements across devices that we believe are
                  associated or use this data to further analyze usage of
                  Services across devices.
                </li>
                <li>
                  <b>Successors:</b> We may transfer your Personal Information
                  to another company that is a successor to TalentZoom, in
                  connection with a proposed merger, sale, acquisition or other
                  change of ownership or control by or of TalentZoom (whether in
                  whole or in part). Should one of these events occur, we will
                  make reasonable efforts to notify you before your information
                  becomes subject to different privacy and security policies and
                  practices.
                </li>
                <li>
                  <b>Public Information and Submission:</b> You agree that any
                  information that you may reveal in a review posting, online
                  discussion or forum is intended for the public and is not in
                  any way private. Carefully consider whether to disclose any
                  Personal Information in any public posting or forum. Your
                  submissions may be seen and/or collected by third parties and
                  may be used by others in ways we are unable to control or
                  predict.{' '}
                </li>
                <li>
                  <b>Certain Disclosures:</b> We may need to disclose your
                  Personal Information or any other information we collect about
                  you if we determine in good faith that such disclosure is
                  needed:{' '}
                  <ul>
                    <li>
                      to detect, prevent, investigate, or address fraud, illegal
                      activity, or violations of our terms and agreements;
                    </li>
                    <li>
                      in response to legal process, such as a search warrant,
                      court order, or subpoena, or when we have a good faith
                      belief that the law requires us to do so;
                    </li>
                    <li>
                      with our current and future subsidiaries or corporate
                      affiliates or actual or potential investors;
                    </li>
                    <li>
                      in connection with a potential or actual sale, merger,
                      transfer, exchange, reorganization or other disposition
                      (whether of assets, stock, or otherwise) of all or a
                      portion of the business conducted by our Services. If such
                      a transaction occurs, the acquiring company’s use of your
                      information will remain subject to this Policy, as may be
                      subsequently amended;{' '}
                    </li>
                    <li>for any other purposes described in this Policy;</li>
                    <li>when we otherwise have your permission;</li>
                    <li>
                      to comply with or fulfill our obligations under applicable
                      law, regulation, court order or other legal process;
                    </li>
                    <li>
                      to protect the rights, property or safety of you,
                      TalentZoom or another party;
                    </li>
                    <li>
                      to enforce this Policy, the Terms of Use or other
                      agreements with you; or
                    </li>
                    <li>
                      to respond to claims that any posting or other content
                      violates third-party rights.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Other Information:</b> We may disclose information that is
                  not Personal Information (including Personal Information that
                  has been de-identified and/or aggregated) at our discretion.
                </li>
              </ul>

              <p>
                <b>STORAGE AND SECURITY OF INFORMATION</b>
              </p>
              <p>
                To help prevent unauthorized access, maintain data accuracy, and
                protect against the inappropriate use of the information we
                collect, store, and transmit, we deploy a range of technical,
                physical and administrative safeguards.{' '}
              </p>
              <p>
                We store and process your information on our servers in the
                United States and abroad. We maintain industry standard backup
                and archival systems.
              </p>
              <p>
                Your account is protected by a password for your privacy and
                security. If you access your account via a third party site or
                service, you may have additional or different sign-on
                protections via that third party site or service. You must
                prevent unauthorized access to your account and Personal
                Information by selecting and protecting your password and/or
                other sign-on mechanism appropriately, and limiting access to
                your computer or device and browser by signing off after you
                have finished using the Services.
              </p>
              <p>
                Although we make good faith efforts to store Personal
                Information in a secure operating environment that is not open
                to the public, we do not and cannot guarantee the security of
                your Personal Information. If at any time during or after our
                relationship we believe that the security of your Personal
                Information may have been compromised, we may seek to notify you
                of that development. If a notification is appropriate, we will
                endeavor to notify you as promptly as possible under the
                circumstances.
              </p>
              <p>
                The safety and security of your information also depends on you.
                Where we have given you (or where you have chosen) a password
                for access to certain parts of our Website, you are responsible
                for keeping this password confidential. We ask you not to share
                your password with anyone.
              </p>
              <p>
                Unfortunately, the transmission of information via the internet
                is not completely secure. Although we do our best to protect
                your personal information, we cannot guarantee the security of
                your Personal Information. Any transmission of Personal
                Information is at your own risk. We are not responsible for
                circumvention of any privacy settings or security measures
                contained on the Website.
              </p>
              <p>
                If we have your e-mail address, we may notify you by e-mail to
                the most recent e-mail address you have provided us in your
                account profile. Please keep your e-mail address in your account
                up to date. You can update that e-mail address anytime in your
                account profile. If you receive a notice from us, you can print
                it to retain a copy of it. To receive these notices, you must
                check your e-mail account using your computer or mobile device
                and email application software.{' '}
                <b>
                  You consent to our use of e-mail as a means of such
                  notification. If you prefer for us to use the U.S. Postal
                  Service to notify you in this situation, please e-mail us at
                  info@TalentZoom.io.
                </b>{' '}
                Please include your email address and your mailing address when
                you submit your request. You can make this election any time,
                and it will apply to notifications we make after a reasonable
                time thereafter for us to process your request. You may also use
                this e-mail address to request a print copy, at no charge, of an
                electronic notice we have sent to you regarding a compromise of
                your Personal Information.
              </p>
              <p>
                <b>
                  OPT OUT, MODIFICATION AND RETENTION OF PERSONAL INFORMATION
                </b>
              </p>
              <p>
                You can always opt not to disclose information to us, but keep
                in mind some information may be needed to register with us or to
                take advantage of some of our features and Services.
              </p>
              <p>
                If you are a registered user of the Services, you can modify
                certain Personal Information or account information by logging
                in and accessing your account. The information you can view,
                update, and delete may change as the Services change.
              </p>
              <p>
                If you wish to close your account, please email us at
                info@TalentZoom.io. Please note, however, that TalentZoom
                reserves the right to retain information from closed accounts,
                including to comply with law, prevent fraud, resolve disputes,
                enforce the Agreement and take other actions permitted by law.
              </p>
              <p>
                You must promptly notify us if any of your account data is lost,
                stolen or used without permission.
              </p>
              <p>
                We retain Personal Information about you for as long as you have
                an open account with us or as otherwise necessary to provide you
                Services. In some cases we retain Personal Information for
                longer, if doing so is necessary to comply with our legal
                obligations, resolve disputes or collect fees owed, prevent
                fraud, enforce the Agreement, or as otherwise permitted or
                required by applicable law, rule or regulation. Afterwards, we
                retain some information in a depersonalized or aggregated form
                but not in a way that would identify you personally.
              </p>
              <p>
                <b>INFORMATION PROVIDED ON BEHALF OF MINORS</b>
              </p>
              <p>
                The Services are not intended for use by children and children
                under the age of 13 are prohibited from using the Services.
                TalentZoom does not knowingly collect any information from
                children, nor are the Services directed to children. If you are
                under 13, please do not attempt to register for the Services or
                send any Personal Information about yourself to us.
              </p>
              <p>
                By accessing, using and/or submitting information to or through
                the Services, you represent that you are not younger than age
                13. If we learn that we have received any information directly
                from a child under age 13 without his/her parent’s written
                consent, we will use that information only to respond directly
                to that child (or his/her parent or legal guardian) to inform
                the child that he/she cannot use the Services, and we will
                subsequently delete that information.
              </p>
              <p>
                If you believe that a child under 13 may have provided us
                Personal Information, please contact us at{' '}
                <b style={{ textDecoration: 'underline' }}>
                  info@TalentZoom.io.
                </b>
              </p>
              <p>
                If you are between age 13 and the age of majority in your place
                of residence, you may use the Services only with the consent of
                or under the supervision of your parent or legal guardian. If
                you are a parent or legal guardian of a minor child, you may, in
                compliance with our terms, use the Services on behalf of such
                minor child. Any information that you provide us while using the
                Services on behalf of your minor child will be treated as
                Personal Information as otherwise provided herein.
              </p>
              <p>
                If you use the Services on behalf of another person, regardless
                of age, you agree that TalentZoom may contact you for any
                communication made in connection with providing the Services or
                any legally required communications. You further agree to
                forward or share any such communication with any person for whom
                you are using the Services on behalf.
              </p>
              <p>
                <b>OTHER WEB SERVICES</b>
              </p>
              <p>
                The Services contain links to or embedded content from third
                party web services. A link to or embedded content from a
                non-TalentZoom web service does not mean that we endorse that
                web service, the quality or accuracy of information presented on
                the non-TalentZoom web service or the persons or entities
                associated with the non-TalentZoom web service. If you decide to
                visit a third party web service, you are subject to the privacy
                policy of the third party web service as applicable and we are
                not responsible for the policies and practices of the third
                party web service. We encourage you to ask questions before you
                disclose your information to others.
              </p>
              <p>
                You may have arrived at the Services from, or began your use of
                the Services at, a third party web service, including a third
                party web service that links to TalentZoom or embeds TalentZoom
                content. The presence of such links or content on third party
                web services does not mean that we endorse that web service, the
                quality or accuracy of information presented on the
                non-TalentZoom web service or the persons or entities associated
                with the non-TalentZoom web service. You may be subject to the
                privacy policy of the third party web service as applicable and
                we are not responsible for the policies and practices of the
                third party web services. In addition, the policies and
                practices of third parties do not apply to your information,
                including Personal Information, obtained pursuant to this
                Privacy Policy.
              </p>
              <p>
                <b>UPDATING INFORMATION AND CHANGES TO PRIVACY POLICY</b>
              </p>
              <p>
                The effective date of this Privacy Policy is set forth at the
                top of this webpage. We will notify you of any material change
                by posting notice on this webpage. Your continued use of the
                Services after the effective date constitutes your acceptance of
                the Privacy Policy as in effect at the time you use the
                Services. We encourage you to periodically review this page for
                the latest information on our privacy practices. Any amended
                Privacy Policy supersedes all previous versions. IF YOU DO NOT
                AGREE TO FUTURE CHANGES TO THIS PRIVACY POLICY, YOU MUST STOP
                USING THE SERVICES AFTER THE EFFECTIVE DATE OF SUCH CHANGES.
              </p>
              <p>
                <b>SUPPLEMENTAL NOTICES TO CALIFORNIA RESIDENTS </b>
              </p>
              <p>
                <b>The following applies only to California Residents</b>
              </p>
              <p>
                If you are a resident of California, you are permitted by
                California law to request information regarding the disclosure
                of your Personal Information by TalentZoom to a third party for
                the third party’s direct marketing purposes. To make such a
                request, please send an email to{' '}
                <b style={{ textDecoration: 'underline' }}>
                  info@TalentZoom.io
                </b>
                or write us at the address noted below.{' '}
              </p>
              <p>The California Consumer Privacy Act of 2018 (“CCPA”) provides California residents with specific rights regarding their Personal Information. This section describes your CCPA rights and explains how to exercise those rights.</p>
              <ul>
                <li style={{textDecoration: "underline"}}>Access to Specific Information and Data Portability Rights</li>
                <p>You have the right to request that TalentZoom disclose certain information to you about our collection and use of your Personal Information over the past 12 months. Once we receive and confirm your verifiable consumer request, we will disclose to you:</p>
                <ul>
                  <li>The categories of Personal Information and categories of sources for the Personal Information TalentZoom collected about you.</li>
                  <li>Our business or commercial purpose for collecting or selling that Personal Information.</li>
                  <li>The categories of third parties with whom we share that Personal Information.</li>
                  <li>The specific pieces of Personal Information we collected about you (also called a data portability request).</li>
                  <li>If we sold or disclosed your Personal Information for a business purpose, two separate lists disclosing: <ul><li>sales, identifying the Personal Information categories that each category of recipient purchased; and</li>
                  <li>disclosures for a business purpose, identifying the Personal Information categories that each category of recipient obtained.</li></ul> </li>
                </ul>
                <li style={{textDecoration: "underline"}}>Deletion Request Rights</li>
                <p>You have the right to request that TalentZoom delete any of your Personal Information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request, we will delete (and direct our service providers to delete) your Personal Information from our records, unless an exception applies.</p>
                <p>We may deny your deletion request if retaining the information is necessary for us or our service provider(s) to:</p>
                <ul>
                  <li>Complete the transaction for which we collected the Personal Information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform our contract with you.</li>
                  <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.</li>
                  <li>Debug products to identify and repair errors that impair existing intended functionality.</li>
                  <li>Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.</li>
                  <li>Comply with the California Electronic Communications Privacy Act.</li>
                  <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information’s deletion may likely render impossible or seriously impair the research’s achievement, if you previously provided informed consent.</li>
                  <li>Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.</li>
                  <li>Comply with a legal obligation.</li>
                  <li>Make other internal and lawful uses of that information that are compatible with the context in which you provided it.</li>
                </ul>
                <li style={{textDecoration: "underline"}}>Exercising Access, Data Portability, and Deletion Rights</li>
                <p>To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to us by email to info@TalentZoom.io or write us at the address noted below.</p>
                <p>The verifiable consumer request must provide sufficient information that allows us to reasonably verify you are the person about whom we collected Personal Information or an authorized representative and must describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.</p>
                <p>TalentZoom cannot respond to your request or provide you with Personal Information if we cannot verify your identity or authority to make the request and confirm the Personal Information relates to you.</p>
                <li style={{textDecoration: "underline"}}>Response Timing and Format</li>
                <p>TalentZoom will endeavor to respond to a verifiable consumer request within forty-five (45) days of its receipt. If we require more time (up to 90 days), we will inform you of the reason and extension period in writing.</p>
                <p>TalentZoom will not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded.</p>
                <li style={{textDecoration: "underline"}}>Non-Discrimination</li>
                <p>We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, TalentZoom will not:</p>
                <ul>
                  <li>Deny you goods or services.</li>
                  <li>Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.</li>
                  <li>Provide you a different level or quality of goods or services</li>
                  <li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
                  <li>However, we may offer you certain financial incentives permitted by the CCPA that can result in different prices, rates, or quality levels. Any CCPA-permitted financial incentive we offer will reasonably relate to your Personal Information’s value and contain written terms that describe the program’s material aspects. Participation in a financial incentive program requires your prior opt in consent, which you may revoke at any time.</li>
                </ul>
              </ul>
              <p><b>CONTACT US</b></p>
              <p>If you have any comments, concerns or questions about this Privacy Policy, please contact us at <b style={{textDecoration: "underline"}}>info@TalentZoom.io</b>.</p>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Privacy;
