import axios from 'axios';
import { FETCH_TEMPLATES, CHANGE_TEMPLATE } from '../constants/actionTypes';

export const fetchTemplates = () => dispatch => {
	axios.get('http://demo4452328.mockable.io/templates')
		.then(({ data }) => {
			dispatch({type: FETCH_TEMPLATES, payload: data});
		})
		.catch(error => {
			dispatch({type: FETCH_TEMPLATES, payload: error});
		})
};

export const changeTemplate = payload => dispatch => {
	dispatch({type: CHANGE_TEMPLATE, payload})
};