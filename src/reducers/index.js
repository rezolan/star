import { combineReducers } from 'redux';
import cards from './cards';
import templates from './templates';

const reducers = combineReducers({
	cards,
	templates
});

export default reducers;

