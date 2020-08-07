import { DELETE_PRODUCT, ADD_PRODUCT, DELETE_ALL } from '../index';

export const deleteProductAction = (id) => { // action creator, экшены должы передаваться в dispatch через action creator
  return {
    type: DELETE_PRODUCT, // тип
    payload: { id },
  }
}

export const addProductAction = (product) => { // action creator, экшены должы передаваться в dispatch через action creator
  return {
    type: ADD_PRODUCT, // тип
    payload: { product },
  }
}
export const deleteAllAction = () => { // action creator, экшены должы передаваться в dispatch через action creator
  return {
    type: DELETE_ALL, // тип
  }
}