import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  nav: {
    marginTop: 21,
    height: 56
  },
  toolbar: {
    height: 56,
    minHeight: 0
  }
};

const MainNavigation = ({ classes }) => {
  return (
    <AppBar position="static" className={classes.nav}>
      <Toolbar className={classes.toolbar}>
        <IconButton color="inherit" aria-label="Menu">
          <FontAwesomeIcon icon="paw" />
        </IconButton>
        <Typography variant="h6" color="inherit">
          Cat
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(MainNavigation);
