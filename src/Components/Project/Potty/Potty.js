import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faTv } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Lottie from 'react-lottie';
import * as animationData from './logoanimation2.json';
const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    // rendererSettings: {
    //   preserveAspectRatio: 'xMidYMid slice'
    // }
  };

const Potty = () => {
    window.scrollTo({
        top: 0,
      });
    return (
        <main>
            <div className="potty details" data-aos="fade-up">
            <Link to="/projects" className="exit"> 
                <FontAwesomeIcon icon={faTimesCircle} /> 
            </Link>
            <h1>Potty Angel</h1>
            <Lottie options={defaultOptions}
              height={300}
              width={300}
              // isStopped={this.state.isStopped}
              // isPaused={this.state.isPaused}
              />
            <p className="detail-logo">Search, Create, and Rate Bathrooms Near You!</p>
            <div className="external-links">
                <a href="http://pottyangels.com/">
                <FontAwesomeIcon icon={faTv} /> 
                    <p>View Site</p>
                </a>
                <a href="https://github.com/kleimaj/pottyangelreact">
                    <FontAwesomeIcon icon={faGithub} /> 
                    <p>View Code</p>
                </a>
            </div>
            <div className="item summary" data-aos="fade-up">
                <h2>Summary</h2>
                <a href="/images/potty/summary.png">
                <img src="/images/potty/summary.png" alt="Potty summary"/>
                </a>
                <p>Potty Angel is a platform for finding all quality bathrooms, anywhere in the world. The most difficult task of this project was developing a frontend, backend, and deploying the project all on my own. This application was built with React hooks, Django, Postgresql, and AWS.</p>
            </div>
            <div className="problem-solution" data-aos="fade-up">
                <div className="text-block ">
                <h4>Problem:</h4>
                <p>For drivers, mothers, and any kind of person, it can be difficult to find bathrooms, especially in big metropolitan areas.</p>
                </div>
                <div className="text-block">
                <h4>Solution:</h4>
                <p>Potty Angel allows users to quickly search for bathrooms in that related area. Users are able to rate and comment on their varying bathroom experiences.</p>
                </div>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>React Component Tree</h2>
                <a href="/images/freechat/react-components.png">
                <img src="/images/freechat/react-components.png" alt="twilio-video-backend"/>
                </a>
                <p>This website is implemented with React Hooks. The Lobby component handles the creation of rooms and users. The room component houses the participants, which contain the user identities, and the video + audio streams.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Twilio Video</h2>
                <a href="/images/freechat/access-tokens.png">
                <img src="/images/freechat/access-tokens.png" alt="twilio-video-backend"/>
                </a>
                <p>For my application I decided to use the video application programming interface from Twilio. This API ensures secure, high quality, video connection. All video chat rooms and user identities are organized by a form of JWTs - Twilio Access Tokens</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>UI & Design</h2>
                <a href="/images/freechat/freechat-wires.png">
                <img src="/images/freechat/freechat-wires.png" alt="twilio-video-backend"/>
                </a>
                <p>The visual concept behind my app is minimalistic. No bells and whistles to confuse the user, light button gradients, monospace typefaces. This was one of the hardest front-end designs I ever implemented, due to the less is more concept that I pursued, and the arbitrary number of video feeds connecting at any given time.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Final Implementation</h2>
                <a href="/images/freechat/final-implementation.png">
                <img src="/images/freechat/final-implementation.png" alt="twilio-video-backend"/>
                </a>
                <p>During the 2020 shelter-in-place, I utilized this app to communicate with my close friends and family. The website is deployed on heroku you can view it <a href="https://jakechat69.herokuapp.com/">here</a>!</p>
            </div>
            </div>
            {/* <Link className="next" to="/jamr">
            <div className="jamr">
                <img src="/images/portfolio_icons/jamr_logo_white.svg" alt="Jamr Logo"/>
                <h3>See the next Project!</h3>
            </div>
            </Link> */}
        </main>
    )
}

export default Potty;