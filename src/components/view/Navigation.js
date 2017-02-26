import React from 'react';

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
					<li><a href="#" className="no-child">Shop</a></li>
					<li><a href="#" className="no-child">News</a></li>
					<li><a href="#" className="no-child">Video</a></li>
					<li><a href="#" className="no-child">Contact</a></li>
				</ul>
     
			</div>
		</nav> 
	</div>
)

 


