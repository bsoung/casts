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
			trackList: null,
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

		console.log(feedUrl, "do we update all?")

		if (feedUrl == null) {
			return;
		}

		if (this.state.trackList != null) {
			return;
		}

		APIManager
			.get('/feed', {url: feedUrl})
			.then(res => {
				const podcast = res.podcast;
				const selectedPodcast = this.props.podcasts.selected;
				const item = podcast.item;

				let list = [];

				item.forEach((track, i) => {
					console.log(JSON.stringify(track), "track is")

					let trackInfo = {};
					let enclosure = track.enclosure[0]['$'];

					trackInfo.title = track.title[0];
					trackInfo.author = selectedPodcast.collectionName;
					trackInfo.pic = selectedPodcast['artworkUrl600'];
					trackInfo.url = enclosure.url;

					list.push(trackInfo);
				});

				// TODO: not updating list after second click
				if (this.state.player == null) {
					this.initializePlayer(list);
				}
				
			})
			.catch(err => {
				alert("Format not supported yet.");
				console.error(err.message);
			});
	}

	initializePlayer(tracks) {
		let sublist = [];

		// just show 3
		if (tracks.length > 3) {
			for (let i = 0; i < 3; i++) {
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

		// ap1.on('play', function () {
		//     console.log('play');
		// });
		// ap1.on('play', function () {
		//     console.log('play play');
		// });
		// ap1.on('pause', function () {
		//     console.log('pause');
		// });
		// ap1.on('canplay', function () {
		//     console.log('canplay');
		// });
		// ap1.on('playing', function () {
		//     console.log('playing');
		// });
		// ap1.on('ended', function () {
		//     console.log('ended');
		// });
		// ap1.on('error', function () {
		//     console.log('error');
		// });
		
		this.setState({
			trackList: tracks,
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
			.catch(err => {
				alert(err);
			});
		
	} 

	render() {
		console.log("WHAT IS OUR STATE", this.state.trackList);
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
		podcastsReceived: (podcasts) => dispatch(actions.podcastsReceived(podcasts))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);