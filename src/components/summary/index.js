import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'; //импортировал action creators  и назвал их actions
import { bindActionCreators } from 'redux';

const Summary = ({ catalog, deleteAllAction }) => {

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
        <button className="summary__delete-products" onClick={() => deleteAllAction()}>Delete all products</button>
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
  const { deleteAllAction } = bindActionCreators(actions, dispatch); // деструктуризация
  //   //создал функции (с именами экшенов) передачи action в редьюсер чтобы просто вставлять имя функции в нужном месте
  //   // аргументы типа id попадут в редьсюер, их тут не надо даже вписывать

  return { // передаю экшены в пропсы
    deleteAllAction
  }

};

export default connect(mapStateToProps, mapActionsToProps)(Summary);

