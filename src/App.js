import React, { useState } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
import Products from './components/products';
import catalog from './catalog.json';
import NewProducts from './components/newProducts';
import Summary from './components/summary';
import { BrowserRouter, Route } from 'react-router-dom';
import { deleteAllAction } from './store/actions';



function App() {
  const [catalogArray, setcatalogArr] = useState(catalog);

  let deleteProduct = (id) => {  // удаление товара
    setcatalogArr(catalogArray.filter((obj) => obj.id !== id));
  };

  let deleteAll = () => {  // удаление всех товаров
    setcatalogArr([]);
  };

  return (
    <div className="mainWrapper">
      <BrowserRouter>
        <Header />
        {/* <Products catalog={catalogArray} deleteFunc={deleteProduct} /> */}
        <Route exact path='/' render={() => <Products catalog={catalogArray} deleteFunc={deleteProduct} />} />
        <Route exact path='/new-products' render={() => <NewProducts />} />
        <Summary catalog={catalogArray} deleteAll={deleteAll} />
      </BrowserRouter>
    </div>
  );
}

export default App;
