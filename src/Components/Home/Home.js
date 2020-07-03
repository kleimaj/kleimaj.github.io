import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faSass } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    const [imgSrc, setSrc] = useState('/images/headshots/portfolio_pic.jpg');
    return (
        <main data-aos="fade-up">
            <img 
            className="headshot" 
            src={imgSrc} 
            alt="Jacob Kleiman Headshot" 
            onMouseEnter={(e) => setSrc('/images/headshots/palm_tree_blue_bg.png')}
            onMouseLeave={(e) => setSrc('/images/headshots/portfolio_pic.jpg')}/>
            {/* <div className="headshot"></div> */}
            <h1>Jacob Kleiman</h1>
            <p>
                Thanks for checking out my site! I'm Jacob, a freelance developer and funky bass player. 
                {<br/>}
                I'm a creative soul, with a passion for software development and design.
                {<br/>}
                 I'm most interested in working on projects that challenge me and make me a better developer. Whether it be designing a website, building a scalable backend, or deploying fullstack web applications. 
                {<br/>}
                <span>*Currently, I am an IA at General Assembly.</span>
            </p>
            <p><a href="mailto:jacobakleiman@gmail.com">Contact me</a>, or check out my <Link to="/projects">projects</Link>!</p>
        </main>
    );
}

export default Home;