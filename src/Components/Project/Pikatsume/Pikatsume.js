import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faTv } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Pikatsume = () => {
    window.scrollTo({
        top: 0,
      });
    return (
        <main>
            <div className="pikatsume details" data-aos="fade-up">
            <Link to="/projects" className="exit"> 
                <FontAwesomeIcon icon={faTimesCircle} /> 
            </Link>
            <h1>Pikatsume</h1>
            <img className="detail-logo" src="https://i.ibb.co/6tYzGn9/pikachu-hop.gif" alt="pika!!"/>
            <p>A Pikachu Collector Game {<br/>} (for a good cause)!</p>
            <div className="external-links">
                <a href="https://pikatsume.herokuapp.com/">
                <FontAwesomeIcon icon={faTv} /> 
                    <p>View Site</p>
                </a>
                <a href="https://git.generalassemb.ly/Johnson/project-Pikatsume">
                    <FontAwesomeIcon icon={faGithub} /> 
                    <p>View Code</p>
                </a>
            </div>
            <div className="item summary" data-aos="fade-up">
                <h2>Summary</h2>
                <a href="/images/pika/summary.png">
                <img src="/images/pika/summary.png" style={{boxShadow: '3px 2px 5px 4px rgba(0,0,0,0.75)'}}alt="moodboard"/>
                </a>
                <p>Pikatsume (or Pika Collector) is an online game that encourages users to catch a varieties of Pikachu for charity. The most difficult part of this project was remote collaboration. The game is built with Django, Postgres, Bulma, and the Stripe api!</p>
            </div>
            <div className="team" data-aos="fade-up">
                <h2>The Team</h2>
                <div className="teammate">
                    <img className="team-headshot" src="https://ca.slack-edge.com/T0351JZQ0-URQKLT3U3-12180cc3a937-512" alt="Cat" />
                    <p>Cat Carbonell</p>
                </div>
                <div className="teammate">
                    <img className="team-headshot" src="/images/headshots/portfolio_pic.jpg" alt="Jakey" />
                    <p>Jacob Kleiman</p>
                </div>
                <div className="teammate">
                    <img className="team-headshot" src="https://ca.slack-edge.com/T0351JZQ0-US6V78CTH-f153c9cab8be-512" alt="Johnson" />
                    <p>Johnson Thieu</p>
                </div>
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
                <p>Pikatsume is implemented with Django, the fullstack Python framework. A postgres database is utilized to track user authentication, pikachu toys in the database, as well as all user transactions with stripe.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>User Story</h2>
                <a href="/images/pika/wire2.png">
                <img src="/images/pika/wire2.png" alt="twilio-video-backend"/>
                </a>
                <p>Users desire to collect cute, unique Pikachus. The user will sign up for an account and is awarded 10 Poffins (currency). To "catch" a Pikachu, which costs 5 poffins
                User "catches" a Pikachu and it is automatically added to their Pikachu collection.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Payment with Stripe API</h2>
                <a href="/images/pika/stripe.png">
                <img src="/images/pika/stripe.png" alt="twilio-video-backend"/>
                </a>
                <p>We utilized the stripe api to handle secure payments and online transactions. When the user decides to buy more poffins, or the in-game currency. Those poffin values are added to the database, and the money from the transaction is spent towards the save the children foundation.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Final Implementation</h2>
                <a href="/images/pika/pikabase.png">
                <img src="/images/pika/pikabase.png" alt="twilio-video-backend"/>
                </a>
                <p>This web-app was so fun to make. Most of the development process was streamlined thanks to Django! I'd love to thank my team, Johnson and Cat for help on the project! I'm happy to call you guys my friends and I hope we get to work on more projects in the future!</p>
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