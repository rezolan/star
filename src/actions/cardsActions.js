import axios from 'axios';
import { FETCH_CARDS, SET_CARDS_LOADING } from '../constants/actionTypes';

export const fetchCards = () => dispatch => {
	dispatch({type: SET_CARDS_LOADING, payload: true});
	axios.get('http://demo4452328.mockable.io/properties')
		.then(({ data: { data } }) => {
			dispatch({type: FETCH_CARDS, payload: data});
			dispatch({type: SET_CARDS_LOADING, payload: false});
		})
		.catch(error => {
			dispatch({type: FETCH_CARDS, payload: error})
		})
};