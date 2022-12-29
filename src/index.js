import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
import './styles/index.scss'

const container = document.getElementById('root');
const root = createRoot(container);

console.log =
  process.env.REACT_APP_NODE_ENV === "development"
    ? console.log
    : function () {
        //
      };
console.warn =
  process.env.REACT_APP_NODE_ENV === "development"
    ? console.warn
    : function () {
        //
      };
console.error =
  process.env.REACT_APP_NODE_ENV === "development"
    ? console.error
    : function () {
        //
      };

root.render(
    <Provider store={store}>     
        <App />
    </Provider>
);
