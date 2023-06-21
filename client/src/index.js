import React from 'react';
import ReactDom from 'react-dom';
import App from './app';

import { Provider } from 'react-redux';
import {store,persistor} from './redux/store';

import { PersistGate } from 'redux-persist/integration/react'


ReactDom.render(
    
        <Provider store={store}>
        <PersistGate  persistor={persistor} loading={<div>Loading</div>}>
            <App />
        </PersistGate>
        </Provider>,
    document.getElementById("root")
);
