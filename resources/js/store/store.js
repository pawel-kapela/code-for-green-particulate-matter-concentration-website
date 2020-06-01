import { createStore, applyMiddleware, compose } from 'redux';
import  thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

import { loadState, saveState } from '../helpers/localStorage';

const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(() => {
    saveState({
        theme: store.getState().theme,
        language: store.getState().language
    });
})

export default store;
