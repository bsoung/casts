import React, { Component } from 'react';
import { Footer, Navigation } from '../view';

class Landing extends Component {
	render() {
		return (
			<div id="main"> 
			   <h1>Landing page</h1>
			   <Navigation />
			</div>
		)
	}
}

export default Landing;