import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Podcasts extends Component {
	render() {
		const podcastList = this.props.podcasts.allPodcasts || [];

		return (
			<div>

				{
					podcastList.map(podcast => {
						return (

							<div key={podcast.trackId} className="shop-banner animated fadeinup delay-2">
					            <a href="#">
					            	<img src={podcast.artworkUrl600} alt="" />
					            	<div className="opacity-overlay valign-wrapper">
					            		<div className="valign center width-100">
					                  		<h3 className="white-text">{podcast.artistName}</h3>
					                  		<p className="white-text">{podcast.collectionCensoredName}</p>
					                	</div>
					              	</div>
					            </a>
					        </div>
						)
					})
				}

	        </div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		podcasts: state.podcasts
	}
}

export default connect(mapStateToProps)(Podcasts);