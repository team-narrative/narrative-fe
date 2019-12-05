import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSessionLoading, getSessionId } from '../selectors/sessionSelectors';
import { sessionVerify } from '../actions/sessionActions';
import ExampleContainer from '../containers/ExampleContainer';
import Auth from './Auth';

const PrivateRoute = ({ ...rest }) => {
  const sessionId = useSelector(getSessionId);
  const loading = useSelector(getSessionLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!sessionId) dispatch(sessionVerify());
  }, []);

  if(loading) {
    return <h1>Loading...</h1>;
  }

  if(!loading && !sessionId) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest} />;
};

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={Auth} />
          <PrivateRoute exact path="/" component={ExampleContainer} />
        </Switch>
      </Router>

    </>
  );
}

