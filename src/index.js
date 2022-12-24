import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewares';
import thunk from 'redux-thunk';

//reducers
import { combineReducers } from 'redux';
import dataReducerToolkit from './slices/pokemonSlice';
import uiReducerToolkit from './slices/uiSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Necesario para usar redux Thunk con devtools
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logger)
);

const store = createStore(
  combineReducers(
    // Ya no uso produce porque Redux Toolkit ya usa immer
    // produce,
    // combineReducers recibe un objeto con los reducers
    {
      pokemons: dataReducerToolkit,
      ui: uiReducerToolkit,
    }
  ),
  composedEnhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

