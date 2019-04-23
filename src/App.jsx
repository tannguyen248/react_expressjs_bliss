import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import { addFont } from './fontAwesome';

addFont();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Helmet>
            <title>About Tan Nguyen</title>
          </Helmet>
          <Router />
      </BrowserRouter>
    );
  }
}

export default App;
