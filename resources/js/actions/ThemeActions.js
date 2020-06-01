import * as types from '../constants/ActionTypes';

import * as themes from '../constants/Themes';

export const setLightTheme = () => dispatch => {
    dispatch({
        type: types.SET_THEME,
        theme: themes.lightTheme
    })
}

export const setDarkTheme = () => dispatch => {
    dispatch({
        type: types.SET_THEME,
        theme: themes.darkTheme
    });
}
