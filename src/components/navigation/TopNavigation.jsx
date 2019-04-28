import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
  nav: {
    height: 21,
    boxShadow: 'none'
  },
  link: {
    margin: '0 5px',
    textDecoration: 'underline',
    fontWeight: 550
  }
};

const TopNavigation = ({ classes }) => {
  return (
    <AppBar position="fixed" color="default" className={classes.nav}>
      <Typography color="inherit" variant="subtitle2">
        <Link href="/about" className={classes.link} color="inherit">
          About me
        </Link>
        |
        <Link href="/samples" className={classes.link} color="inherit">
          More samples
        </Link>
      </Typography>
    </AppBar>
  );
};

export default withStyles(styles)(TopNavigation);
