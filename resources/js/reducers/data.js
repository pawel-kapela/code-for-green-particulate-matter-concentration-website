import moment from 'moment';

import * as types from '../constants/ActionTypes';

const initialState = {
    datePointer: moment().toDate(),
    timespan: 1,
    data: {},
    error: {}
};

const data = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_DATEPOINTER:
            return {
                ...state,
                datePointer: action.date
            };
        case types.SET_TIMESPAN:
            return {
                ...state,
                timespan: action.timespan,
                datePointer: (action.timespan == 1) ? moment().startOf('d').toDate() : moment().startOf('d').subtract(action.timespan, 'd').toDate()
            };
        case types.SWITCH_TO_THE_PREVIOUS_TIMESPAN:
            return {
                ...state,
                datePointer: moment(state.datePointer).startOf('d').subtract(state.timespan, 'd').toDate()
            };
        case types.SWITCH_TO_THE_NEXT_TIMESPAN:
            return {
                ...state,
                datePointer: moment(state.datePointer).startOf('d').add(state.timespan, 'd').toDate()
            };
        case types.FETCH:
            return {
                ...state,
                data: action.data,
                error: action.error
            };
        default:
            return state;
    }
}

export default data;
