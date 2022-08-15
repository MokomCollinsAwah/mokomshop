import React from 'react';
import classes from './CategoryItem.module.css';

const CategoryItem = ({ item }) => {
  return (
    <div className={classes['container']}>
      <img src={item.img} alt="categories" className={classes['category__image']} />
      <div className={classes['category__info']}>
        <h2 className={classes['category__title']}>{item.title}</h2>
        <button className={classes['category__btn']}>SHOP NOW</button>
      </div>
    </div>
  )
}

export default CategoryItem


