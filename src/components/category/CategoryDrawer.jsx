import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Tooltip from '@material-ui/core/Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 1050
  },
  gridItem: {
    cursor: 'pointer'
  }
});

class CategoryDrawer extends Component {
  render() {
    const { classes, data } = this.props;

    const renderStars = adaptability => {
      let starts = [];
      for (let i = 0; i < adaptability; i++) {
        starts.push(<FontAwesomeIcon icon="star" key={i} />);
      }

      return starts;
    };

    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          {data.map(tile => (
            <GridListTile
              key={tile.breed.name}
              className={classes.gridItem}
              onClick={this.props.handleGridItemClick(tile.id)}
            >
              <img src={tile.thumbnail} alt={tile.breed.name} />
              <GridListTileBar
                title={tile.breed.name}
                subtitle={
                  <Tooltip title="Adapt Ability" aria-label="Adapt Ability">
                    <Typography color="inherit">
                      {renderStars(tile.breed.adaptability)}
                    </Typography>
                  </Tooltip>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(CategoryDrawer);
