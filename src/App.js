import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Products from './components/products';
import NewProducts from './components/newProducts';
import Summary from './components/summary';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {

  return (
    <div className="mainWrapper">
      <BrowserRouter>
        <Header />
        {/* <Products catalog={catalogArray} deleteFunc={deleteProduct} /> */}
        <Route exact path='/' render={() => <Products />} />
        <Route exact path='/new-products' render={() => <NewProducts />} />
        <Summary />
      </BrowserRouter>
    </div>
  );
}

export default App;
