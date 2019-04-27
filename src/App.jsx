import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import { addFont } from './fontAwesome';
import Navigation from './components/navigation/Navigation';

addFont();

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

theme.breakpoints.values = {
  xs: 0,
  sm: 564,
  md: 768,
  lg: 948,
  xl: 1020
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Helmet>
            <title>About Tan Nguyen</title>
          </Helmet>
          <Navigation />
          <Router />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
