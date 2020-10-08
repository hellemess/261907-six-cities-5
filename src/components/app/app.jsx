import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';

const App = (props) => {
  const {offers} = props;

  return <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Main
          offers={offers}
        />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/favorites" exact>
        <Favorites />
      </Route>
      <Route path="/offer/:id" exact>
        <Offer />
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  offers: PropTypes.number.isRequired
};

export default App;
