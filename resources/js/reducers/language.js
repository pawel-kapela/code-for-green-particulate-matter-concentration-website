import * as types from '../constants/ActionTypes';

import localisations from '../constants/Localisations';

const initialState = {
    language: 'pl'
};

const language = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LANGUAGE:
            localisations.setLanguage(action.language);
            return {
                ...state,
                language: action.language
            };
        default:
            return state;
    }
}

export default language;