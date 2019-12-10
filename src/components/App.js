import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// import TestContainer from '../containers/TestContainer';
import { withSession } from '../Auth0Provider';
// import UserCard from './sidebar/UserCard';
// import DefaultView from './DefaultView';
// import Dashboard from '../containers/Dashboard';
import LandingPage from '../containers/LandingPage';
// import DefaultVi÷ewModal from './DefaultView-Modal';
import Dashboard from '../containers/Dashboard';
// import StoryNavigation from './sidebar/StoryNavigation';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/stories' component={withSession(Dashboard)} />
        </Switch>
      </Router>
    </>
  );
}

