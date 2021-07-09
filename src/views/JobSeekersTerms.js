import React, { Component } from 'react';
import Footer from '../components/Nav/footer';
import { LeadSpace } from '@carbon/ibmdotcom-react';
import { Accordion, AccordionItem } from 'carbon-components-react';
import parse from 'html-react-parser';

class JobSeekersTerms extends Component {
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
            title={this.state.job_seekers_terms.leadspace.title}
            copy={this.state.job_seekers_terms.leadspace.subtitle}
            gradient={false}
            image={{
              sources: [
                {
                  src: this.state.job_seekers_terms.leadspace.background_image
                    .small,
                  breakpoint: 'sm',
                },
                {
                  src: this.state.job_seekers_terms.leadspace.background_image
                    .medium,
                  breakpoint: 'md',
                },
              ],
              defaultSrc: this.state.job_seekers_terms.leadspace
                .background_image.large,
              alt: 'leadspace image',
            }}
          />
        </div>

        <div className="th--terms">
          <div className="bx--row">
            <div className="bx--col-lg-3" />
            <div className="bx--col-lg-10">
              <p>
                <b>Acceptance of the Terms of Use</b>
              </p>
              <p>
                These terms of use are entered into by and between You and
                TALENTZOOM LLC (<b>"Company,"</b> <b>"we,"</b> or <b>"us"</b>).
                The following terms and conditions <b>("Terms of Use")</b>{' '}
                govern your access to and use of www.TalentZoom.io, including
                any content, functionality, and services offered on or through
                www.TalentZoom.io (<b>the "Website"</b> or <b>“Platform”</b>),
                whether as a guest or a registered user.
              </p>
              <p>
                Please read the Terms of Use carefully before you start to use
                the Website.{' '}
                <b>
                  By using the Website, you accept and agree to be bound and
                  abide by these Terms of Use and our <a href='/privacy' style={{color: "#0f62fe", textDecoration: "underline"}}>Privacy Policy</a>,
                  incorporated herein by reference.
                </b>{' '}
                If you do not want to agree to these Terms of Use or the <a href='/privacy' style={{color: "#0f62fe", textDecoration: "underline", fontWeight: "bold"}}>Privacy
                Policy</a>, you are not permitted to access or use the Website.{' '}
              </p>
              <p>
                This Website is offered and available to users who are 18 years
                of age or older and reside in the United States or any of its
                territories or possessions. By using this Website, you represent
                and warrant that you are of legal age to form a binding contract
                with the Company and meet all of the foregoing eligibility
                requirements. If you do not meet all of these requirements, you
                must not access or use the Website.
              </p>
              <p>
                <b>Changes to the Terms of Use</b>
              </p>
              <p>
                We may revise and update these Terms of Use from time to time in
                our sole discretion. All changes are effective immediately when
                we post them, and apply to all access to and use of the Website
                thereafter. However, any changes to the dispute resolution
                provisions set out in Governing Law and Jurisdiction will not
                apply to any disputes for which the parties have actual notice
                before the date the change is posted on the Website.
              </p>
              <p>
                Your continued use of the Website following the posting of
                revised Terms of Use means that you accept and agree to the
                changes. You are expected to check this page from time to time
                so you are aware of any changes, as they are binding on you.{' '}
              </p>
              <p>
                <b>Description of our Services</b>
              </p>
              <p>
                TalentZoom is an online recruiting marketplace. We serve as the
                connection between those seeking employment{' '}
                <b>(“Job Seekers”)</b> and entities seeking to hire{' '}
                <b>(“Employers”)</b>. Registered Job Seekers may be matched with
                an Employer. When matched with an Employer, your information
                will be accessible by the matched Employer. The matched Employer
                can also ask for additional information about you. The matched
                Employer may ultimately request an interview, which you may, in
                your sole discretion, accept or reject. Your interaction with an
                Employer may result in the Employer extending you an offer for
                employment, which of course, you may, in your sole discretion,
                accept or reject.
              </p>
              <p>
                <b>Registration</b>
              </p>
              <p>
                In order to access and use the Website, you must register by
                creating a Job Seeker account. We are under no obligation to
                accept any individual as a Job Seeker, and may accept or reject
                any registration in our sole and complete discretion. During
                registration, you will be asked to provide certain personal
                information, including without limitation, your name, email
                address, and phone number. By your registration, you are
                warranting that all information you submit to us is truthful,
                complete and accurate. You also promise to maintain the accuracy
                of such information, and to promptly make any changes. We
                reserve the right to delete or change your Job Seeker account at
                any time and for any reason.
              </p>
              <p>
                You will also be required to create a password for your account.
                You are responsible for the confidentiality of your Job Seeker
                account and for the activity that occurs on the account.
                TalentZoom will not be liable for any losses caused by any
                unauthorized use of your Job Seeker account. Use of another
                user’s account without permission is prohibited.
              </p>
              <p>
                <b>Contractors</b>
              </p>
              <p>
                If you are hired by an Employer on a contractor basis, Employer
                will not pay you directly but instead, your engagement will be
                managed by Alleanza Partners, which will operate as the employer
                of record. Alleanza will be responsible for all Job Seeker
                contractor compensation, including, if applicable, payroll and
                payroll taxes, worker’s compensation, unemployment insurance,
                and health insurance.{' '}
              </p>
              <p>
                <b>Fees</b>
              </p>
              <p>
                There is no cost to Job Seeker for access to the Website.
                TalentZoom may receive a fee from Employers under certain
                circumstances.
              </p>
              <p>
                <b>Accessing the Website and Account Security</b>
              </p>
              <p>
                We reserve the right to withdraw or amend this Website, and any
                service or material we provide on the Website, in our sole
                discretion without notice. We will not be liable if for any
                reason all or any part of the Website is unavailable at any time
                or for any period. From time to time, we may restrict access to
                some parts of the Website, or the entire Website, to users,
                including registered users.
              </p>
              <p>You are responsible for both:</p>
              <ul>
                <li>
                  Making all arrangements necessary for you to have access to
                  the Website.
                </li>
                <li>
                  Ensuring that all persons who access the Website through your
                  internet connection are aware of these Terms of Use and comply
                  with them.
                </li>
              </ul>
              <p>
                To access the Website or some of the resources it offers, you
                may be asked to provide certain registration details or other
                information. It is a condition of your use of the Website that
                all the information you provide on the Website is correct,
                current, and complete. You agree that all information you
                provide to register with this Website or otherwise, including,
                but not limited to, through the use of any interactive features
                on the Website, is governed by our <a href='/privacy' style={{color: "#0f62fe", textDecoration: "underline", fontWeight: "bold"}}>Privacy Policy</a>, and you
                consent to all actions we take with respect to your information
                consistent with our <a href='/privacy' style={{color: "#0f62fe", textDecoration: "underline", fontWeight: "bold"}}>Privacy Policy</a>.
              </p>
              <p>
                If you choose, or are provided with, a username, password, or
                any other piece of information as part of our security
                procedures, you must treat such information as confidential, and
                you must not disclose it to any other person or entity. You also
                acknowledge that your account is personal to you and agree not
                to provide any other person with access to this Website or
                portions of it using your username, password, or other security
                information. You agree to notify us immediately of any
                unauthorized access to or use of your username or password or
                any other breach of security. You also agree to ensure that you
                exit from your account at the end of each session. You should
                use particular caution when accessing your account from a public
                or shared computer so that others are not able to view or record
                your password or other personal information.
              </p>
              <p>
                We have the right to disable any username, password, or other
                identifier, whether chosen by you or provided by us, at any time
                in our sole discretion for any or no reason, including if, in
                our opinion, you have violated any provision of these Terms of
                Use.
              </p>
              <p>
                <b>Intellectual Property Rights</b>
              </p>
              <p>
                The Website and its entire contents, features, and functionality
                (including but not limited to all information, software, text,
                displays, images, video, and audio, and the design, selection,
                and arrangement thereof) are owned by the Company, its
                licensors, or other providers of such material and are protected
                by United States and international copyright, trademark, patent,
                trade secret, and other intellectual property or proprietary
                rights laws.
              </p>
              <p>
                These Terms of Use permit you to use the Website for your
                personal, non-commercial use only. You must not reproduce,
                distribute, modify, create derivative works of, publicly
                display, publicly perform, republish, download, store, or
                transmit any of the material on our Website, except as follows:
              </p>
              <ul>
                <li>
                  Your computer may temporarily store copies of such materials
                  in RAM incidental to your accessing and viewing those
                  materials.
                </li>
                <li>
                  You may store files that are automatically cached by your Web
                  browser for display enhancement purposes.
                </li>
                <li>
                  You may print or download one copy of a reasonable number of
                  pages of the Website for your own personal, non-commercial use
                  and not for further reproduction, publication, or
                  distribution.
                </li>
              </ul>
              <p>You must not:</p>
              <ul>
                <li>Modify copies of any materials from this site.</li>
                <li>
                  Use any illustrations, photographs, video or audio sequences,
                  or any graphics separately from the accompanying text.
                </li>
                <li>
                  Delete or alter any copyright, trademark, or other proprietary
                  rights notices from copies of materials from this site.
                </li>
              </ul>
              <p>
                You must not access or use for any commercial purposes any part
                of the Website or any services or materials available through
                the Website.
              </p>
              <p>
                If you print, copy, modify, download, or otherwise use or
                provide any other person with access to any part of the Website
                in breach of the Terms of Use, your right to use the Website
                will stop immediately and you must, at our option, return or
                destroy any copies of the materials you have made. No right,
                title, or interest in or to the Website or any content on the
                Website is transferred to you, and all rights not expressly
                granted are reserved by the Company. Any use of the Website not
                expressly permitted by these Terms of Use is a breach of these
                Terms of Use and may violate copyright, trademark, and other
                laws.
              </p>
              <p>
                <b>Trademarks</b>
              </p>
              <p>
                The Company name and all related names, logos, product and
                service names, designs, and slogans are trademarks of the
                Company or its affiliates or licensors. You must not use such
                marks without the prior written permission of the Company. All
                other names, logos, product and service names, designs, and
                slogans on this Website are the trademarks of their respective
                owners.
              </p>
              <p>
                <b>Prohibited Uses</b>
              </p>
              <p>
                You may use the Website only for lawful purposes and in
                accordance with these Terms of Use. You agree not to use the
                Website:
              </p>
              <ul>
                <li>
                  In any way that violates any applicable federal, state, local,
                  or international law or regulation (including, without
                  limitation, any laws regarding the export of data or software
                  to and from the US or other countries).{' '}
                </li>
                <li>
                  For the purpose of exploiting, harming, or attempting to
                  exploit or harm minors in any way by exposing them to
                  inappropriate content, asking for personally identifiable
                  information, or otherwise.
                </li>
                <li>
                  To send, knowingly receive, upload, download, use, or re-use
                  any material that does not comply with the Content Standards
                  set out in these Terms of Use.
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or
                  promotional material, including any "junk mail," "chain
                  letter," "spam," or any other similar solicitation.
                </li>
                <li>
                  To impersonate or attempt to impersonate the Company, a
                  Company employee, another user, or any other person or entity
                  (including, without limitation, by using email addresses or
                  screen names associated with any of the foregoing).
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits
                  anyone's use or enjoyment of the Website, or which, as
                  determined by us, may harm the Company or users of the
                  Website, or expose them to liability
                </li>
              </ul>
              <p>Additionally, you agree not to:</p>
              <ul>
                <li>
                  Use the Website in any manner that could disable, overburden,
                  damage, or impair the Website or interfere with any other
                  party's use of the Website, including their ability to engage
                  in real time activities through the Website.
                </li>
                <li>
                  Use any robot, spider, or other automatic device, process, or
                  means to access the Website for any purpose, including
                  monitoring or copying any of the material on the Website.
                </li>
                <li>
                  Use any manual process to monitor or copy any of the material
                  on the Website, or for any other purpose not expressly
                  authorized in these Terms of Use, without our prior written
                  consent.
                </li>
                <li>
                  Use any device, software, or routine that interferes with the
                  proper working of the Website.
                </li>
                <li>
                  Introduce any viruses, Trojan horses, worms, logic bombs, or
                  other material that is malicious or technologically harmful.
                </li>
                <li>
                  Attempt to gain unauthorized access to, interfere with,
                  damage, or disrupt any parts of the Website, the server on
                  which the Website is stored, or any server, computer, or
                  database connected to the Website.{' '}
                </li>
                <li>
                  Attack the Website via a denial-of-service attack or a
                  distributed denial-of-service attack.
                </li>
                <li>
                  Otherwise attempt to interfere with the proper working of the
                  Website.
                </li>
              </ul>
              <p>
                <b>Monitoring and Enforcement; Termination</b>
              </p>
              <p>We have the right to:</p>
              <p>
                <ul>
                  <li>
                    Remove or refuse to post any of your content for any or no
                    reason in our sole discretion.
                  </li>
                  <li>
                    Take any action with respect to any of your content that we
                    deem necessary or appropriate in our sole discretion,
                    including if we believe that such content violates the Terms
                    of Use, infringes any intellectual property right or other
                    right of any person or entity, threatens the personal safety
                    of users of the Website or the public, or could create
                    liability for the Company.
                  </li>
                  <li>
                    Disclose your identity or other information about you to any
                    third party who claims that material posted by you violates
                    their rights, including their intellectual property rights
                    or their right to privacy.
                  </li>

                  <li>
                    Take appropriate legal action, including without limitation,
                    referral to law enforcement, for any illegal or unauthorized
                    use of the Website.
                  </li>
                  <li>
                    Terminate or suspend your access to all or part of the
                    Website for any or no reason, including without limitation,
                    any violation of these Terms of Use.
                  </li>
                </ul>
              </p>
              <p>
                Without limiting the foregoing, we have the right to cooperate
                fully with any law enforcement authorities or court order
                requesting or directing us to disclose the identity or other
                information of anyone posting any materials on or through the
                Website. YOU WAIVE AND HOLD HARMLESS THE COMPANY AND ITS
                AFFILIATES, LICENSEES, AND SERVICE PROVIDERS FROM ANY CLAIMS
                RESULTING FROM ANY ACTION TAKEN BY THE COMPANY/ANY OF THE
                FOREGOING PARTIES DURING, OR TAKEN AS A CONSEQUENCE OF,
                INVESTIGATIONS BY EITHER THE COMPANY/SUCH PARTIES OR LAW
                ENFORCEMENT AUTHORITIES.
              </p>
              <p>
                Notwithstanding the foregoing, we do not undertake to review all
                material before it is posted on the Website, and cannot ensure
                prompt removal of objectionable material after it has been
                posted. Accordingly, we assume no liability for any action or
                inaction regarding transmissions, communications, or content
                provided by any user or third party. We have no liability or
                responsibility to anyone for performance or nonperformance of
                the activities described in this section.
              </p>
              <p>
                <b>Job Seeker Content</b>
              </p>
              <p>
                You may post and upload content related to your job search
                including but not limited to, your resume / CV and job
                preferences (collectively, the <b>“Job Seeker Content”</b>), and
                by posting same, you grant us a license to it (described below).
                Your Job Seeker Content will be accessible by Employers. There
                is no confidentiality or privacy with respect to your Job Seeker
                Content, including, without limitation, any personally
                identifying information that you may make available within your
                Job Seeker Content. You are responsible for all Job Seeker
                Content that you upload, post, e-mail, or otherwise transmit via
                the Website.
              </p>
              <p>
                You hereby grant TalentZoom a non-exclusive, royalty-free,
                sublicensable, transferable, perpetual license to modify,
                compile, combine with other content, copy, record, synchronize,
                transmit, translate, format, distribute, publicly display,
                publicly perform, and otherwise use or exploit your Job Seeker
                Content as reasonably necessary to provide the services to you
                under these Terms of Service.
              </p>
              <p>
                <b>Content Standards</b>
              </p>
              <p>
                These content standards apply to Job Seeker Content and any and
                all other user contributions. User contributions must in their
                entirety comply with all applicable federal, state, local, and
                international laws and regulations. Without limiting the
                foregoing, user contributions must not:
              </p>
              <ul>
                <li>
                  Contain any material that is defamatory, obscene, indecent,
                  abusive, offensive, harassing, violent, hateful, inflammatory,
                  or otherwise objectionable.
                </li>
                <li>
                  Promote sexually explicit or pornographic material, violence,
                  or discrimination based on race, sex, religion, nationality,
                  disability, sexual orientation, or age.
                </li>
                <li>
                  Infringe any patent, trademark, trade secret, copyright, or
                  other intellectual property or other rights of any other
                  person.
                </li>
                <li>
                  Violate the legal rights (including the rights of publicity
                  and privacy) of others or contain any material that could give
                  rise to any civil or criminal liability under applicable laws
                  or regulations or that otherwise may be in conflict with these
                  Terms of Use and our <a href='/privacy' style={{color: "#0f62fe", textDecoration: "underline", fontWeight: "bold"}}>Privacy Policy</a>.
                </li>
                <li>Be likely to deceive any person.</li>
                <li>
                  Promote any illegal activity, or advocate, promote, or assist
                  any unlawful act.
                </li>
                <li>
                  Cause annoyance, inconvenience, or needless anxiety or be
                  likely to upset, embarrass, alarm, or annoy any other person.
                </li>
                <li>
                  Impersonate any person, or misrepresent your identity or
                  affiliation with any person or organization.{' '}
                </li>
                <li>
                  Involve commercial activities or sales, such as contests,
                  sweepstakes, and other sales promotions, barter, or
                  advertising.
                </li>
                <li>
                  Give the impression that they emanate from or are endorsed by
                  us or any other person or entity, if this is not the case.
                </li>
              </ul>
              <p>
                <b>Copyright Infringement</b>
              </p>
              <p>
                TalentZoom will review all claims of copyright infringement
                received and remove any content or user submissions deemed to
                have been posted or distributed in violation of any such laws.
              </p>
              <p>
                If you believe that your work has been copied on the Website in
                a way that constitutes copyright infringement, please provide
                notice in accordance with the requirements of the Act, including
                (a) a description of the copyrighted work that has been
                infringed and the specific location on the Website where such
                work is located; (b) a description of the location of the
                original or an authorized copy of the copyrighted work; (c) your
                address, telephone number and e-mail address; (d) a statement by
                you that (i) you have a good faith belief that the disputed use
                is not authorized by the copyright owner, its agent or the law;
                and (ii) the information in your notice is accurate and that you
                are the copyright owner or authorized to act on the copyright
                owner’s behalf.
              </p>
              <p>
                <b>Reliance on Information Posted</b>
              </p>
              <p>
                The information presented on or through the Website is made
                available solely for general information purposes. We do not
                warrant the accuracy, completeness, or usefulness of this
                information. Any reliance you place on such information is
                strictly at your own risk. We disclaim all liability and
                responsibility arising from any reliance placed on such
                materials by you or any other visitor to the Website, or by
                anyone who may be informed of any of its contents.
              </p>
              <p>
                This Website may include content provided by third parties,
                including materials provided by other users, bloggers, and
                third-party licensors, syndicators, aggregators, and/or
                reporting services. All statements and/or opinions expressed in
                these materials, and all articles and responses to questions and
                other content, other than the content provided by the Company,
                are solely the opinions and the responsibility of the person or
                entity providing those materials. These materials do not
                necessarily reflect the opinion of the Company. We are not
                responsible, or liable to you or any third party, for the
                content or accuracy of any materials provided by any third
                parties.
              </p>
              <p>
                <b>Changes to the Website</b>
              </p>
              <p>
                We may update the content on this Website from time to time, but
                its content is not necessarily complete or up-to-date. Any of
                the material on the Website may be out of date at any given
                time, and we are under no obligation to update such material.
              </p>
              <p>
                <b>Information About You and Your Visits to the Website</b>
              </p>
              <p>
                All information we collect on this Website is subject to our 
                <a href='/privacy' style={{color: "#0f62fe", textDecoration: "underline", fontWeight: "bold"}}> Privacy Policy</a>. By using the Website, you consent to all actions
                taken by us with respect to your information in compliance with
                the <a href='/privacy' style={{color: "#0f62fe", textDecoration: "underline", fontWeight: "bold"}}>Privacy Policy</a>.
              </p>
              <p>
                <b>Links from the Website</b>
              </p>
              <p>
                If the Website contains links to other sites and resources
                provided by third parties, these links are provided for your
                convenience only. This includes links contained in
                advertisements, including banner advertisements and sponsored
                links. We have no control over the contents of those sites or
                resources, and accept no responsibility for them or for any loss
                or damage that may arise from your use of them. If you decide to
                access any of the third-party websites linked to this Website,
                you do so entirely at your own risk and subject to the terms and
                conditions of use for such websites.
              </p>
              <p>
                <b>Geographic Restrictions</b>
              </p>
              <p>
                The owner of the Website is based in the State of New York in
                the United States. We provide this Website for use only by
                persons located in the United States. We make no claims that the
                Website or any of its content is accessible or appropriate
                outside of the United States. Access to the Website may not be
                legal by certain persons or in certain countries. If you access
                the Website from outside the United States, you do so on your
                own initiative and are responsible for compliance with local
                laws.
              </p>

              <p>
                <b>Disclaimer of Warranties</b>
              </p>
              <p>
                TalentZoom is not involved in any contract of employment and is
                not bound by any contractual agreement arising between Job
                Seekers and Employers, whether or not TalentZoom receives some
                form of remuneration in connection with the transaction. You
                understand that we cannot and do not guarantee or warrant that
                files available for downloading from the internet or the Website
                will be free of viruses or other destructive code. You are
                responsible for implementing sufficient procedures and
                checkpoints to satisfy your particular requirements for
                anti-virus protection and accuracy of data input and output, and
                for maintaining a means external to our site for any
                reconstruction of any lost data. TO THE FULLEST EXTENT PROVIDED
                BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A
                DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER
                TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER
                EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY
                MATERIAL DUE TO YOUR USE OF THE WEBSITE OR ANY SERVICES OR ITEMS
                OBTAINED THROUGH THE WEBSITE OR TO YOUR DOWNLOADING OF ANY
                MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.
              </p>
              <p>
                YOUR USE OF THE WEBSITE, ITS CONTENT, AND ANY SERVICES OR ITEMS
                OBTAINED THROUGH THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE,
                ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE
                WEBSITE ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS,
                WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY
                MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE
                COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR
                AVAILABILITY OF THE WEBSITE. WITHOUT LIMITING THE FOREGOING,
                NEITHER THE COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY
                REPRESENTS OR WARRANTS THAT THE WEBSITE, ITS CONTENT, OR ANY
                SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE WILL BE ACCURATE,
                RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE
                CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE
                ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE
                WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE
                WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
              </p>
              <p>
                TO THE FULLEST EXTENT PROVIDED BY LAW, THE COMPANY HEREBY
                DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
                IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO
                ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS
                FOR PARTICULAR PURPOSE.
              </p>
              <p>
                THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE
                EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
              </p>
              <p>
                <b>Limitation on Liability</b>
              </p>
              <p>
                TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE
                COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS,
                EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES
                OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN
                CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY
                WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER
                WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED
                TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS,
                LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR
                ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF
                DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH
                OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.
              </p>
              <p>
                The limitation of liability set out above does not apply to
                liability resulting from our gross negligence or willful
                misconduct.
              </p>
              <p>
                THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE
                EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
              </p>
              <p>
                <b>Indemnification</b>
              </p>
              <p>
                You agree to defend, indemnify, and hold harmless the Company,
                its affiliates, licensors, and service providers, and its and
                their respective officers, directors, employees, contractors,
                agents, licensors, suppliers, successors, and assigns from and
                against any claims, liabilities, damages, judgments, awards,
                losses, costs, expenses, or fees (including reasonable
                attorneys' fees) arising out of or relating to your violation of
                these Terms of Use or your use of the Website, including, but
                not limited to, your User Contributions, any use of the
                Website's content, services, and products other than as
                expressly authorized in these Terms of Use, or your use of any
                information obtained from the Website.
              </p>
              <p>
                <b>Governing Law and Jurisdiction</b>
              </p>
              <p>
                All matters relating to the Website and these Terms of Use, and
                any dispute or claim arising therefrom or related thereto (in
                each case, including non-contractual disputes or claims), shall
                be governed by and construed in accordance with the internal
                laws of the State of New York without giving effect to any
                choice or conflict of law provision or rule (whether of the
                State of New York or any other jurisdiction).
              </p>
              <p>
                Any legal suit, action, or proceeding arising out of, or related
                to, these Terms of Use or the Website shall be instituted
                exclusively in the federal courts of the United States or the
                courts of the State of New York, in each case located in the
                County of Nassau, although we retain the right to bring any
                suit, action, or proceeding against you for breach of these
                Terms of Use in your country of residence or any other relevant
                country. You waive any and all objections to the exercise of
                jurisdiction over you by such courts and to venue in such
                courts.
              </p>
              <p>
                <b>Arbitration</b>
              </p>
              <p>
                READ THIS SECTION CAREFULLY BECAUSE IT LIMITS YOUR RIGHTS TO
                INITIATE LITIGATION
              </p>
              <p>
                For any dispute with TalentZoom, you and TalentZoom agree to use
                their best efforts to settle any dispute, claim, question, or
                disagreement arising out of or relating to the subject matter of
                these Terms directly through good-faith negotiations, which
                shall be a precondition to either party initiating arbitration.
                IF SUCH NEGOTIATIONS DO NOT RESOLVE THE DISPUTE, IT SHALL BE
                FINALLY SETTLED BY BINDING ARBITRATION IN NEW YORK COUNTY, NEW
                YORK. THE ARBITRATION WILL PROCEED IN THE ENGLISH LANGUAGE, IN
                ACCORDANCE WITH THE JAMS STREAMLINED ARBITRATION RULES AND
                PROCEDURES (THE “RULES”) THEN IN EFFECT, BY ONE COMMERCIAL
                ARBITRATOR SELECTED IN ACCORDANCE WITH SUCH RULES. JUDGMENT UPON
                THE AWARD RENDERED BY SUCH ARBITRATOR MAY BE ENTERED IN ANY
                COURT OF COMPETENT JURISDICTION.
              </p>
              <p>
                Notwithstanding the foregoing obligation to arbitrate disputes,
                either you or TalentZoom may assert claims, if they qualify, in
                small claims court in Nassau County, New York or any United
                States county where you live or work. Furthermore,
                notwithstanding the foregoing obligation to arbitrate disputes,
                each party shall have the right to pursue injunctive or other
                equitable relief at any time, from any court of competent
                jurisdiction, to prevent the actual or threatened infringement,
                misappropriation or violation of a party's copyrights,
                trademarks, trade secrets, patents or other intellectual
                property rights.
              </p>
              <p>
                UNLESS OTHERWISE PROHIBITED BY LAW, ALL CLAIMS AND DISPUTES
                WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE
                ARBITRATED OR LITIGATED ON AN INDIVIDUAL BASIS AND NOT ON A
                CLASS BASIS. CLAIMS OF MORE THAN ONE PERSON CANNOT BE ARBITRATED
                OR LITIGATED JOINTLY OR CONSOLIDATED WITH THOSE OF ANY OTHER
                PERSON.
              </p>
              <p>
                You have the right to opt out of the requirement to arbitrate
                your claims by sending written notice of your decision to opt
                out to the following address: TalentZoom, Attn: Arbitration
                Opt-Out,
                _________________________________________________________,
                postmarked within thirty (30) days of first accepting these
                Terms. You must include (i) your name and residence address,
                (ii) the email address and/or telephone number associated with
                your account, and (iii) a clear statement that you want to opt
                out of the requirement to arbitrate your claims.
              </p>
              <p>
                If you send the opt-out notice, and/or in any circumstances
                where the foregoing arbitration agreement permits either you or
                TalentZoom to litigate any dispute arising out of or relating to
                the subject matter of these Terms in court, then the foregoing
                arbitration agreement will not apply to either party, and both
                you and TalentZoom agree that any judicial proceeding (other
                than small claims actions) will be brought in the state or
                federal courts located in, respectively, Nassau County, New
                York, or the federal district in which that county falls. IF A
                CLAIM PROCEEDS IN COURT RATHER THAN IN ARBITRATION TALENTZOOM
                AND EACH USER HEREBY EXPRESSLY WAIVE ALL RIGHTS, IF ANY, TO
                TRIAL BY JURY WITH RESPECT TO ANY SUCH ACTION OR PROCEEDING.
              </p>
              <p>
                If the prohibition against class actions and other claims
                brought on behalf of third parties contained above is found to
                be unenforceable, then all of the preceding language requiring
                that you arbitrate disputes in this Arbitration Agreement
                section will be null and void.
              </p>
              <p>
                <b>Waiver and Severability</b>
              </p>

              <p>
                No waiver by the Company of any term or condition set out in
                these Terms of Use shall be deemed a further or continuing
                waiver of such term or condition or a waiver of any other term
                or condition, and any failure of the Company to assert a right
                or provision under these Terms of Use shall not constitute a
                waiver of such right or provision.
              </p>
              <p>
                If any provision of these Terms of Use is held by a court or
                other tribunal of competent jurisdiction to be invalid, illegal,
                or unenforceable for any reason, such provision shall be
                eliminated or limited to the minimum extent such that the
                remaining provisions of the Terms of Use will continue in full
                force and effect.
              </p>
              <p><b>Miscellaneous</b></p>
              <p>The Terms of Use, and our <a href='/privacy' style={{color: "#0f62fe", textDecoration: "underline", fontWeight: "bold"}}>Privacy Policy</a> constitute the sole and entire agreement between you and TalentZoom regarding the Website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Website. </p>
              <p>The section headings in these Terms of Service are provided merely for convenience and shall not be given any legal import.</p>
              <p>By providing TalentZoom your email address you consent to TalentZoom sending you notices, including any notices required by law, in lieu of communication by postal mail. We may also use your email address to send you other messages, such as changes to features of the Website and special offers.</p>
              <p>Please contact us at info@TalentZoom.io with any questions regarding these Terms of Service.</p>
            </div>

          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default JobSeekersTerms;
