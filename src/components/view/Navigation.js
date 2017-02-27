import React from 'react';
import { Link } from 'react-router';

export default (props) => (
	<div>
		<div className="menu-trigger z-depth-2"> 
			<div id="menu-icon">
			  <span></span>
			  <span></span>
			  <span></span>
			  <span></span>
			</div>
		</div>

		<nav id="menu" className="menu">
			<div className="menu-navigation">
				<ul className="full-menu collapsible">
					<li><Link to="/feature" href="#feature" className="no-child">Podcasts</Link></li>
					<li><a href="#" className="no-child">Shop</a></li>
					<li><a href="#" className="no-child">News</a></li>
					<li><Link to="/" href="#" className="no-child">Home</Link></li>
					
				</ul>
     
			</div>
		</nav> 
	</div>
)

 


