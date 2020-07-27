import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {unregister} from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.querySelector('#root'));
unregister();
