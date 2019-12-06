import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { withSession } from '../Auth0Provider';
// import TestContainer from '../containers/TestContainer';
import EditForm from './editView/EditForm';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/stories" component={withSession(EditForm)} />
        </Switch>
      </Router>

    </>
  );
}

