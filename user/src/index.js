import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStoreHook, applyMiddleware, componse } from 'redux';
import { thunk } from "redux-thunk";

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);