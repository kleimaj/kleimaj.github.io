import React, { useState } from 'react';
import './Body.css';
const Body = () => {
    const [imgSrc, setSrc] = useState('/images/headshots/portfolio_pic.jpg');
    return (
        <main>
            <img 
            className="headshot" 
            src={imgSrc} 
            alt="Jacob Kleiman Headshot" 
            onMouseEnter={(e) => setSrc('/images/headshots/palm_tree_blue_bg.png')}
            onMouseLeave={(e) => setSrc('/images/headshots/portfolio_pic.jpg')}/>
            {/* <div className="headshot"></div> */}
            <h1>Jacob Kleiman</h1>
            <p>
                Thanks for checking out my site! I'm Jacob, a software developer <span>currently seeking a full-time position.</span>
                {<br/>}
                * With the pandemic occurring, I'm absolutely open to remote work, as well as contracting!
            </p>
        </main>
    )
}

export default Body;