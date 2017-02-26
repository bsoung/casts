import React, { Component } from 'react';
import { Search } from '../view';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import APlayer from 'aplayer';

class Playlist extends Component {
		componentDidMount() {

		var ap1 = new APlayer({
		    element: document.getElementById('player1'),
		    narrow: false,
		    autoplay: false,
		    showlrc: false,
		    mutex: true,
		    theme: '#e6d0b2',
		    preload: 'metadata',
		    mode: 'circulation',
		    music: [

		    	{
			        title: 'Preparation',
			        author: 'Hans Zimmer/Richard Harvey',
			        url: 'http://devtest.qiniudn.com/Preparation.mp3',
			        pic: 'http://devtest.qiniudn.com/Preparation.jpg'
		    	}

		    ]
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

	}

	componentDidUpdate() {
		console.log('componentDidUpdate', JSON.stringify(this.props.podcasts.selected));
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