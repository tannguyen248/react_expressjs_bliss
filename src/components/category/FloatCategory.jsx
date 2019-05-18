import React from 'react';
import { withStyles, Icon, Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = theme => ({
  fab: {
    right: '3vw',
    position: 'fixed',
    bottom: 50,
    transform: 'translate(-50%, -50%)',
    zIndex: 1
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

const FloatCategory = ({ classes, handleClick }) => {
  return (
    <Fab
      size="large"
      aria-label="Delete"
      className={classes.fab}
      onClick={handleClick}
      color="secondary"
    >
      <Typography variant="body1" color="inherit">
        <FontAwesomeIcon icon="plus" />
        <FontAwesomeIcon icon="cat" />
      </Typography>
    </Fab>
  );
};

export default withStyles(styles)(FloatCategory);
