import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// createStore is a function
import {createStore} from 'redux'
import reducer from './Redux/reducer'
// Provider is a component
import {Provider} from 'react-redux'

let storeObject = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={storeObject}>
    <App />
  </Provider>
, document.getElementById('root'));
