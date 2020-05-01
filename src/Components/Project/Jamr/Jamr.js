import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faTv } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Jamr = () => {
    window.scrollTo({
        top: 0,
      });
    return (
        <main>
            <div className="jamr details" data-aos="fade-up">
            <Link to="/projects" className="exit"> 
                <FontAwesomeIcon icon={faTimesCircle} /> 
            </Link>
            <h1>Jamr</h1>
            <img className="detail-logo" src="/images/portfolio_icons/jamr_logo_white.svg" alt="jamr-logo" />
            <p>Find Musicians in your Area!</p>
            <div className="external-links">
                <a href="https://jamr-sei08.herokuapp.com/">
                <FontAwesomeIcon icon={faTv} /> 
                    <p>View Site</p>
                </a>
                <a href="https://github.com/kleimaj/jamr-web">
                    <FontAwesomeIcon icon={faGithub} /> 
                    <p>View Code</p>
                </a>
            </div>
            <div className="team" data-aos="fade-up">
                <h2>The Team</h2>
                <div className="teammate">
                    <img className="team-headshot" src="/images/headshots/portfolio_pic.jpg" alt="Jakey" />
                    <p>Jacob Kleiman</p>
                </div>
                <div className="teammate">
                    <img className="team-headshot" src="https://ca.slack-edge.com/T0351JZQ0-USFNL1FJQ-c019665b7422-512" alt="Jesus" />
                    <p>Jesus Quezada</p>
                </div>
            </div>
            <div className="problem-solution" data-aos="fade-up">
                <div className="text-block ">
                <h4>Problem:</h4>
                <p>It can be difficult to network with other
                artists without connections, as well as
                finding likeminded people in a big city.</p>
                </div>
                <div className="text-block">
                <h4>Solution:</h4>
                <p>Jamr allows users to express their talents and
                goals, find other artists to meet, inspire,
                and collaborate with.</p>
                </div>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Database Design</h2>
                <a href="/images/jamr/jamr_mongodb.png">
                <img src="/images/jamr/jamr_mongodb.png" alt="twilio-video-backend"/>
                </a>
                <p>Over the intial days of the project, We drafted ERD Diagrams, and conceptualized the entire back-end of our database. We aimed to acheieve full crud on the profiles as the MVP of our project. The back-end of Jamr is implemented with Express (Node.js) and MongoDB. </p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>User Story</h2>
                <a href="/images/jamr/uistory2.png">
                <img src="/images/jamr/uistory2.png" alt="twilio-video-backend"/>
                </a>
                <p>When launching the app, the user will be prompted to CREATE (register) or READ (login) to their account. From there they can UPDATE or DESTROY their profile and make them unique and customizable. Users will be able to explore and INDEX (find) fellow musicians to collaborate with.</p>
            </div>

            <div className="item" data-aos="fade-up">
            <h2>Google Maps API</h2>
                <a href="/images/jamr/uistory1.png">
                <img src="/images/jamr/uistory1.png" alt="twilio-video-backend"/>
                </a>
                <p>To tailor the map to the user's search preferences, we figured that the user should be able to filter the map based on Instruments, Genres, or Distance... we went ahead and built a function to filter out all falsey users of the filtering conditions.
                </p>
                <a href="/images/jamr/filtering.png">
                <img src="/images/jamr/filtering.png" alt="filtering algorithm"/>
                </a>
                <p>This is the user filtering algorithm I used for users to find other on the map. All users are filtered by the location query parameter. The function above calculates the distance between the two users given their geographical coordinates.
                </p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Instant Messaging with Socket.io</h2>
                <a href="/images/jamr/socketio.png">
                <img src="/images/jamr/socketio.png" alt="web-sockets"/>
                </a>
                <p>In order to achieve our chat feature we leveraged the popular JavaScript Socket.io library. This allowed us to have seamless event-driven data on the server and cilent side.</p>
            </div>
            <div className="item" data-aos="fade-up">
                <h2>UI & Branding</h2>
                <a href="/images/jamr/mood1.png">
                <img src="/images/jamr/mood1.png" alt="moodboard"/>
                </a>
                <p>The creative direction of the application ui stemmed from two separate ideas encapsulated in these mood boards.</p>
                <a href="/images/jamr/mood2.png">
                <img src="/images/jamr/mood2.png" alt="moodboard2"/>
                </a>
                <p>The final product was an integrated version of the two ideas. Minimal, triadic, and tool-like.</p>
            </div>
            <div className="item" data-aos="fade-up">
                <h2>High-Fi Wires</h2>
                <a href="/images/jamr/wires.png">
                <img src="/images/jamr/wires.png" alt="moodboard"/>
                </a>
                <p>The type logo was created with a modified musical take on the Helvetica typeface. Subheadings and paragraphs included Vice City Sans (which adds a depth of playfulness) as well as Raleway, which provided thin, minimal style to our app.</p>
            </div>
            <div className="item" data-aos="fade-up">
                <h2>Final Implementation</h2>
                <a href="/images/jamr/map.png">
                <img src="/images/jamr/map.png" style={{boxShadow: '3px 2px 5px 4px rgba(0,0,0,0.75)'}}alt="moodboard"/>
                </a>
                <p>For those readers who know me personally, this application is a long-time passion project of mine. It's something that I will always continue to craft, iterate, and modify. If you really know me, you would know that this isn't my first iteration of Jamr, if you'd like to view the Jamr - Android implementation, you can view it <a href="./jamr.html">here</a>!</p>
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

export default Jamr;