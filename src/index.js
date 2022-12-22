import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from './middlewares';
import thunk from 'redux-thunk';

//reducers
import { pokemonsReducer } from './reducers/pokemons';
import { uiReducer } from './reducers/ui';
import { produce } from 'immer';
import { combineReducers } from 'redux-immer';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Necesario para usar redux Thunk con devtools
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composeAlt(
  applyMiddleware(thunk, logger)
);

const store = createStore(
  combineReducers(
    produce,
    // combineReducers recibe un objeto con los reducers
    {
      pokemons: pokemonsReducer,
      ui: uiReducer,
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

