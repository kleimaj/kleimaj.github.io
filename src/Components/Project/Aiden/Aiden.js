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
            <h1><img src="/images/portfolio_icons/aiden-dark.svg" alt="Aiden Health Logo" /></h1>
            <p className="detail-logo">Because Life is Worth Living</p>
            <div className="external-links">
                <a href="https://jacobkleiman.com/AidenHealth">
                <FontAwesomeIcon icon={faTv} /> 
                    <p>View Site</p>
                </a>
                <a href="https://github.com/kleimaj/AidenHealth">
                    <FontAwesomeIcon icon={faGithub} /> 
                    <p>View Code</p>
                </a>
            </div>
            <div className="item summary" data-aos="fade-up">
                <h2>Summary</h2>
                <a href="/images/aiden/smartmockup.jpg">
                <img src="/images/aiden/smartmockup.jpg" alt="Aiden summary"/>
                </a>
                <p>Aiden Health is an A11y accessible health care platform for a universal user audience. I designed this project under General Assembly's Visual Design Immersive with Figma and built it with React and styled-components. I also built out a design system with Storybook.js you can view <a href="aidenhealth.netlify.app">here</a>!</p>
            </div>
            <div className="problem-solution" data-aos="fade-up">
                <div className="text-block ">
                <h4>Problem:</h4>
                <p>Lots of modern health care applications and platforms are riddled with information overflow and inaccessible design. I found this problematic for users, especially during the time of a global pandemic.</p>
                </div>
                <div className="text-block">
                <h4>Solution:</h4>
                <p>Aiden Health utilizes trustful body content, and an accessible color palette in order to employ a cohesive and minimalistic message to its userbase. This site was built with a design system in order to test every component for A11y compliance.</p>
                </div>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Design Research</h2>
                <a href="/images/aiden/research.png">
                <img src="/images/aiden/research.png" alt="Top Three Values"/>
                </a>
                <p>The main takeaways of my design research align with Aiden Health's core values. Ensuring an inclusive environment for all users, utilizing accesibility, and providing the users with trustworthy prose and imagery.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Design Elements</h2>
                <a href="/images/aiden/palette.png">
                <img src="/images/aiden/palette.png" alt="color palette"/>
                </a>
                <a href="/images/aiden/typescale.png">
                <img src="/images/aiden/typescale.png" alt="modular typographic scale"/>
                </a>
                <p>I built a consistent color system and modular typographic scale to create a general theme for Aiden. The type-scale uses a variation of the major third type scale in order to create a modular scale for varying screen sizes.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Figma Wireframes</h2>
                <a href="/images/aiden/wireframes.png">
                <img src="/images/aiden/wireframes.png" alt="low and mid fidelity wireframes"/>
                </a>
                <p>I began to draft wireframes to create meaningful order of visual elements on the site. After creating a basic low-fidelity that was working, I began adding and editing the body content such that it was related to the core values. Illustrations and images were utilized from undraw.io and unsplash.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Styled-Components</h2>
                <a href="/images/aiden/buttons.png">
                <img src="/images/aiden/buttons.png" alt="button design system"/>
                </a>
                <p>I designed all types of button states that would take place on the Aiden Health website. I stored all states inside a figma file and later exported them into Storybook.js along with button documentation.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Final Design</h2>
                <a href="/images/aiden/final2.png">
                <img src="/images/aiden/final2.png" alt="final design"/>
                </a>
                <p>I fully programmed the design into code with React and deployed it with Netlify. The site is mobile responsive and also contains a setting for enabling a dark mode feature. Check out the deployed site <a href="https://jacobkleiman.com/AidenHealth">here</a>!</p>
                <a href="/images/aiden/Storybook.png">
                <img src="/images/aiden/Storybook.png" alt="final design"/>
                </a>
                <p>Along with the prototype, I consistently updated the documentation and components with Storybook.js. The design system contains nearly 20 components and design elements I utilized for the branding of Aiden. If you'd like to see the design system more in depth, check it out <a href="https://aidenhealth.netlify.app/">here</a>!</p>
            </div>
            </div>
        </main>
    )
}

export default Aiden;