import {FETCH_CARDS} from '../constants/actionTypes'
const posts = (state = [], action) => {
	const {type, payload} = action;

	switch(type) {
		case FETCH_CARDS:
			return [ payload, ...state ];
		default:
			return state;
	}
}
export default posts;