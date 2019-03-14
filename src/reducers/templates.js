import {
	FETCH_TEMPLATES,
	SET_TEMPLATES_ERROR,
	SET_TEMPLATES_LOADING,
	CHANGE_TEMPLATE } from '../constants/actionTypes';

export const templatesState = {
	templatesList: [],
	isLoading: true,
	error: '',
	currentTemplate: 1
};

const templates = (state = templatesState, action) => {
	const { type, payload } = action;

	switch(type) {
		case FETCH_TEMPLATES:
			return {...state, templatesList: [...payload]};
		case SET_TEMPLATES_ERROR:
			return {...state, error: payload};
		case SET_TEMPLATES_LOADING:
			return {...state, isLoading: payload};
		case CHANGE_TEMPLATE:
			return {...state, currentTemplate: payload};
		default:
			return {...state};
	}
};
export default templates;