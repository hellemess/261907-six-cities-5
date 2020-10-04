import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = (props) => {
  const {offers} = props;

  return <Main
    offers={offers}
  />;
};

App.propTypes = {
  offers: PropTypes.number.isRequired
};

export default App;
