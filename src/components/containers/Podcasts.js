import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Podcasts extends Component {
	selectPodCast(podcast, e) {
		this.props.podcastSelected(podcast);
	}

	render() {
		const { podcasts } = this.props;

		const podcastList = podcasts.allPodcasts || [];

		return (
			<div>

				{
					podcastList.map((podcast, i) => {
						return (

							<div key={i} className="shop-banner animated fadeinup delay-2">
					            <a onClick={this.selectPodCast.bind(this, podcast)} href="#">
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

const mapDispatchToProps = (dispatch) => {
	return {
		podcastSelected: (podcast) => dispatch(actions.podcastSelected(podcast))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Podcasts);