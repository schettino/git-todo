import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import applyGlobalStyles from './style';
applyGlobalStyles();

const rootElement = document.getElementById('root');

function render(Root) {
  ReactDOM.render(<Root />, rootElement);
}

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    render(NextApp);
  });
}

render(App);
