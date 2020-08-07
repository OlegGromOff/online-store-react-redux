import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // обертка чтобы прокинуть store ниже в глубь, чтобы использовать его во всем приложении
import { rootReducer } from './store/reducers';

export const DELETE_PRODUCT = 'DELETE_PRODUCT'; //создал переменную action со строковым значением
export const DELETE_ALL = 'DELETE_ALL'; //создал переменную action со строковым значением
export const ADD_PRODUCT = 'ADD_PRODUCT';
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
