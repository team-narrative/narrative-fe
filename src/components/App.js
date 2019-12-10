import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
// import TestContainer from '../containers/TestContainer';
import { withSession } from '../Auth0Provider';
// import UserCard from './sidebar/UserCard';
import DefaultView from './DefaultView';
// import StoryNavigation from './sidebar/StoryNavigation';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/stories" component={withSession(DefaultView)} />
        </Switch>
      </Router>
    </>
  );
}

