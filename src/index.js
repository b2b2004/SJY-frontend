import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import loginStepReducer from './store/loginStep';
import sopBoardStepReducer from './store/SopBoardStep';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import "./index.css";
const reducers = combineReducers({
    loginStep: loginStepReducer,
    sopBoardStep: sopBoardStepReducer,
});

const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['user'],
};

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false,
});


const _persistedReducer = persistReducer(persistConfig, reducers);


const store = configureStore({
    reducer: _persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: customizedMiddleware,
});



ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();