import React from 'react';
import './style.scss';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'; //импортировал action creators  и назвал их actions


const Product = ({ catalog, item, name, description, img, deleteProductAction, id, price, role }) => { // пропсы которые я передал через mapStateToProps и mapDispatchToProps

  return (
    <div className="product-wrap col-12 col-md-6 col-xl-4">
      <div className="product">
        <div className="delete-btn">
          {role === 'admin' ?
            <HighlightOffIcon onClick={() =>
              deleteProductAction(id)
            } /> : null}
        </div>
        <div className="product__img">
          <img src={img} alt="bottle" />
        </div>
        <div className="product__info">
          <p className="product__name">{name}</p>
          <p className="product__price">{price} ₴</p>
          <p className="product__descr">{description}</p>
        </div>
      </div>
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    role: state.userRole
    // записываем сюда данные из стейта которые хотим использовать
  }
}

export default connect(mapStateToProps, actions)(Product);

