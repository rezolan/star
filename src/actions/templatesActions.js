import axios from 'axios';
import { FETCH_TEMPLATES, SET_TEMPLATES_LOADING, CHANGE_TEMPLATE } from '../constants/actionTypes';

export const fetchTemplates = () => dispatch => {
	dispatch({type: SET_TEMPLATES_LOADING, payload: true});
	axios.get('http://demo4452328.mockable.io/templates')
		.then(({ data }) => {
			dispatch({type: FETCH_TEMPLATES, payload: data});
			dispatch({type: SET_TEMPLATES_LOADING, payload: false});
		})
		.catch(error => {
			dispatch({type: FETCH_TEMPLATES, payload: error});
			dispatch({type: SET_TEMPLATES_LOADING, payload: false});
		})
};

export const changeTemplate = (payload) => dispatch => {
	dispatch({type: CHANGE_TEMPLATE, payload})
};