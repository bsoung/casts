import constants from '../constants';

let initialState = {
	allPodcasts: null
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state);

	switch (action.type) {
		case constants.PODCASTS_RECEIVED:
			updated.allPodcasts = action.payload

			console.log(updated);

			return updated;

		default:
			return state;
	}
}