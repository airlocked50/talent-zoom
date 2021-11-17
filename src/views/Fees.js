import React, { Component } from 'react';
import Footer from '../components/Nav/footer';
import { LeadSpace } from '@carbon/ibmdotcom-react';

class Fees extends Component {
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
            title="Fee Schedule"
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
                This Fee Schedule is incorporated by reference and governed by
                the Employer Terms of Service. In the event of a conflict
                between this Fee Schedule and the Employer Terms of Service,
                this Fee Schedule shall prevail.
              </p>
              <p>
                <b>Direct Placement:</b>
              </p>
              <p>
                Employer is required to notify TalentZoom within fifteen (15)
                days of a Job Seeker accepting a Job Offer if a Job Seeker
                identified through our Website accepts a Job Offer from you
                within twelve (12) months of the date on which the Employer
                first viewed the Job Seeker through the Website. Upon the
                acceptance by a Job Seeker of a Job Offer, Employer will be
                charged a hiring fee (the “Employer Fee”), which equals 10-12% of
                such Job Seeker’s base salary. The Employer Fee shall be paid
                within thirty (30) days of the Job Seeker’s start date. Should
                the Candidate resign or be terminated (for any reason other than
                reduction in workforce, layoff, or significant change in the
                nature of the position for which the Candidate was hired) prior
                to thirty (30) days from the start date, the Placement Fee will
                be refunded following written notice by CLIENT of the
                Candidate’s departure within thirty (30) days of the Candidate’s
                exit date.
              </p>
              <p>
                If Employer fails to notify TalentZoom of an accepted Job Offer
                and/or fails to pay the Employer Fee due, then Employer agrees
                to pay an Employer Fee which equals 30% of the Job seeker’s base
                salary.
              </p>
              <p>
                <b>Contract Engagement:</b>
              </p>
              <p>
                If a Job Seeker is offered employment or engagement on a
                temporary or contractor basis (<b>“Contractor Engagement”</b>)
                within twelve (12) months of the date on which Employer first
                matched with the Job Seeker through the Website, you may request
                from TalentZoom, in advance, that such offer be considered an
                authorized Contractor Engagement, and if approved by TalentZoom
                in writing as qualifying as a Contractor Engagement (an{' '}
                <b>“Authorized Contractor Engagement”</b>), then the following
                fees (the <b>“Contractor Engagement Fee”</b>) will apply instead
                of the Employer Fee set forth above.
              </p>
              <ol>
                <li>
                  For Authorized Contractor Engagements where Employer contracts
                  with the Job Seeker (a Job Seeker retained through an
                  Authorized Contractor Engagement hereinafter referred to as
                  <b>“Contractor”</b>) directly or utilizing Employer’s own
                  vendor other than TalentZoom’s affiliate Employer of Record,
                  ESSG (<b>“Agency”</b>), the Contractor Engagement Fee for such
                  Authorized Contractor Engagement shall be 30% of the hourly
                  pay rate for every hour worked on contract payable by Employer
                  to TalentZoom on the first day of Contractor’s services and
                  monthly thereafter for so long as Contractor remains employed,
                  retained or engaged by Employer.{' '}
                </li>
                <li>
                  <p>
                    For Authorized Contractor Engagements, Contractor will be
                    employed with TalentZoom’s Employer of Record, ESSG (
                    <b>“Agency”</b>). Agency manages and operates as the
                    employer of record for all such Authorized Contractor
                    Engagements. Agency shall be responsible for all
                    compensation payable to such EOR Contractor, including, but
                    not limited to, if applicable, payroll and payroll taxes,
                    worker’s compensation and unemployment insurance, and health
                    insurance. For Authorized Contractor Engagements pursuant to
                    which Agency acts as Employer of Record, Agency will invoice
                    Employer on a weekly basis in accordance with Agency’s
                    standard invoicing guidelines at prices based on the bill
                    rates and overtime rates for assigned contractor set forth
                    in Agency’s approved rate sheets.
                  </p>
                  <p>
                    The official records of hours worked by EOR Contractors
                    retained under Authorized Contractor Engagements shall be
                    determined by either Employers or Agency’s online
                    timekeeping system. Employer shall approve all electronic
                    timesheets submitted by contractor within twenty-four (24)
                    hours of the agreed approval time. It is understood and
                    agreed that Employer’s failure to edit, dispute or correct a
                    timesheet within twenty-four (24) hours of the approval
                    deadline shall constitute approval of that timesheet and
                    agreement to pay for the time reported.{' '}
                  </p>{' '}
                  <p>
                    Employer shall pay all invoiced amounts within 30 days of
                    receipt of invoice. Employer agrees to pay overtime
                    compensation as required by law. Employer also agrees to
                    billable holiday time and personal time off as set forth by
                    Agency.{' '}
                  </p>{' '}
                </li>
              </ol>
              <p>
                If Employer directly hires an EOR Contractor (such person
                hereinafter <b>“Direct Employee”</b>), Employer shall-pay to
                TalentZoom a conversion fee equal to 1% per month of such Direct
                Employee’s Base Salary (<b>“Direct Employee Fee”</b>) for twelve
                (12) months less the number of months of contract services
                completed. The Direct Employee Fee shall be paid within thirty
                (30) days of the conversion of EOR Contractor to a Direct
                Employee, and by the 30thday of each calendar month thereafter
                for the first twelve (12) months of such Direct Employee’s
                employment with Employer. All sales, and similar taxes
                applicable to the Direct Employee Fee are exclusive of such Fee
                and shall be due from Employer in addition to the Direct
                Employee Fee.
              </p>
              <p>
                <b>Employer of Record Services:</b>
              </p>
              <p>
                In the event Customer does not want to directly employ a
                Professional who provides Services on behalf of Customer,
                Customer shall use the staffing service employer. TalentZoom has
                contracted with third parties, currently Employer Solutions
                Staffing Group, LLC (ESSG) (the “Third Party Employer” or “ESSG)
                and Alleanza Partners to provide Staffing employer services. For
                each Professional identified by Customer for whom ESSG will be
                the employer (each such Professional referred to as an “ESSG
                Professional”), ESSG will: (i) pay all wages, per the hourly
                rates as agreed by Customer; (ii) withhold applicable payroll
                taxes; (iii) make required payments for social security,
                Medicare, unemployment, workers’ compensation and other
                applicable payments as requested by Professional, and (iv) if
                requested by TalentZoom, conduct background checks and /or drug
                tests in accordance with applicable law as to ESSG
                Professional(Customer to be responsible for the costs of such
                checks and /or tests). ESSG shall not be responsible for
                Professional credentialing or verifying such credentialing.
                Customer acknowledges and agrees that each ESSG Professional
                will be classified as a non-exempt, hourly employee and will be
                subject to overtime pay requirements applicable in Customer’s
                jurisdiction. Notwithstanding, the role of ESSG as the employer
                of the ESSG Professionals, Customer shall continue to comply
                with all employment and labor laws, including but not limited to
                those laws regarding discrimination, sexual harassment, wrongful
                termination or other labor-related laws and continue to be
                solely responsible for satisfying the Professional’s
                credentialing requirements. Customer expressly agrees that ESSG
                is intended to be, and shall have the rights of, a third-party
                beneficiary of these Terms of Service.
              </p>
              <p>
                It is the intent of the Parties that ESSG Professionals subject
                to Staffing employer services will not be eligible to
                participate in any benefit plans of Customer, such as group
                insurance, profit-sharing or retirement benefits. ESSG shall
                require all ESSG Professionals to execute an agreement to waiver
                providing they have no claim against Customer for vacation pay,
                sick leave, retirement benefits, social security, workers’
                compensation, health, disability, or unemployment insurance
                benefits or other employee benefits of any kind. TalentZoom
                cannot assure that Customer’s state labor and employment laws
                will not require Customer to provide Professionals with such
                benefits. Customer shall provide TalentZoom, via the TalentZoom
                Platform, with the number of work hours each ESSG Professional
                worked for Customer during the applicable work week no later
                than end of Monday immediately following the prior work week.
                Hours not approved by end of day Tuesday will be processed as
                automatically approved. A work week shall start on a Sunday and
                end on the following Saturday.
              </p>
              <p>
                <b>Technology Platform:</b>
              </p>
              <p>
                TalentZoom and Customer will conduct transactions and view
                historical information via the Technology Platform. TalentZoom
                and Customer hereby consent to and authorize the Technology
                Platform to act as the agent of ESSG. TalentZoom and Customer
                further agree to cooperate with all requests of the Technology
                Platform in connection with processing and compliance with all
                the requirements of these Terms of Service, including providing
                any documents or consents that may be requested from time to
                time by the Technology Platform in connection with these Terms
                of Service.
              </p>
              <p>
                <b>Supervision and Training:</b>
              </p>
              <p>
                Notwithstanding anything herein to the contrary in these Terms
                of Service, Customer acknowledges and agrees that Customer will
                set and administer each Professional’s pay rate, work hours,
                service dates, and working conditions Moreover, Customer
                acknowledges and agrees that Customer will provide each
                Professional with all training, equipment, labor, materials or
                supervision required for a Professional to become part of
                Customer’s workforce. CUSTOMER ACKNOWLEDGES AND AGREES THAT
                CUSTOMER WILL PROVIDE ALL WORK DIRECTION, SUPERVISION,
                MANAGEMENT, AND PRODUCTIVITY EXPECTATIONS OF ALL ESSG
                PROFESSIONALS AS REQUIRED BY LAW, CUSTOMER AND APPLICABLE
                INDUSTRY STANDARDS. CUSTOMER IS SOLELY RESPONSIBLE FOR EDUCATING
                ESSG PROFESSIONALS ON ALL OF CUSTOMER’S POLICIES AND PROCEDURES.
                CUSTOMER WILL NOT ASK OR REQUIRE ESSG PROFESSIONALS TO PERFORM
                ANY TASK OTHER THAN WHAT IS REASONABLE AND EXPECTED WITHIN THEIR
                DISCIPLINE, CONSISTENT WITH THEIR JOB DESCRIPTION, EDUCATION,
                LICENSING, CERTIFICATIONS, SKILLS AND TECHNICAL COMPETENCE.
              </p>
              <p>
                <b>Insurance:</b>
              </p>
              <p>
                TalentZoom does not provide or arrange for the provision any
                insurance coverage for any Professional. Customer agrees that it
                will provide all necessary insurance for all Professionals
                providing Services on behalf of Customer, except for those
                Professionals who are employed through the Third-Party Employer.
                Currently, the Third-Party Employer provides the following
                insurance coverage for ESSG Professionals subject to Staffing
                employer services. Coverage and amounts to be changed at the
                discretion of the Third-Party Employer, however, any decrease of
                coverage will be communicated to Customer.
              </p>
              <ul>
                <li>Commercial General Liability - $1,000,000</li>
                <li>Workers’ Compensation – Statutory Limits</li>
                <li>Employer’s Liability - $1,000,000</li>
                <li>Umbrella Liability - $10,000,000</li>
                <li>Professional/Staffing Liability - $1,000,000</li>
                <li>Medical Malpractice Insurance – $5,000,000</li>
                <li>Employee Dishonesty (Crime) Insurance - $1,000,000</li>
              </ul>
              <p>
                Nothing provided herein shall restrict Customer from maintaining
                insurance in addition to the insurance described above.
              </p>
              <p>
                The intent of this section of these Terms of Service is for
                Customer to provide insurance coverage for Professional’s acts
                or omissions while in the performance of services for Customer.
                Nothing herein shall require Customer to provide insurance
                coverage to the Professional that would apply outside of
                Professional’s performance of services for Customer.
              </p>
              <p>
                <b>Taxes</b>
              </p>
              <p>
                All sales, use and similar taxes applicable to the Fees set
                forth herein are exclusive of such Fees and shall be due from
                Employer in addition to the Fees set forth herein.
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Fees;
