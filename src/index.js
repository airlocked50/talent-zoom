import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/Home';
import JobSeekersFAQ from './views/JobSeekersFAQ';
import JobSeekersTerms from './views/JobSeekersTerms';
import Employers from './views/Employers';
import EmployersFAQ from './views/EmployersFAQ';
import EmployersTerms from './views/EmployersTerms';
import AboutUs from './views/AboutUs';
import LoginStep1 from '../src/views/talent/basics';
import LoginStep2 from '../src/views/talent/employment';
import LoginStep3 from '../src/views/talent/roles';
import LoginStep4 from '../src/views/talent/experience';
import LoginStep5 from '../src/views/talent/education';
import LoginStep6 from '../src/views/talent/skills';
import LoginStep7 from '../src/views/talent/salary';
import Summary from '../src/views/talent/summary';
import SignUp from '../src/views/signUp';
import CompanyStep1 from '../src/views/company/basics';
import CompanyStep2 from '../src/views/company/companyInformation';
import Contract from '../src/views/company/contract';
import CompanyStep3 from '../src/views/company/terms';
import CompanyStep4 from '../src/views/company/final';
import TalentProfile from '../src/views/talent/talentProfile';
import CompanyProfile from '../src/views/company/companyProfile';
import EmptyLoadPage from '../src/views/load/emptyLoadPage';
import LatestCandidates from '../src/views/company/inbox';
import TalentInbox from '../src/views/talent/inbox';

import TalentVerify from '../src/views/talent/talentVerify';
import CompanyVerify from '../src/views/company/companyVerify';
import ResetPasswordCompany from '../src/views/company/resetPasswordCompany';
import ResetPasswordTalent from '../src/views/talent/resetPasswordTalent';
import ChangePasswordTalent from '../src/views/talent/changePasswordTalent';
import ChangePasswordCompany from '../src/views/company/changePasswordCompany';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import store from './redux/store';
import Login from '../src/views/login';
import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router-dom';
import './index.scss';
import './index.css';
import Navbar from '../src/components/Nav/Navbar';
import { createBrowserHistory } from 'history';
import Privacy from './views/Privacy';
import Fees from './views/Fees';
import TagManager from 'react-gtm-module'


const tagManagerArgs = {
  gtmId: 'GTM-K7DG9JD'
}
TagManager.initialize(tagManagerArgs)
// GTM-K7DG9JD


const hist = createBrowserHistory();

fetch('/data.json')
  .then((r) => r.json())
  .then((data) =>{
    var json = JSON.stringify(data);
    ReactDOM.render(
      <Provider store={store}>
        <Navbar />
      <ChakraProvider>
      <Router history={hist}>
        <Switch>
          <Route exact path="/" isAuthed={true} render={(props) => ( <Home json={json} /> )} />
          <Route exact path="/job-seekers-faq" isAuthed={true} render={(props) => ( <JobSeekersFAQ json={json} /> )} />
          <Route exact path="/job-seekers-terms" isAuthed={true} render={(props) => ( <JobSeekersTerms json={json} /> )} />
          <Route exact path="/employers" isAuthed={true} render={(props) => ( <Employers json={json} /> )} />
          <Route exact path="/employers-faq" isAuthed={true} render={(props) => ( <EmployersFAQ json={json} /> )} />
          <Route exact path="/employers-terms" isAuthed={true} render={(props) => ( <EmployersTerms json={json} /> )} />
          <Route exact path="/about-us" isAuthed={true} render={(props) => ( <AboutUs json={json} /> )} />
          <Route exact path="/privacy" isAuthed={true} render={(props) => ( <Privacy json={json} /> )}/>
          <Route exact path="/fees" isAuthed={true} render={(props) => ( <Fees json={json} /> )}/>
          <Route path="/login" exact isAuthed={true} render={props => <Login />} />

          <Route path="/signup" exact isAuthed={true} render={props => <SignUp />}/>

          <Route path="/talentBasics" exact isAuthed={true} render={props => <LoginStep1 />} />
          <Route path="/talentEmployment" exact isAuthed={true} render={props => <LoginStep2 />} />
          <Route path="/talentRoles" exact isAuthed={true} render={props => <LoginStep3 />} />
          <Route path="/talentExperience" exact isAuthed={true} render={props => <LoginStep4 />} />
          <Route path="/talentEducation" exact isAuthed={true} render={props => <LoginStep5 />} />
          <Route path="/talentSkills" exact isAuthed={true} render={props => <LoginStep6 />} />
          <Route path="/talentSummary" exact isAuthed={true} render={props => <Summary />}  />
          <Route path="/talentSalary" exact isAuthed={true} render={props => <LoginStep7 />} />

          <Route path="/companyBasics" exact isAuthed={true} render={props => <CompanyStep1 />} />
          <Route path="/companyContract" exact isAuthed={true} render={props => <Contract />} />
          <Route path="/companyInformation" exact isAuthed={true} render={props => <CompanyStep2 />} />
          <Route path="/companyTerms" exact isAuthed={true} render={props => <CompanyStep3 />} />
          <Route path="/companyFinal" exact isAuthed={true} render={props => <CompanyStep4 />} />

          <Route path="/companyInbox" exact isAuthed={true} render={props => <LatestCandidates />} />
          <Route path="/talentInbox" exact isAuthed={true} render={props => <TalentInbox />} />

          <Route path="/talentProfile" exact isAuthed={true} render={props => <TalentProfile />} />
          <Route path="/companyProfile" exact isAuthed={true} render={props => <CompanyProfile />} />

          <Route path="/resetPasswordCompany" exact isAuthed={true} render={props => <ResetPasswordCompany />} />
          <Route path="/resetPasswordTalent" exact isAuthed={true} render={props => <ResetPasswordTalent />}/>

          <Route path="/changePasswordTalent/:verificationId" exact isAuthed={true} render={props => <ChangePasswordTalent />} />
          <Route path="/changePasswordCompany/:verificationId" exact isAuthed={true} render={props => <ChangePasswordCompany />}/>

          <Route path="/talentVerify/:verificationId" exact isAuthed={true} render={props => <TalentVerify />} />
          <Route path="/companyVerify/:verificationId" exact isAuthed={true} render={props => <CompanyVerify />}/>

          <Route path="/load" exact isAuthed={true} render={props => <EmptyLoadPage />} />
           
        </Switch>
      </Router>
      </ChakraProvider>
      </Provider> ,
      document.getElementById('root')
    );
  })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

