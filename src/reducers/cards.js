import { FETCH_CARDS, SET_CARDS_ERROR, SET_CARDS_LOADING } from '../constants/actionTypes';

export const cardsState = {
	cardsList: [],
	isLoading: false,
	error: ''
};

const cards = (state = cardsState, action) => {
	const { type, payload } = action;

	switch(type) {
		case FETCH_CARDS:
			return {...state, cardsList: [...payload]};
		case SET_CARDS_ERROR:
			return {...state, error: payload};
		case SET_CARDS_LOADING:
			return {...state, isLoading: payload};
		default:
			return {...state};
	}
};
export default cards;