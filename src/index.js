import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import JobSeekersFAQ from './pages/JobSeekersFAQ';
import JobSeekersTerms from './pages/JobSeekersTerms';
import Employers from './pages/Employers';
import EmployersFAQ from './pages/EmployersFAQ';
import EmployersTerms from './pages/EmployersTerms';
import AboutUs from './pages/AboutUs';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import './index.scss';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/job-seekers-faq" component={JobSeekersFAQ} />
      <Route path="/job-seekers-terms" component={JobSeekersTerms} />
      <Route path="/employers" component={Employers} />
      <Route path="/employers-faq" component={EmployersFAQ} />
      <Route path="/employers-terms" component={EmployersTerms} />
      <Route path="/about-us" component={AboutUs} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
