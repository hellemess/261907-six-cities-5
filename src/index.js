import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  OFFERS: 108
};

ReactDOM.render(
    <App
      offers={Settings.OFFERS}
    />,
    document.getElementById(`root`)
);
