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
					<li><Link to="/about" href="#" className="no-child">About</Link></li>
					<li><Link to="/feature" href="#" className="no-child">Search</Link></li>
					<li><Link to="/" href="#" className="no-child">Lock</Link></li>
				</ul>
			</div>
		</nav> 
	</div>
)

 


