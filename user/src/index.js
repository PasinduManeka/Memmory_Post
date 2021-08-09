import React from 'react';
import ReactDOM from 'react-dom';
/*provider is goig to keep track of that store which is that global sate
and data allows to access that store anywahere from inside the app.
That state can be used anywhere.*/
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk  from "redux-thunk";


import reducers from './reduces';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);