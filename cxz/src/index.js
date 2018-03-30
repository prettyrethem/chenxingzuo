import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './static/css/reset.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import './static/font/iconfont.css'
ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
registerServiceWorker();
