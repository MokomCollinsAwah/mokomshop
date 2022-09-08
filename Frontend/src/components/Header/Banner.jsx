import React from 'react';
import classes from './Banner.module.css';

import banner from '../../assets/banner.png'


const Banner = () => {
  return (
      <div className={classes["container"]}>
          <div className={classes['wrapper']}>    
            <div className={classes["banner__image-container"]}>
                <img src={banner} alt="banner_image" className={classes['banner__image']} />
            </div>
            <div className={classes["banner__content"]}>
                <h1 className={classes["banner__content-title"]}>SUMMER_SALE</h1>
                <p className={classes["banner__content-desc"]}>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS</p>
                <button className={classes['banner__content-btn']}>SHOP NOW</button>
            </div>
          </div>
    </div>
  )
}

export default Banner