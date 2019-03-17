import { root } from '../constants/axiosConfig';
import {
	FETCH_TEMPLATES_REQUEST,
	FETCH_TEMPLATES_SUCCESS,
	FETCH_TEMPLATES_ERROR,
	CHANGE_TEMPLATE
} from '../constants/actionTypes';
import store from '../store';

export const fetchTemplates = () => dispatch => {
	dispatch({type: FETCH_TEMPLATES_REQUEST});
	root.get('/templates')
		.then(({ data }) => {
			dispatch({type: FETCH_TEMPLATES_SUCCESS, payload: data});
		})
		.catch(error => {
			dispatch({type: FETCH_TEMPLATES_ERROR, payload: error});
		})
};

export const changeTemplate = id => dispatch => {
	const payload = store.getState().templates.templatesList.find(temp=>id===temp.id);
	dispatch({type: CHANGE_TEMPLATE, payload});
};