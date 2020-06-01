import * as types from '../constants/ActionTypes';

export const setLanguage = language => dispatch => {
    dispatch({
        type: types.SET_LANGUAGE,
        language: language
    });
}