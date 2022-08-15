import React from 'react';
// import classes from './Categories.module.css';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Categories = (props) => {
  return (
    <div
      style={{
        display: 'flex', padding: "20px", justifyContent: "space-around"
      }}>
      
      {categories.map((item) => (
          <CategoryItem item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Categories