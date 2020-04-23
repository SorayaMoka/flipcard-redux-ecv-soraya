import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store/index";
import * as serviceWorker from './serviceWorker';

import App from './App';

import './index.css';

console.log(store);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
