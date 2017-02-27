import React from 'react';
import Navigation from './Navigation';

export default (props) => (
    <div id="main">

        <div id="content" className="main animated fadein">

            <div className="relative bg-rolling-sky animated fadeindown">

                <div className="opacity-overlay"></div>

                <div className="hero-header hero-small animated fadeindown">
                    <h1 className="hero-title white-text">About Casts</h1>
                </div>

                <div className="media-top-object author-bio animated fadeinright">
                    <img src="img/benny.jpg" alt="" className="media-left avatar big" />
                    <div className="media-body">
                        <h4 className="white-text">Benjamin Soung</h4>
                        <span className="small white-text"><strong>continues building</strong> up the pod homebase to ward off attacks from those pesky pod-stealing agents. A never-ending labor of love. Casts is an on-going project exploring responsive design, animations, and the wonderful world of React. Made for those who wish to immerse themselves in the world of user generated feeds.</span>
                        <a href="https://www.soungbenjamin.com" className="waves-effect waves-light btn primary-color block animated bouncein delay-2">Visit Benjamin's website</a>
                    </div>
                </div>
            </div>

            <div className="timeline">

                <div className="media-top-object p-20 animated fadeinright delay-2">
                    <div className="dot primary-color"></div>
                    <img src="img/benny.jpg" alt="" className="media-left avatar" />
                    <div className="media-body">
                        <span><strong>Benjamin Soung</strong></span>
                        <span className="small grey-text">Benjamin continues to add, test, and debug new features to the Casts app. The next adventure lies in the database! May he meet more friendly bots along the way!</span>
                    </div>
                </div>

                <div className="media-top-object p-20 animated fadeinright delay-3">
                    <div className="dot primary-color"></div>
                    <img src="img/benny.jpg" alt="" className="media-left avatar" />
                    <div className="media-body">
                        <span><strong>Benjamin Soung</strong></span>
                        <span className="small grey-text">With the help of his fellow bots, Benjamin was able to finish the first version of his app and deploy it to Heroku.</span>
                    </div>
                </div>

                <div className="media-top-object p-20 animated fadeinright delay-4">
                    <div className="dot primary-color"></div>
                    <img src="img/podre.jpg" alt="" className="media-left avatar" />
                    <div className="media-body">
                        <span><strong>Podre the Pod Bot</strong></span>
                        <span className="small grey-text">A resourceful little bot named Podre appeared out of nowhere with powerful API scavenging skills. He would prove useful to the tasks ahead.</span>
                    </div>
                </div>

                <div className="media-top-object p-20 animated fadeinright delay-5">
                    <div className="dot primary-color"></div>

    				<img src="img/casti.png" alt="" className="media-left avatar" />

                    <div className="media-body">
                        <span><strong>Casti the Chosen Bot</strong></span>
                        <span className="small grey-text">Casti found her way through the Pod-trix and made herself home in Casts. She is the Chosen Bot, capable of fighting off hordes of pesky bugs and agents.</span>
                    </div>
                </div>

                <div className="media-top-object p-20 animated fadeinright delay-6">
                    <div className="dot primary-color"></div>
                    <img src="img/benny.jpg" alt="" className="media-left avatar" />
                    <div className="media-body">
                        <span><strong>Benjamin Soung</strong></span>
                        <span className="small grey-text">One morning, Benjamin was browsing some awesome programming podcasts when he suddenly felt that familiar itch in the back of his brain. It was time for another project. This time, he would build his most elegant project yet and help other people discover new podcasts!</span>
                    </div>
                </div>

            </div>

        </div>

        <Navigation />

    </div>

)
