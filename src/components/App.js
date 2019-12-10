import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { withSession } from '../Auth0Provider';
import LoginPage from '../containers/LogInPage';
import Dashboard from '../containers/Dashboard';
import CharacterList from './character/CharacterList';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/stories' component={withSession(Dashboard)} />
          <Route path='/characters' component={CharacterList} />
        </Switch>
      </Router>
    </>
  );
}

