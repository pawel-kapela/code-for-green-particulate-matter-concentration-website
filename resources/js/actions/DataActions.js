import axios from 'axios';
import moment from 'moment';

import store from '../store/store';
import * as types from '../constants/ActionTypes';


export const setDatePointer = (date) => dispatch => {
    dispatch({
        type: types.SET_DATEPOINTER,
        date: date
    });
}

export const setTimespan = (timespan) => dispatch => {
    dispatch({
        type: types.SET_TIMESPAN,
        timespan: timespan
    });
}

export const switchToTheNextTimespan = () => dispatch => {
    dispatch({
        type: types.SWITCH_TO_THE_NEXT_TIMESPAN
    });
}

export const switchToThePreviousTimespan = () => dispatch => {
    dispatch({
        type: types.SWITCH_TO_THE_PREVIOUS_TIMESPAN
    });
}

export const fetch = () => dispatch => {
    const { datePointer, timespan } = store.getState().data;

    axios.get(`/api/measurements_from_timespan?from=${moment(datePointer).format('YYYY-MM-DD')}&to=${moment(datePointer).startOf('d').add(timespan, 'd').format('YYYY-MM-DD')}`)
        .then(response => {
            dispatch({
                type: types.FETCH,
                data: response.data,
                error: null
            });
        })
        .catch(response_error => {
            console.warn(response_error);

            dispatch({
                type: types.FETCH,
                data: null,
                error: response_error
            });
        });    
}
