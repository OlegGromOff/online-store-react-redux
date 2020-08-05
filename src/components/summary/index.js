import React, { useState } from 'react';
import './style.scss';

const Summary = ({ catalog, deleteAll }) => {

  const prices = catalog.map((item) => item.price);  //создал массив цен
  const summaryPrices = prices.reduce((sum, current) => sum + current, 0); // вычислил сумму всех цен
  let averagePrice = summaryPrices / prices.length; // вычислил среднюю цену
  averagePrice = averagePrice.toFixed(2); // округлил среднюю цену до сотых


  return (
    <div className="summary">
      <div className="container">
        <p className="summary__products">Total number of goods: {catalog.length}</p>
        <p className="summary__prices">Sum of prices: {summaryPrices} ₴</p>
        <p className="summary__average-price">Average price: {averagePrice > 0 ? averagePrice : 0} ₴</p>
        <button className="summary__delete-products" onClick={deleteAll}>Delete all products</button>
      </div>
    </div>
  )
}

export default Summary;