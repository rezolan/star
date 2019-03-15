import axios from 'axios';
import { FETCH_CARDS, SET_CARDS_LOADING } from '../constants/actionTypes';

export const fetchCards = () => dispatch => {
	axios.get('http://demo4452328.mockable.io/properties')
		.then(({ data: { data } }) => {
			dispatch({type: FETCH_CARDS, payload: data});
		})
		.catch(error => {
			dispatch({type: FETCH_CARDS, payload: error})
		})
};