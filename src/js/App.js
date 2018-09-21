import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';
import FeedPage from './FeedPage';
import AddPhoto from './AddPhoto';
import LoginPage from './LoginPage';

const App = ({ user }) => {
  if (!user) {
    return (<LoginPage />);
  }

  return (
    <Fragment>
      <NavBar />
      <FeedPage />
      <AddPhoto />
    </Fragment>
  );
};

App.propTypes = {
  user: PropTypes.object,
};

export default App;
