import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { StyledFirebaseAuth } from 'react-firebaseui';
import firebase from 'firebase';
import { setToken } from './services/request';

const AuthContext = React.createContext();

firebase.initializeApp({
  apiKey: 'AIzaSyDaZuYCEiTOl_cQOwm7qbCbplbsv2VPoVI',
  authDomain: 'firenotes-2b948.firebaseapp.com',
  databaseURL: 'https://firenotes-2b948.firebaseio.com',
  projectId: 'firenotes-2b948',
  storageBucket: 'firenotes-2b948.appspot.com',
  messagingSenderId: '563943298982',
  appId: '1:563943298982:web:60a661b43bbfa93ec06167'
});

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/stories',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => {
      if(user) {
        user.getIdToken()
          .then(token => {
            setToken(token);
            setIsAuthenticated(true);
          });
        setUser(user);
      }
      else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    });
  });

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useSession = () => {
  return useContext(AuthContext);
};

export const withSession = Comp => {
  return function WithSession(props) {
    const { loading, isAuthenticated } = useSession();
    if(loading) return <h1>LOADING</h1>;
    if(!loading && !isAuthenticated) {
      return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />;
    }
    return <Comp {...props} />;
  };
};

export const useLogout = () => {
  const history = useHistory();
  return () => firebase.auth().signOut()
    .then(() => history.push('/'));
};