import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <main>
    <App />
  </main>,
document.getElementById('root'));

serviceWorker.unregister();
