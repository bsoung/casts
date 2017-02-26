import React, { Component } from 'react';
import { Search } from '../view';
import { APIManager } from '../../utils';

class Playlist extends Component {
	searchPodcasts(e) {	

		// e.keyCode gives us character key
		if (e.keyCode != 13) {
			return;
		}

		const searchTermEndPoint = `/search/${e.target.value}`;
		
		// search end point
		APIManager
			.get(searchTermEndPoint, null)
			.then(res => {
				console.log("Loading...");

				return res;
			})
			.then(res => {
				console.log(JSON.stringify(res));
			})
			.catch(err => {
				alert(err.message);
			});
		
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

export default Playlist;