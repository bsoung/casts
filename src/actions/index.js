import constants from '../constants';
import { APIManager } from '../utils';

const getRequest = (path, params, actionType) => {
	return (dispatch) => 
		// returns a promise
		APIManager
		.get(path, params)
		.then(response => {
			const payload = response.results || response.result || response.response;

			dispatch({
				type: actionType,
				payload: payload,
				params: params
			});

			return response;
		})
		.catch(err => {
			console.log(err.message);
			throw err;
		});
}

export function searchPodcasts(params) {
	console.log('searchPodcasts:', JSON.stringify(params));
}

export function podcastSelected(podcast) {
	return {
		type: constants.PODCAST_SELECTED,
		payload: podcast
	}
}

export function trackListReady(list) {
	return {
		type: constants.TRACKLIST_READY,
		payload: list
	}
}

export function podcastsReceived(searchTerm) {
	return (dispatch) => {
		return dispatch(
			getRequest(`/search/${searchTerm}`, null, constants.PODCASTS_RECEIVED));
	}
}