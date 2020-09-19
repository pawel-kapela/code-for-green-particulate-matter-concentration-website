import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import AppContainer from './containers/AppContainer';

import store from './store/store';

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        document.getElementById('app')
    );
};


render(AppContainer);
