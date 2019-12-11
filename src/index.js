import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { AuthProvider } from './Auth0Provider';
import store from './store';
import './reset.css';

render(
  <AuthProvider
    domain={process.env.AUTH0_DOMAIN}
    client_id={process.env.AUTH0_CLIENT_ID}
    redirect_uri={process.env.AUTH0_CALLBACK}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </AuthProvider>,
  document.getElementById('root')
);
