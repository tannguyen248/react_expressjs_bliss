import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CategoryGridList from './CategoryGridList';
import { withStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = theme => ({
  drawer: {
    width: 240,
    flexShrink: 0
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  }
});

const CategoryDrawer = ({
  isOpened,
  handleToggleDrawer,
  data,
  handleGridItemClick,
  classes
}) => {
  return (
    <Drawer
      open={isOpened}
      onClose={handleToggleDrawer}
      className={classes.drawer}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={handleToggleDrawer}
        onKeyDown={handleToggleDrawer}
      >
        <div className={classes.drawerHeader}>
          <IconButton>
            <FontAwesomeIcon icon="chevron-left" />
          </IconButton>
        </div>
        <Divider />
        <CategoryGridList
          data={data}
          handleGridItemClick={handleGridItemClick}
        />
      </div>
    </Drawer>
  );
};

export default withStyles(styles)(CategoryDrawer);
