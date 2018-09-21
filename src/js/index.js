import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import '../styles/index.styl';

// import firebase from 'firebase/app';

import App from './App';

const renderApp = (user) => {
  ReactDOM.render(<App user={user} />, document.getElementById('app'));
};

const handleAuthStateChanged = (user) => {
  if (user) {
    console.log('Authenticated with', user.displayName);
  }

  renderApp(user);
};

const user = {};

handleAuthStateChanged(user);

// firebase.auth().onAuthStateChanged(handleAuthStateChanged);
