import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopNavigation = () => {
  return (
    <AppBar position="static" color="default">
      <Typography variant="h6" color="inherit">
        Photos
      </Typography>
    </AppBar>
  );
};

export default TopNavigation;
