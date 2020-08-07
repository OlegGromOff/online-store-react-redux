import catalog from '../catalog';
import { DELETE_PRODUCT, ADD_PRODUCT, DELETE_ALL } from '../index';

const initialState = { catalogArray: catalog }; // создал изначальный стейт

export const rootReducer = (state = initialState, action) => { // создал главный reducer и передал туда state и action, в state передал изначальный state
  switch (action.type) {
    case DELETE_PRODUCT:
      return { ...state, catalogArray: deleteProduct(action.payload.id, state) };
    // добавить новый товар, напиши логику
    case ADD_PRODUCT:
      return {
        ...state, catalogArray: addProductFunc(action.payload.product, state),
      }
    case DELETE_ALL:
      return {
        ...state, catalogArray: []
      }
    default:
      return state; // reducer всегда должен что-то возвращать
  }
}

const addProductFunc = (product, state) => {
  return state.catalogArray.push(product);
}
const deleteProduct = (id, state) => {
  return state.catalogArray.filter((item) => item.id !== id);
};