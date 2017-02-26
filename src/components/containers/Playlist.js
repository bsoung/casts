import React, { Component } from 'react';
import { Search } from '../view';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Playlist extends Component {
	searchPodcasts(e) {	

		// e.keyCode gives us character key
		if (e.keyCode != 13) {
			return;
		}

		const searchTerm = e.target.value;
		console.log(this.props, "ouside apimanager")
		
		// search end point
		this.props.podcastsReceived(searchTerm);
		
	} 

	render() {
		return (
			<div>
		    	<div className="hero-header bg-shop animated fadeindown">
		        	<h1 className="hero-title">Podcasts</h1>
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