import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faAmazon } from '@fortawesome/free-brands-svg-icons';

const Ircam = () => {
    window.scrollTo({
        top: 0,
      });
    return (
        <main>
            <div className="ircam details" data-aos="fade-up">
            <Link to="/projects" className="exit"> 
                <FontAwesomeIcon icon={faTimesCircle} /> 
            </Link>
            <h1>ircam</h1>
            <img src="/images/portfolio_icons/ircam.svg" className="detail-logo" alt="ircam icon" />
            <p>Universal Music Group's {<br/>}Machine Learning and Metadata Modeling!</p>   
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
                    a unified metadata standard across partners and labels.
                    </p>
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
                <a href="https://i.pinimg.com/originals/ce/f3/73/cef373254ff38570434d46c82f6884f4.gif">
                <img src="https://i.pinimg.com/originals/ce/f3/73/cef373254ff38570434d46c82f6884f4.gif" alt="d3 animation"/>
                </a>
                <p>D3.js data visualizations are created via a script utilizing the Google Big Query API. The script will average creative metadata with its occurences in the master catalogue. An input set of ISRCs (or songs) will output averages of creative metadata</p>
                <a href="https://www.d3-graph-gallery.com/img/graph/pie_changeData.gif">
                <img src="https://www.d3-graph-gallery.com/img/graph/pie_changeData.gif" alt="d3 graph"/>
                </a>
                <p>The averages are tailored into d3 donut graphs and pie charts. The visualizations are utilized to articulate the creative metadata analytics to sub labels and UMG partners. This data would be presented in meetings of 30+ people.</p>
            </div>
            </div>
        </main>
    )
}

export default Ircam;