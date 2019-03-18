import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import reducers from './reducers/index';
import logger from "redux-logger";
//import thunk from 'redux-thunk';

const middleware = applyMiddleware(logger);

const createStoreWithMiddleware = (createStore(reducers, middleware));
const target = document.getElementById('root');
ReactDOM.render(
<Provider store={createStoreWithMiddleware}>
    <App />
</Provider>
, target);