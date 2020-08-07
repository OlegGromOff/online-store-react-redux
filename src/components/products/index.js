import React from 'react';
import './style.scss';
import Product from '../product';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'; //импортировал action creators  и назвал их actions
import { bindActionCreators } from 'redux'; // bindActionCreators универсальная функция по созданию action cretors

const Products = ({ catalog, deleteProductAction }) => {
  return (
    <div className="products container">
      <div className="row">
        {catalog.map((item) => {
          return <Product
            key={item.id}
            id={item.id}
            item={item}
            name={item.name}
            img={item.img}
            description={item.description}
            price={item.price}
            deleteProductAction={deleteProductAction}
          />
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    catalog: state.catalogArray
    // записываем сюда данные из стейта которые хотим использовать
  }
}
const mapActionsToProps = (dispatch) => {
  const { deleteProductAction } = bindActionCreators(actions, dispatch); // деструктуризация
  //   //создал функции (с именами экшенов) передачи action в редьюсер чтобы просто вставлять имя функции в нужном месте
  //   // аргументы типа id попадут в редьсюер, их тут не надо даже вписывать

  return { // передаю экшены в пропсы
    deleteProductAction
  }

};

export default connect(mapStateToProps, mapActionsToProps)(Products); 