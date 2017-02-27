import React, { Component } from 'react';
import { Footer, Navigation } from '../view';
import { Podcasts, Playlist } from '../containers';


class Featured extends Component {
	render() {
		return (
			<div id="main"> 
			    <div id="content" className="main animated fadein" style={{height: "100vh"}}>
			    	<Playlist />


			    	<div className="section center">
						<h4 className="m-0"><strong>Discover</strong></h4>
						<div className="line"></div>
						<p className="text-flow m-0">Satisfy your podcast hunger with five sample sessions and explore a large variety of topics.</p>
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