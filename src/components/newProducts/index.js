import React, { useRef } from 'react';
import PropTypes from "prop-types";
import './style.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'; //импортировал action creators  и назвал их actions
import { bindActionCreators } from 'redux';

const NewProducts = ({ catalog, addProductAction, role }) => {
  const nameRef = useRef();
  const priceRef = useRef();
  const descrRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    let product = {
      name: nameRef.current.value,
      id: Date.now(),
      description: descrRef.current.value,
      price: Number(priceRef.current.value) // преобразовал в число
    };
    addProductAction(product);


    if (localStorage.getItem('products') === null) {
      let products = [];
      products.push(product);
      localStorage.setItem('products', JSON.stringify(products)); // localStorage.setItem - сохранить пару ключ/значение. 
      // addProductAction(products);
    } else {
      let products = JSON.parse(localStorage.getItem('products'));
      products.push(product);
      localStorage.setItem('products', JSON.stringify(products));
      // addProductAction(products);
      console.log(products);
    }
    nameRef.current.value = "";
    descrRef.current.value = "";
    priceRef.current.value = "";

  }


  return (
    <div className="container">
      {role === 'admin' ?
        <>
          <h2 className="title">Let`s add new product</h2>
          <form className="add-form" onSubmit={onSubmit}>
            <input required type="text" className="add-form__input" placeholder="Product name" ref={nameRef} />
            <input required type="number" className="add-form__input" placeholder="Product price" ref={priceRef} />
            <input required type="text" className="add-form__input" placeholder="Product description" ref={descrRef} />
            <button type="submit" className="add-form__btn" >Add product</button>
          </form>
        </>
        : <div className="container"><h2>This page is blocked for you</h2></div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    catalog: state.catalogArray,
    role: state.userRole
    // записываем сюда данные из стейта которые хотим использовать
  }
}
const mapActionsToProps = (dispatch) => {
  const { addProductAction } = bindActionCreators(actions, dispatch); // деструктуризация
  //   //создал функции (с именами экшенов) передачи action в редьюсер чтобы просто вставлять имя функции в нужном месте
  //   // аргументы типа id попадут в редьсюер, их тут не надо даже вписывать

  return { // передаю экшены в пропсы
    addProductAction
  }
};

NewProducts.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }),
};


export default connect(mapStateToProps, mapActionsToProps)(NewProducts);



