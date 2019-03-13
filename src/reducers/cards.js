import {FETCH_CARDS} from '../constants/actionTypes'

const posts = (state = [], action) => {
	const {type, payload} = action;
	console.log(action);

	switch(type) {
		case FETCH_CARDS:
			return [...payload];
		default:
			return state;
	}
};
export default posts;