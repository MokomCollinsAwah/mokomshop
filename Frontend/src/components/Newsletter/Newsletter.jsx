import React from 'react';
import classes from './Newsletter.module.css';

import {RiSendPlaneFill} from 'react-icons/ri'

const Newsletter = () => {
  return (
      <div className={classes['container']}>
          <h1 className={classes['newsletter__title']}>Newsletter</h1>
          <div className={classes['newsletter__desc']}>Get Daily updates from your favorite products</div>
          <div className={classes['newsletter__input-container']}>
              <input type="text" placeholder='Your Email' className={classes['newsletter__input-input']} />
              <button className={classes['newsletter__input-btn']}>
                  <RiSendPlaneFill size={20}/>
              </button>
          </div>
    </div>
  )
}

export default Newsletter