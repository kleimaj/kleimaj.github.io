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
                Thanks for checking out my site! I'm Jacob, a software developer and funky bass player. <span>I'm currently seeking a full-time position.</span>
                {<br/>}
                *With the pandemic occurring, I'm absolutely open to remote work, as well as contracting!
            </p>
            <p><Link to="#">Contact me</Link>, or check out my <Link to="/projects">projects</Link>!</p>
        </main>
    );
}

export default Home;