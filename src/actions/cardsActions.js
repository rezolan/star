import { root } from '../constants/axiosConfig';
import {
	FETCH_CARDS_REQUEST,
	FETCH_CARDS_SUCCESS,
	FETCH_CARDS_ERROR } from '../constants/actionTypes';

export const fetchCards = () => dispatch => {
	dispatch({type: FETCH_CARDS_REQUEST});
	root.get('/properties')
		.then(({ data: { data } }) => {
			dispatch({type: FETCH_CARDS_SUCCESS, payload: data});
		})
		.catch(error => {
			dispatch({type: FETCH_CARDS_ERROR, payload: error});
		})
};