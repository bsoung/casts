import constants from '../constants';

let initialState = {
	allPodcasts: null,
	selected: null,
	trackList: null
}

export default (state = initialState, action) => {
	let updated = Object.assign({}, state);

	switch (action.type) {
		case constants.PODCASTS_RECEIVED:
			updated.allPodcasts = action.payload

			console.log(updated);

			return updated;

		case constants.PODCAST_SELECTED:
			
			if (updated.selected != null) {
				if (updated.selected.collectionId == action.payload.collectionId) {
					return state;
				}
			}

			updated.trackList = null;
			updated.selected = action.payload;

			return updated;

		case constants.TRACKLIST_READY:

			updated.trackList = action.payload;

			return updated;

		default:
			return state;
	}
}