import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {
  Grid, Header, Segment, Icon,
} from 'semantic-ui-react';

// import firebase from './firebase';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

const LoginPage = () => (
  <div className="login-page">
    <Grid textAlign="center" style={{ height: '100%' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          <Icon name="camera retro" />
          InstaFire
        </Header>
        <Segment secondary>
          {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}
        </Segment>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginPage;
