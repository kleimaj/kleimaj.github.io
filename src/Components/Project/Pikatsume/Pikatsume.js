import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faTv } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Pikatsume = () => {
    return (
        <main>
            <div className="pikatsume details" data-aos="fade-up">
            <Link to="/projects" className="exit"> 
                <FontAwesomeIcon icon={faTimesCircle} /> 
            </Link>
            <h1>Pikatsume</h1>
            <img className="detail-logo" src="/images/portfolio_icons/surprised_pika.png" alt="pika!!"/>
            <p>A Pikachu Collector Game {<br/>} (for a good cause)!</p>
            <div className="external-links">
                <a href="#">
                <FontAwesomeIcon icon={faTv} /> 
                    <p>View Site</p>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faGithub} /> 
                    <p>View Code</p>
                </a>
            </div>
            <div className="problem-solution" data-aos="fade-up">
                <div className="text-block ">
                <h4>Problem:</h4>
                <p>Online 'Gacha games' consistently trick younger users into spending their parent's credit cards on virtual items.</p>
                </div>
                <div className="text-block">
                <h4>Solution:</h4>
                <p>Pikatsume (or Pika Collector), is a means of converting this user behavior into a charity driven platform!</p>
                </div>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Postgres Design</h2>
                <a href="/images/pika/postgresdesign.png">
                <img src="/images/pika/postgresdesign.png" alt="twilio-video-backend"/>
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

export default Pikatsume;