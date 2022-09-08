import React from 'react';
import Product from './Product'
import { popularProducts } from '../data';

const Products = () => {
  return (
    <div
      style={{
        display: 'flex',
        padding: "20px",
        flexWrap: "wrap",
        flex: '1',
        justifyContent: 'space-between'
      }}
    >{popularProducts.map((item) => (
          <Product item={item} key={item.id}/> 
    ))}
    </div>
  )
}

export default Products