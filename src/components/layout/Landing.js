import React, { Component } from 'react';
import { Footer, Navigation } from '../view';
import { Link } from 'react-router';

class Landing extends Component {
	render() {
		return (

			<div id="main"> 
				<div id="content" className="main animated fadein">

					<div className="fullscreen autoflow bg-main">
						<div className="opacity-overlay"></div>

						<div className="clock center-align animated fadein delay-2">
							<h2>Pod : <strong>Casts</strong></h2>
							<span>Broaden horizons</span>
						</div>

						<ul className="collection notify" style={{opacity: "0.8"}}>
							<li className="collection-item white z-depth-1 dismissable animated fadeinup delay-2">
								<div className="notify-header">
									<img className="avatar circle" src="img/podre.jpg" alt="" />
									<div className="notify-author">
										<span>Podre the Pod Bot</span>
										<span className="truncate">Initializing a grande pod heist...</span>
										<span className="small">sent from the Pod-trix</span>
									</div>
								</div>
							</li>

							<li className="collection-item white z-depth-1 dismissable animated fadeinup delay-3">
								<div className="notify-header">
									<img className="avatar circle" src="img/casti.png" alt="" />
									<div className="notify-author">
										<span>Casti the Chosen Bot</span>
										<span className="truncate">Fighting off hostile pod agents...</span>
										<span className="small">sent from the Pod-trix</span>
									</div>
								</div>
							</li>

							<li className="collection-item white z-depth-1 dismissable animated fadeinup delay-4">
								<div className="notify-header">
									<img className="avatar circle" src="img/podre.jpg" alt="" />
									<div className="notify-author">
										<span>Podre the Pod Bot</span>
										<span className="truncate">Retrieving pod goods...</span>
										<span className="small">sent from the Pod-trix</span>
									</div>
								</div>
							</li>

							<li className="collection-item white z-depth-1 dismissable animated fadeinup delay-4">
								<div className="notify-header">
									<img className="avatar circle" src="img/podre.jpg" alt="" />
									<div className="notify-author">
										<span>Podre the Pod Bot</span>
										<span className="truncate">Heist complete. <strong>Press lock icon.</strong></span>
										<span className="small">sent from the Pod-trix</span>
									</div>
								</div>
							</li>

						</ul>

						<div className="animated bouncein delay-6">
							<div className="unlock">
								<Link to="/feature" href="#"><i className="ion-android-lock"></i></Link>
							</div>
						</div>
					</div>

				</div> 
			</div>

		)
	}
}

export default Landing;