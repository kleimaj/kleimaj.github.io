import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faSass } from '@fortawesome/free-brands-svg-icons'

const About = () => {
    // const [imgSrc, setSrc] = useState('/images/about/jacob_profile.jpg');
    window.scrollTo({
        top: 0,
      });
    return (
        <main className="about" data-aos="fade-up">
            {/* <img 
            className="headshot" 
            src={imgSrc} 
            alt="Jacob Kleiman Headshot" 
            onMouseEnter={(e) => setSrc('/images/about/jfunk2.png')}
            onMouseLeave={(e) => setSrc('/images/about/jacob_profile.jpg')}/> */}
            {/* <div className="headshot"></div> */}
        <h1>Design Developer</h1>
            <img className="unicorn" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/unicorn-face_1f984.png" alt="unicorn"/>
        <h3>Software Developer</h3>
        <p>I enrolled in <a href="https://generalassemb.ly/">General Assembly</a>, where I honed my craft and pursued my passion for front-end development. At GA, I built some of my best projects, and worked over 480 hours on fundamental web development. You can view my profile <a href="https://profiles.generalassemb.ly/profiles/jacobkleiman">here</a>. During this experience, I learned what it means to be the best developer.</p>
            <div className="tools" data-aos="fade-up">
                <p>Some of my favorite developer tools:</p>
                <div className="tool">
                    <a href="https://reactjs.org/">
                    <FontAwesomeIcon className="react" icon={faReact} />
                    <p>React</p>
                    </a>
                </div>
                <div className="tool">
                    <a href="https://nodejs.org/">
                    <FontAwesomeIcon className="node" icon={faNode} />
                    <p>Node.js</p>
                    </a>
                </div>
                <div className="tool">
                    <a href="https://sass-lang.com/">
                    <FontAwesomeIcon className="sass" icon={faSass} />
                    <p>Sass</p>
                    </a>
                </div>
            </div>
            <div data-aos="fade-up">
            <h3>UX Designer</h3>
            <p>I studied computer science and user experience design at Western Washington University. The best class I took was the UX Capstone, where I worked on my first 6 month UX project with <a href="https://www.artefactgroup.com/">Artefact</a>, a ux firm in Seattle, WA. It was <Link to="/colab">this project</Link> that ignited my passion for building front-end interfaces.</p>
            </div>
            <div className="tools" data-aos="fade-up">
                <p>Some of my favorite designer tools:</p>
                <div className="tool">
                    <a href="https://reactjs.org/">
                    <img src="/images/about/sketch.svg" alt="Sketch"/>
                    <p>Sketch</p>
                    </a>
                </div>
                <div className="tool">
                    <a href="https://nodejs.org/">
                    <img id="figma" src="/images/about/figma.svg" alt="Figma"/>
                    <p>Figma</p>
                    </a>
                </div>
                <div className="tool">
                    <a href="https://sass-lang.com/">
                    <img src="/images/about/adobe-xd.svg" alt="xd"/>
                    <p>Adobe Xd</p>
                    </a>
                </div>
            </div>
            <div data-aos="fade-up">
            <h3>Data Analyst</h3>
            <p>I found a job with Universal Music Group in Los Angeles, CA. I found my niche in the big corporation by focusing on in-house data visualization tools. You can view more information about the project <Link to="/ircam">here</Link>. I created apps with <a href="https://d3js.org/">d3.js</a>, and anaylzed millions of units of creative metadata. My passion for attention to detail went mostly unnoticed, which ultimately led to my pursuit of becoming a front-end developer.</p>
            <p><Link to="#">Contact me</Link>, or check out my <Link to="/projects">projects</Link>!</p>
            </div>
        </main>
    );
}

export default About;