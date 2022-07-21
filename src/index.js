import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './redux/rootReducer';
import './index.css';
import { spamFilter } from './redux/middleware';
import App from './App';
import { Provider } from 'react-redux';

// now we pass our store in react-app by means of Provider 
// without maintaining 'store' object in redux dir
const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk,
    spamFilter
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
