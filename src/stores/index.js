import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { podcastReducer } from '../reducers';


let store;

export default {
	configureStore: () => {
		const reducers = combineReducers({
			podcasts: podcastReducer
		});

		store = createStore(
			reducers,
			applyMiddleware(thunk)
		)

		return store;
	},

	currentStore: () => {
		return store;
	}
}