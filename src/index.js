import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import JobSeekersFAQ from './pages/JobSeekersFAQ';
import JobSeekersTerms from './pages/JobSeekersTerms';
import Employers from './pages/Employers';
import EmployersFAQ from './pages/EmployersFAQ';
import EmployersTerms from './pages/EmployersTerms';
import AboutUs from './pages/AboutUs';
import Privacy from './pages/Privacy';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import './index.css';

fetch('/data.json')
  .then((r) => r.json())
  .then((data) =>{
    var json = JSON.stringify(data);
    ReactDOM.render(
      <Router>
        <Switch>
          <Route exact path="/" isAuthed={true} render={(props) => ( <Home json={json} /> )} />
          <Route exact path="/job-seekers-faq" isAuthed={true} render={(props) => ( <JobSeekersFAQ json={json} /> )} />
          <Route exact path="/job-seekers-terms" isAuthed={true} render={(props) => ( <JobSeekersTerms json={json} /> )} />
          <Route exact path="/employers" isAuthed={true} render={(props) => ( <Employers json={json} /> )} />
          <Route exact path="/employers-faq" isAuthed={true} render={(props) => ( <EmployersFAQ json={json} /> )} />
          <Route exact path="/employers-terms" isAuthed={true} render={(props) => ( <EmployersTerms json={json} /> )} />
          <Route exact path="/about-us" isAuthed={true} render={(props) => ( <AboutUs json={json} /> )} />
          <Route exact path="/privacy" isAuthed={true} render={(props) => ( <Privacy json={json} /> )} />
        </Switch>
      </Router>,
      document.getElementById('root')
    );
  })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
