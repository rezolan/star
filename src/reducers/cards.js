import { FETCH_CARDS, SET_CARDS_ERROR } from '../constants/actionTypes';

export const cardsState = {
	cardsList: [],
	isLoading: true,
	error: ''
};

const cards = (state = cardsState, action) => {
	const { type, payload } = action;

	switch(type) {
		case FETCH_CARDS:
			return {...state, cardsList: [...payload], isLoading: false};
		case SET_CARDS_ERROR:
			return {...state, error: payload};
		default:
			return {...state};
	}
};
export default cards;