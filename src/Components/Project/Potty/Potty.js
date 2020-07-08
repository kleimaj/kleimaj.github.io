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
                <h2>Database Setup</h2>
                <a href="/images/potty/dbdiagram.png">
                <img src="/images/potty/dbdiagram.png" alt="potty angel database"/>
                </a>
                <p>This site was built with Django, the python backend framework. I utilized a PostgreSQL database with the Psycopg2 ORM. There are 4 main applications for the Potty, Comment, User, and Admin models.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Google Maps React</h2>
                <a href="/images/potty/googlemaps.png">
                <img src="/images/potty/googlemaps.png" alt="google maps view"/>
                </a>
                <p>For my application I decided to use the Google Maps React API to render longtitude and latitude potty locations on a map. Users are able to navigate to potties from their current location, and filter bathrooms based on their ratings.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>After Effects Animation</h2>
                <a href="/images/potty/aftereffects.png">
                <img src="/images/potty/aftereffects.png" alt="after effects console"/>
                </a>
                <p>I took on the challenge to grow my visual design skills by creating a logo animation with Adobe Illustrator and AfterEffects. I rendered the animation on my site with Lottie.js</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Final Implementation</h2>
                <a href="/images/potty/final.png">
                <img src="/images/potty/final.png" alt="final design"/>
                </a>
                <p>I built this website as a present for my father, who spends most of his days driving around Los Angeles. He is a bathroom enthusiast and a potty connoisseur, so I just want to take the time and thank him for the idea. Love you dad!</p>
            </div>
            </div>
        </main>
    )
}

export default Potty;