import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faTv } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faYoutube, faAmazon } from '@fortawesome/free-brands-svg-icons';

const Ircam = () => {
    return (
        <main>
            <div className="ircam details" data-aos="fade-up">
            <Link to="/projects" className="exit"> 
                <FontAwesomeIcon icon={faTimesCircle} /> 
            </Link>
            <h1>ircam</h1>
            <img src="/images/portfolio_icons/ircam.svg" className="detail-logo" alt="" />
            <p>Universal Music Group's {<br/>}Machine Learning and Metadata Modeling!</p>
            <div className="external-links">
                <a href="#">
                <FontAwesomeIcon icon={faTv} /> 
                    <p>View Site</p>
                </a>
                <a href="#">
                    <FontAwesomeIcon icon={faGithub} /> 
                    <p>View Code</p>
                </a>
            </div>
            <div className="problem-solution" data-aos="fade-up">
                <div className="text-block ">
                <h4>Problem:</h4>
                <p>Company music catalogues consist of albums and songs without organized, creative metadata or metadata modeling.</p>
                </div>
                <div className="text-block">
                <h4>Solution:</h4>
                <p>A machine learning classifier to aid in the tagging of creative metadata, as well as a system to visualize and generate data analytics for the machine learning output.</p>
                </div>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Corporate Partners</h2>
                <FontAwesomeIcon className="detail-logo" icon={faFacebook} />
                <FontAwesomeIcon className="detail-logo" icon={faAmazon} />
                <FontAwesomeIcon className="detail-logo" icon={faYoutube} />
                <p>The ircam system was shared with many other corporations including facebook, amazon, and youtube. The technology under Universal Music Group was utilized to create millions of instances of creative metadata.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Media Informatics Initiative</h2>
            <h3>Voice</h3>
                <p>Improve query results, contextual
                    accuracy and discovery for growing
                    consumption on smart speakers</p>
                <h3>Search Engine Optimization</h3>
                <p>Enable partners to leverage additional
                    metadata to improve search & 
                    recommendation results.</p>
                <h3>Playlisting</h3>
                <p>Enhance playlisting efforts by leveraging
                    the musical characteristics of our catalog</p>
                <h3>Synchronization & Licensing</h3>
                <p>Empower search across UMG’s catalog & create
                    a unified metadata standard across partners and labels.</p>
            </div>

            <div className="item" data-aos="fade-up">
                <h2>Automated Metadata Output</h2>
                <a href="/images/ircam/rehab.jpg">
                <img src="/images/ircam/rehab.jpg" alt="Amy Winehouse"/>
                </a>
                <h3>"Rehab" by Amy Winehouse</h3>
                <ul>
                    <li>Genre: R&B, Pop</li>
                    <li>Tempo: 146 BPM</li>
                    <li>Meter: 4/4</li>
                    <li>Key: C major / A minor</li>
                    <li>Voice: Alto</li>
                    <li>Structure: Simple, Repetitive</li>
                    <li>Instruments: Piano, Brass Section, Bass, Percussion, Female Vocals</li>
                </ul>
            </div>
            <div className="item" data-aos="fade-up">
                <h2>Media Informatics Initiative</h2>
            <h3>Research</h3>
                <p>Create UMG audio tracks as examples for specific audio classes (i.e Genres, Instruments, Emotions, and Tempos)</p>
                <h3>Train</h3>
                <p>ircam machine AI ‘listens’ to the sample tracks and learns how to derive the presence of the attributes for all the audio.</p>
                <h3>Run</h3>
                <p>Update the algorithm for UMG’s central audio repository. All audio tracks will be re-processed with new attributes.</p>
                <h3>Refine</h3>
                <p>Continual process of tag verification and feedback is used for training set improvements.</p>
            </div>
            <div className="item" data-aos="fade-up">
                <h2>Metadata Modeling</h2>
                <a href="/images/ircam/interscope.png">
                <img src="/images/ircam/interscope.png" alt="twilio-video-backend"/>
                </a>
                <p>These visualizations are created via a script utilizing the Google Big Query API. An input set of ISRCs (or songs) will output averages of creative metadata</p>
                <a href="/images/ircam/disney.png">
                <img src="/images/ircam/disney.png" alt="twilio-video-backend"/>
                </a>
                <p>The averages are tailored into d3 donut graphs and are utilized to articulate the creative metadata analytics of sub labels and UMG partners.</p>
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

export default Ircam;