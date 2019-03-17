import { FETCH_CARDS_REQUEST, FETCH_CARDS_SUCCESS, FETCH_CARDS_ERROR } from '../constants/actionTypes';

export const cardsState = {
	cardsList: null,
	isLoading: true,
	error: null
};

export const cards = (state = cardsState, action) => {
	const { type, payload } = action;

	switch(type) {
		case FETCH_CARDS_REQUEST:
			return {...state, isLoading: true};
		case FETCH_CARDS_SUCCESS:
			return {...state, cardsList: [...payload], isLoading: false};
		case FETCH_CARDS_ERROR:
			return {...state, error: payload, isLoading: false};
		default:
			return {...state};
	}
};