import { combineReducers } from 'redux';

import data from './data';
import theme from './theme';
import language from './language';

const rootReducer = combineReducers({
    data,
    theme,
    language
});

export default rootReducer;
