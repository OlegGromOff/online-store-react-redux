import React from 'react';
import './style.scss';
import Product from '../product';

const Products = ({ catalog, deleteFunc }) => {

  return (
    <div className="products container">
      <div className="row">
        {catalog.map(function (item) {
          return <Product
            key={item.id}
            id={item.id}
            item={item}
            name={item.name}
            img={item.img}
            description={item.description}
            deleteFunc={deleteFunc}
            price={item.price}
          />
        })}
      </div>
    </div>
  )
}
export default Products;