import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faTv } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Aiden = () => {
    window.scrollTo({
        top: 0,
      });
    return (
        <main>
            <div className="aiden details" data-aos="fade-up">
            <Link to="/projects" className="exit"> 
                <FontAwesomeIcon icon={faTimesCircle} /> 
            </Link>
            <h1>Aiden</h1>
            <p className="detail-logo">easy 
            <span role="img" aria-label="clap emoji"> 👏 </span> 
            simple 
            <span role="img" aria-label="clap emoji"> 👏 </span> 
            free 
            <span role="img" aria-label="clap emoji"> 👏 </span>
            video 
            <span role="img" aria-label="clap emoji"> 👏 </span>
            chat</p>
            <div className="external-links">
                <a href="https://jakechat69.herokuapp.com/">
                <FontAwesomeIcon icon={faTv} /> 
                    <p>View Site</p>
                </a>
                <a href="https://github.com/kleimaj/jakechat-frontend">
                    <FontAwesomeIcon icon={faGithub} /> 
                    <p>View Code</p>
                </a>
            </div>
            <div className="item summary" data-aos="fade-up">
                <h2>Summary</h2>
                <a href="/images/freechat/summary.png">
                <img src="/images/freechat/summary.png" alt="freechat summary"/>
                </a>
                <p>FreeChat is a means of easy, simple communication without the hassle of a sign-up / sign-in page. The most difficult task of this project was managing independent rooms by only allowing invited guests to communicate with the room host. This application was built with React hooks, node, express, and the twilio api!</p>
            </div>
            <div className="problem-solution" data-aos="fade-up">
                <div className="text-block ">
                <h4>Problem:</h4>
                <p>I observed how arduous it is for some users to install and sign-up for Zoom, or Skype - as well as loading up the software to use it everytime one wants to video-chat with friends and family.</p>
                </div>
                <div className="text-block">
                <h4>Solution:</h4>
                <p>Freechat streamlines the ability to video chat with friends online - by allowing for dynamic creation of rooms and participants, without the burden of an installation or onboarding process.</p>
                </div>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>React Component Tree</h2>
                <a href="/images/freechat/react-components.png">
                <img src="/images/freechat/react-components.png" alt="react component tree"/>
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
                <img src="/images/freechat/freechat-wires.png" alt="video chat wireframes"/>
                </a>
                <p>The visual concept behind my app is minimalistic. No bells and whistles to confuse the user, light button gradients, monospace typefaces. This was one of the hardest front-end designs I ever implemented, due to the less is more concept that I pursued, and the arbitrary number of video feeds connecting at any given time.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Final Implementation</h2>
                <a href="/images/freechat/final-implementation.png">
                <img src="/images/freechat/final-implementation.png" alt="people video chatting with freechat"/>
                </a>
                <p>During the 2020 shelter-in-place, I utilized this app to communicate with my close friends and family. The website is deployed on heroku you can view it <a href="https://jakechat69.herokuapp.com/">here</a>!</p>
            </div>
            </div>
        </main>
    )
}

export default Aiden;