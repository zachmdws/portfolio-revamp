import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App.js';
import Footer from "./components/Footer";
import * as serviceWorker from './serviceWorker';

ReactDOM.render([<App key = "1"/>, <Footer key ="1" />],
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
