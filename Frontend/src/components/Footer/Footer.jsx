import React from 'react';
import classes from './Footer.module.css';

import { BsFacebook, BsInstagram, BsTwitter, BsPinterest, BsFillTelephoneFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';


const Footer = (props) => {
  return (
      <div className={classes['footer__container']}>
          <div className={classes['footer__left']}>
              <h1 className={classes['logo']}>MOKOM.</h1>
              <p className={classes['footer__desc']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque pretium vitae magna dictum pulvinar.
                  Praesent euismod nisi et convallis faucibus.
              </p>
              <div className={classes['footer__social-container']} >
                  <div className={classes['footer__social-icon']}>
                      <BsFacebook color='3B5999'size={25}/>
                  </div>
                  <div className={classes['footer__social-icon']} >
                      <BsInstagram color='E4405F' size={25}/>
                  </div>
                  <div className={classes['footer__social-icon']} >
                      <BsTwitter color='55ACEE' size={25}/>
                  </div>
                  <div className={classes['footer__social-icon']} >
                      <BsPinterest color='E60023' size={25}/>
                  </div>
                  
              </div>
          </div>
          <div className={classes['footer__center']}>
              <h3 className={classes['footer__title']}>Useful Links</h3>
              <ul className={classes['footer__list']}>
                  <li className={classes['footer__list-item']}>Home</li>
                  <li className={classes['footer__list-item']}>Cart</li>
                  <li className={classes['footer__list-item']}>Man Fashion</li>
                  <li className={classes['footer__list-item']}>Woman Fashion</li>
                  <li className={classes['footer__list-item']}>Accessories</li>
                  <li className={classes['footer__list-item']}>My Account</li>
                  <li className={classes['footer__list-item']}>Order Tracking</li>
                  <li className={classes['footer__list-item']}>Terms</li>
              </ul>
          </div>
          <div className={classes['footer__right']}>
              <h3 className={classes['footer__title']}>Contact Us</h3>
              <div className={classes['footer__contact-item']}>
                  <BsFillTelephoneFill style={{marginRight:'10px'}}/> 623 Dixie Path, South Tobichester 89352
              </div>
              <div className={classes['footer__contact-item']}>
                  <HiLocationMarker style={{marginRight:'10px'}}/> +1 234 567 890
              </div>
              <div className={classes['footer__contact-item']}>
                  <FiMail style={{marginRight:'10px'}}/> contact@mokom.dev
              </div>
              <div className={classes['footer__contact-item']}>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
              </div>
          </div>
    </div>
  )
}



export default Footer