import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { withStyles } from '@material-ui/core';

const settings = {
  autoplay: true,
  autoplaySpeed: 1500,
  dots: true,
  fade: true,
  infinitie: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 500
};

const styles = {
  media: {
    '& img': {
      maxWidth: '100%',
      height: 350,
      margin: 'auto'
    }
  },
  slide: {
    '& .slick-prev:before, & .slick-next:before': {
      color: 'transparent'
    }
  }
};

const Carousel = ({ imageUrls, title, classes }) => {
  return (
    <Slider {...settings} className={classes.slide}>
      {imageUrls &&
        imageUrls.map(url => (
          <div key={url}>
            <div className={classes.media}>
              <img src={url} alt={title} />
            </div>
          </div>
        ))}
    </Slider>
  );
};

export default withStyles(styles)(Carousel);
