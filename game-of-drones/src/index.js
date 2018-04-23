import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import combinedReducers, {defaultStore} from './reducers'
import './index.css';
import App from './scenes/app';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(combinedReducers, defaultStore);
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
registerServiceWorker();