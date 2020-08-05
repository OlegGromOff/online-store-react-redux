import catalog from '../catalog';
import { DELETE_PRODUCT, DELETE_ALL } from '../index';

const initialState = catalog; // создал изначальный стейт

// {
// создали изначальный стейт
//   firstName: 'Oleg',
//     secondName: 'Gromov'
// }

// let deleteProduct = (id) => {  // удаление товара
//   setcatalogArr(catalogArray.filter((obj) => obj.id !== id));
// };

// let deleteAll = () => {  // удаление всех товаров
//   setcatalogArr([]);
//   console.log('deleteAll');
// };

export const rootReducer = (state = initialState, action) => { // создал главный reducer и передал туда state и action, в state передал изначальный state
  switch (action.type) {
    // case DELETE_PRODUCT:
    //   return (state.filter((obj) => obj.id !== id)); // меняем в state firstName на payload из action

    case DELETE_ALL:
      return [];
  }
  return state; // reducer всегда должен что-то возвращать
}