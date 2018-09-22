import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import '../styles/index.styl';

// import firebase from './firebase';

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

// remover esta criação de usuário fake
const user = {};
handleAuthStateChanged(user);

