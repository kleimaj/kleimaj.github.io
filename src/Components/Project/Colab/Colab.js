import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faTv } from '@fortawesome/free-solid-svg-icons';
import { faSketch } from '@fortawesome/free-brands-svg-icons';

const Colab = () => {
    return (
        <main>
            <div className="colab details" data-aos="fade-up">
            <Link to="/projects" className="exit"> 
                <FontAwesomeIcon icon={faTimesCircle} /> 
            </Link>
            <h1>Colab</h1>
            <img className="detail-logo" src="/images/colab/colab.gif" alt="pika!!"/>
            <p>an academic app for {<br/>} finding a study buddy!</p>
            <div className="external-links">
                <a href="#">
                <FontAwesomeIcon icon={faTv} /> 
                    <p>View Demo</p>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faSketch} /> 
                    <p>Prototype</p>
                </a>
            </div>
            <div className="team" data-aos="fade-up">
                <h2>The Team</h2>
                <div className="teammate">
                    <img className="team-headshot" src="/images/headshots/Alyona.jpg" alt="Cat" />
                    <p>Alyona Guidma</p>
                </div>
                <div className="teammate">
                    <img className="team-headshot" src="/images/headshots/andy.jpg" alt="Andy" />
                    <p>Andy Lai</p>
                </div>
                <div className="teammate">
                    <img className="team-headshot" src="/images/headshots/portfolio_pic.jpg" alt="Jakey" />
                    <p>Jacob Kleiman</p>
                </div>
                <div className="teammate">
                    <img className="team-headshot" src="/images/headshots/anthony.jpg" alt="Anthony" />
                    <p>Anthony Barrios</p>
                </div>
                <div className="teammate">
                    <img className="team-headshot" src="/images/headshots/james.jpeg" alt="James" />
                    <p>James Harker</p>
                </div>
            </div>
            <div className="problem-solution" data-aos="fade-up">
                <div className="text-block ">
                <h4>Problem:</h4>
                <p>Due to social anxiety, financial
                        restrictions, and accessibility issues,
                        college students struggle finding
                        resources of academic success.</p>
                </div>
                <div className="text-block">
                <h4>Solution:</h4>
                <p>A platform which enables them 
                        to conveniently seek help either 
                        digitally or in-person.</p>
                </div>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Research Takeaways</h2>
                <a href="/images/colab/goals.png">
                <img src="/images/colab/goals.png" alt="twilio-video-backend"/>
                </a>
                <p>Our main goal for the UX project was to make the on-campus experience more inclusive. Our primary research takeaways were to promote collaboration, ensure accessibility, include all academics, and to provide a low-pressure support system.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Ideation</h2>
                <a href="/images/colab/prototyping.png">
                <img src="/images/colab/prototyping.png" alt="twilio-video-backend"/>
                </a>
                <p>We envisioned what popular products would look like if applied to classroom success context. Our best ideas led us to five key ideas that we would flesh out with more research.</p>
                <a href="/images/colab/five.png">
                <img src="/images/colab/five.png" alt="twilio-video-backend"/>
                </a>
                <p>Some of the ideas included an online forum for discussing in-class concepts, pop-up study locations, and a study buddy matching system. Our final concept included a mix of these three ideas.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Prototyping</h2>
                <a href="/images/colab/paper.png">
                <img src="/images/colab/paper.png" alt="twilio-video-backend"/>
                </a>
                <p>The wireframing process began with a paper prototype. This removed a lot of errors we found in our first, initial design. Some errors included a lack of description/context about the accessibility options, placements of buttons, as well as relying too heavily on a user chat.</p>
                <a href="/images/colab/midfi.png">
                <img src="/images/colab/midfi.png" alt="twilio-video-backend"/>
                </a>
                <p>After we received lots of significant feedback and critiqued, we implemented mid-fidelity wireframes with Framer. We were able to gain a lot more user insight and takeaways with mid-fi testing and analysis.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Brading Concepts</h2>
                <a href="/images/colab/moodboard.png">
                <img src="/images/colab/moodboard.png" alt="moodboard"/>
                </a>
                <p>We created three moodboards to envision the theme of our application. The main themes included gradients, monochromatic, and playful colors. The final design direction was a combination of monochromatic and playful.</p>
                <a href="/images/colab/designassets.png">
                <img src="/images/colab/designassets.png" alt="moodboard"/>
                </a>
                <p>The National typeface along with the monochromatic color scheme coincided with our project goals to create an intuitive system that encourages university inclusivity and accessibility for all students.</p>
            </div>
            <div className="item" data-aos="fade-up">
                <h2>Final Design</h2>
                <a href="/images/colab/final.png">
                <img src="/images/colab/final.png" alt="final-wires"/>
                </a>
                <p>We applied the design direction to our mid-fi wireframes, integrating the themes, colors, typefaces, and iconography. In the end we presented our project to nearly 50 people at the Artefact Strategy Firm, in Seattle WA. You can view our video demo <a href="#">here</a>!</p>
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

export default Colab;