import React from 'react';
import classes from './Product.module.css';

import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart,AiOutlineHeart } from 'react-icons/ai';

const product = ({item}) => {
  return (
    <div className={classes['container']} key={item.id}>
      <div className={classes['circle']}>
       </div>
        <img src={item.img} alt="product" className={classes['product__image']} />
        <div className={classes['product__info']}>
          <div className={classes['product__icon']}> 
            <AiOutlineShoppingCart size={30}/>
          </div>
          <div className={classes['product__icon']}> 
            <BsSearch size={30}/>
          </div>
          <div className={classes['product__icon']}> 
            <AiOutlineHeart size={30}/>
          </div>
        </div>
    </div>
  )
}

export default product