import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faTv } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Aboop = () => {
    window.scrollTo({
        top: 0,
      });
    return (
        <main>
            <div className="aboop details" data-aos="fade-up">
            <Link to="/projects" className="exit"> 
                <FontAwesomeIcon icon={faTimesCircle} /> 
            </Link>
            <h1>Aboop</h1>
            <img className="detail-logo" src="/images/portfolio_icons/aboop_logo.png" alt="bubble"/>
            <p>Pop, Breathe, Restore</p>
            <div className="external-links">
                <a href="http://jacobkleiman.com/bubble_pop/">
                <FontAwesomeIcon icon={faTv} /> 
                    <p>View Site</p>
                </a>
                <a href="https://github.com/kleimaj/bubble_pop">
                    <FontAwesomeIcon icon={faGithub} /> 
                    <p>View Code</p>
                </a>
            </div>
            <div className="item summary" data-aos="fade-up">
                <h2>Summary</h2>
                <a href="/images/aboop/summary.png">
                <img src="/images/aboop/summary.png" style={{boxShadow: '3px 2px 5px 4px rgba(0,0,0,0.75)'}}alt="moodboard" style={{width:'300px', padding:'15px'}}/>
                </a>
                <a href="/images/aboop/summary2.png">
                <img src="/images/aboop/summary2.png" style={{boxShadow: '3px 2px 5px 4px rgba(0,0,0,0.75)'}}alt="moodboard" style={{width:'300px' , padding:'15px'}}/>
                </a>
                <p>Aboop is a web application that gamifies the restorative process by encouraging the user to breathe, while providing a comfortable interaction (like bubble-wrap).
                    {<br/>}
                The hardest part of this project was the collision detection of bubbles, and animating how they move on the screen.
                {<br/>}
                Aboop is programmed in pure, Javascript ES6, CSS, and HTML.
                </p>
            </div>
            <div className="problem-solution" data-aos="fade-up">
                <div className="text-block ">
                <h4>Problem:</h4>
                <p>When I first arrived to San Francisco, CA, I was absolutely overwhelmed with anxiety when I would take the express bus to the financial district.</p>
                </div>
                <div className="text-block">
                <h4>Solution:</h4>
                <p>A restorative game that allows the user to focus on their breathing, with fun and responsive interactions with bubbles!</p>
                </div>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>User Story</h2>
                <a href="/images/aboop/lowfi.png">
                <img src="/images/aboop/lowfi.png" alt="twilio-video-backend"/>
                </a>
                <p>Upon starting the game, the user's screen will begin to slowly populate with bubbles. During this time, a larger bubble (The Guru bubble, if you will) will guide the player into retaining their breath while popping 108 bubbles (a sacred number in Hindu, Buddhist, and yogic traditions).</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Bubble Class and OOP</h2>
                <a href="/images/aboop/class.png">
                <img src="/images/aboop/class.png" alt="twilio-video-backend"/>
                </a>
                <p>Here is the Bubble class in my js file. The bubble class is responsible for housing the bubble positions on the screen, as well as their width, animation, collision detection, and their popping functionality. Bubbles move at a rate of 5 pixels per 100 miliseconds!</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Collision Detection</h2>
                <a href="/images/aboop/collision.png">
                <img src="/images/aboop/collision.png" alt="twilio-video-backend"/>
                </a>
                <p>For each frame in the game, each bubble scans for:
                    Every other bubble on the screen: if a bubble collides with another bubble, it will change its direction (velocity) in the opposite x or y direction, this depends on where the bubbles hit each other.
                    Colliding with the edges of the screen. The program attaches a resize event listener onto the body, so everytime the screen is resized, the bubbles will take into account the locations of the edges.</p>
            </div>
            <div className="item" data-aos="fade-up">
                <h2>Design Concepts</h2>
                <a href="/images/aboop/mood1.png">
                <img src="/images/aboop/mood1.png" alt="twilio-video-backend"/>
                </a>
                <a href="/images/aboop/mood2.png">
                <img src="/images/aboop/mood2.png" alt="twilio-video-backend"/>
                </a>
                <p>The branding concepts behind the game were playful, fun, and child-like, and on the other hand, nature aesthetic, peaceful, and restorative backdrops. The final result was something of a result of two main ideas, Playful and Natural.</p>
            </div>
            <div className="item" data-aos="fade-up">
                <h2>Hi-Fi Wireframing</h2>
                <a href="/images/aboop/hifi.png">
                <img src="/images/aboop/hifi.png" alt="twilio-video-backend"/>
                </a>
                <p>After the first inital days of logic development, wireframing and planning. I committed my final two days to implementing as much of the front-end design as I could. And I'm proud to announce I've never been happier with a project that entails front-end development. Some of my major acheivements were creating the breathe element (the bubble guru) as well as the bubble animations, theme and bubble customization, and how this project can really go many ways from here.</p>
                <p>If you're interested in seeing my project presentation in front of 30 people at General Assembly, please check it out <a href="https://youtu.be/Anr0rGHVRsE">here</a>!</p>
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

export default Aboop;