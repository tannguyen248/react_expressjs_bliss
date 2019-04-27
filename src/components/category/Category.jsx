import React from 'react';
import { withStyles } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Carousel from './Carousel';
import Information from './Information';
import CategoryDrawer from './CategoryDrawer';
import categories from '../../data/categories.json';

const styles = theme => ({
  root: {
    margin: 10,
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  category: {
    maxWidth: 800,
    minWidth: 300,
    height: 1050,
    marginLeft: 15,
    [theme.breakpoints.down('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    '& > *': {
      marginTop: 25
    }
  }
});

class Category extends React.Component {
  state = {
    breeds: null,
    currentCategoryId: 'abys'
  };

  getCategories = (startIndex, endIndex) => {
    let url =
      'https://api.thecatapi.com/v1/images/search/?breed_id={0}&limit=8&size=thumb';
    const promises = [];

    for (let id of categories.items.splice(startIndex, endIndex)) {
      promises.push(axios.get(url.replace(/{([^{}]*)}/g, id)));
    }

    Promise.all(promises).then(response => {
      const data = response.map(x => x.data);
      const breeds = data.map(item => ({
        id: item[0].breeds[0].id,
        breed: item[0].breeds[0],
        thumbnail: item[0].url,
        images: item.map(x => x.url)
      }));
      this.setState((state, props) => ({
        breeds: state.breeds ? [...state.breeds, ...breeds] : [...breeds]
      }));
    });
  };

  handleGridItemClick = id => (event, index) => {
    this.setState({
      currentCategoryId: id
    });
  };

  componentDidMount = () => {
    const range = 10;
    const runTimes = Math.round(categories.items.length / 7);

    for (let i = 0; i < runTimes; i++) {
      let startIndex = i * range;
      let endIndex =
        startIndex + range >= categories.items.length
          ? categories.items.length - 1
          : startIndex + range;

      this.getCategories(startIndex, endIndex);
    }
  };

  render() {
    const { breeds, currentCategoryId } = this.state;
    const { classes } = this.props;
    let currentItem =
      breeds && breeds.filter(item => item.id === currentCategoryId)[0];

    return (
      <React.Fragment>
        {breeds && currentItem && (
          <Grid
            container
            wrap="nowrap"
            justify="center"
            alignContent="stretch"
            alignItems="stretch"
            className={classes.root}
          >
            <Hidden mdDown>
              <CategoryDrawer
                data={breeds}
                handleGridItemClick={this.handleGridItemClick}
              />
            </Hidden>

            <div className={classes.category} /*elevation={1} square={true}*/>
              <React.Fragment>
                <Carousel
                  imageUrls={currentItem.images}
                  title={currentItem.breed.name}
                />
                <Information {...currentItem.breed} />
              </React.Fragment>
            </div>
          </Grid>
        )}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Category);
