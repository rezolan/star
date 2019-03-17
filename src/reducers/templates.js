import {
	FETCH_TEMPLATES_REQUEST,
	FETCH_TEMPLATES_SUCCESS,
	FETCH_TEMPLATES_ERROR,
	CHANGE_TEMPLATE } from '../constants/actionTypes';

export const templatesState = {
	templatesList: null,
	isLoading: true,
	error: null,
	currentTemplate: null
};

export const templates = (state = templatesState, action) => {
	const { type, payload } = action;

	switch(type) {
		case FETCH_TEMPLATES_REQUEST:
			return {...state, isLoading: true};
		case FETCH_TEMPLATES_SUCCESS:
			return {
				...state,
				templatesList: [...payload],
				isLoading: false,
				currentTemplate: payload[0]};
		case FETCH_TEMPLATES_ERROR:
			return {...state, error: payload, isLoading: false};
		case CHANGE_TEMPLATE:
			return {...state, currentTemplate: payload};
		default:
			return {...state};
	}
};