import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { rootReducer } from './redux/rootReducer';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

// now we pass our store in react-app by means of Provider 
// without maintaining 'store' object in redux dir
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
