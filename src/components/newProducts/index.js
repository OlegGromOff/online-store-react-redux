import React from 'react';
import './style.scss';

const NewProducts = () => {

  const onSubmit = (e) => {
    e.preventDefault();
    const name = '';
    const id = '';
    const img = '';
    const description = '';
    const price = '';
    const product = {
      name,
      id,
      img,
      description,
      price
    }
    localStorage.setItem()
  }

  // const addProductFunc = (e) => {
  //   e.preventDefault();
  //   let obj = {
  //     id: Date.now(),
  //     name: inputField,
  //     description: inputDescr,
  //     price: inputPrice
  //   };
  //   if (inputField) {
  //     let catalog = JSON.parse(localStorage.getItem('catalog'));
  //     catalog.push(obj);
  //     localStorage.setItem('catalog', JSON.stringify(catalog));
  //   }
  // }

  return (
    <div className="container">
      <h2 className="title">Let`s add new product</h2>
      <form className="add-form" onSubmit={onSubmit}>
        <input type="text" className="add-form__input" placeholder="Product name" />
        <input type="text" className="add-form__input" placeholder="Product price" />
        <input type="text" className="add-form__input" placeholder="Product description" />
        <button type="submit" className="add-form__btn" >Add product</button>
      </form>
    </div>
  )
}
export default NewProducts;