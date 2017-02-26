import React, { Component } from 'react';
import { Footer, Navigation } from '../view';
import { Podcasts } from '../containers';


class Featured extends Component {
	render() {
		return (
			<div id="main"> 
			      
			    <div id="content" className="main animated fadein">

			    	<div className="hero-header bg-shop animated fadeindown">
			        	<h1 className="hero-title">Podcasts</h1>
			        </div>

			        <div className="animated fadeinup delay-1">

			        	<Podcasts />
			          
			        	<div className="clr"></div>
			        	
			        </div>

			   		<Footer />

			    </div> 

			    	<Navigation />

			</div>
		)
	}
}

export default Featured;