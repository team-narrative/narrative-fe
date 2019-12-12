import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { withSession } from '../Auth0Provider';
import LandingPage from '../containers/LandingPage';
import Dashboard from '../containers/Dashboard';
import CharacterList from './character/CharacterList';
import AboutUs from '../containers/AboutUs';
import ChapterList from './chapter/ChapterList';
import LocationList from './location/LocationList';
import WorldList from './world/WorldList';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/stories' component={withSession(Dashboard)} />
          <Route path='/characters' component={withSession(CharacterList)} />
          <Route path='/chapters' component={withSession(ChapterList)} />
          <Route path='/locations' component={withSession(LocationList)} />
          <Route path='/worlds' component={withSession(WorldList)} />
          <Route path='/about-us' component={withSession(AboutUs)}/>
        </Switch>
      </Router>
    </>
  );
}

