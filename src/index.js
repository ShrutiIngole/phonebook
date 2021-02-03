import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import store from './store/store';
import App from './App';
import './index.css';


const render = () => ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
render();

store.subscribe(render);


reportWebVitals();
