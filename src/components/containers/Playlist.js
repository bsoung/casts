import React, { Component } from 'react';
import { Search } from '../view';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import APlayer from 'aplayer';

class Playlist extends Component {
	constructor() {
		super();

		this.state = {
			player: null
		}
	}

	componentDidMount() {


	}

	componentDidUpdate() {
		if (this.props.podcasts.selected == null) {
			return;
		}

		// grab feed
		const feedUrl = this.props.podcasts.selected.feedUrl;
		console.log(feedUrl, "what's the feed url?");

		const trackList = this.props.podcasts.trackList;

		if (feedUrl == null) {
			return;
		}

		if (trackList != null) {
			if (this.state.player == null) {
				this.initializePlayer(trackList);
			}

			return;
		}

		// reset player
		if (this.state.player != null) {

			this.state.player.pause();
			this.setState({
				player: null
			})
		}

		APIManager
			.get('/feed', {url: feedUrl})
			.then(res => {
				const podcast = res.podcast;
				const selectedPodcast = this.props.podcasts.selected;
				const item = podcast.item;

				let list = [];

				item.forEach((track, i) => {
					let enclosure = null;
					let trackInfo = {};

					if (track.enclosure) {
						enclosure = track.enclosure[0]['$'];

					} else {

						return;
					}

					trackInfo.title = track.title[0];
					trackInfo.author = selectedPodcast.collectionName;
					trackInfo.pic = selectedPodcast['artworkUrl600'];
					trackInfo.url = enclosure.url;

					list.push(trackInfo);
				});

				// send tracklist to reducer
				this.props.trackListReady(list);

				
			})
			.catch(err => {
				alert("This podcast has a broken link, please try another one.");
				console.error(err.message);
			});
	}

	initializePlayer(tracks) {
		let sublist = [];

		// just show 3
		if (tracks.length > 5) {
			for (let i = 0; i < 5; i++) {
				sublist.push(tracks[i]);
			}

		} else {
			sublist = Object.assign([], tracks);
		}

		let ap1 = new APlayer({
		    element: document.getElementById('player1'),
		    narrow: false,
		    autoplay: false,
		    showlrc: false,
		    mutex: true,
		    theme: '#e6d0b2',
		    preload: 'metadata',
		    mode: 'circulation',
		    music: sublist
		});
		
		this.setState({
			player: ap1
		})
	}

	searchPodcasts(e) {	
		// e.keyCode gives us character key
		if (e.keyCode != 13) {
			return;
		}

		const searchTerm = e.target.value;

		this.props.podcastsReceived(searchTerm)
			.then(res => {
				let podcasts = res.response;

				if (podcasts.length == 0) {
					alert("No podcasts were found! Please try another search.")
				}

			})
			.catch(err => {
				alert("One moment while we catch our breathe!");
			});
		
	} 

	render() {
		return (
			<div>
		    	<div className="hero-header bg-pond animated fadeindown">
		        <h1 className="hero-title">Casts</h1>
		      </div>

		      <div className="p-20 animated fadeinup delay-1">
					<div style={{background: "#fff"}} id="player1" className="aplayer"></div>
				</div>

				<Search onSearch={this.searchPodcasts.bind(this)} />
	        </div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		podcasts: state.podcasts
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		podcastsReceived: (podcasts) => dispatch(actions.podcastsReceived(podcasts)),
		trackListReady: (list) => dispatch(actions.trackListReady(list))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);