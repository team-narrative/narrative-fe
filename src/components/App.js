import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import CharacterList from './character/CharacterList';
// import { withSession } from '../Auth0Provider';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/stories" component={CharacterList} />
        </Switch>
      </Router>

    </>
  );
}

