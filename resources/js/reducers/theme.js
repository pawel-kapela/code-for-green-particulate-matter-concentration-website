import * as types from '../constants/ActionTypes';

import * as themes from '../constants/Themes';

const initialState = {
    theme: themes.lightTheme
};

const theme = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_THEME:
            return {
                ...state,
                theme: action.theme
            }
        default:
            return state;
    }
}

export default theme;
