import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faNode, faSass } from '@fortawesome/free-brands-svg-icons'

const Misc = () => {
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
        <h1>Miscellaneous</h1>
            <img className="unicorn" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/palm-tree_1f334.png" alt="unicorn"/>
        <h3>Bassist</h3>
        <p>I picked up the bass nearly, 4 years ago, and I haven't put it dow since. This instrument is my voice and my muse for inspiration, creativity, and love. I'm a groove bassist, I love to play, forever.</p>
            <div className="tools bass" data-aos="fade-up">
                <p>My favorite Basses:</p>
                <div className="tool">
                    <a href="https://reactjs.org/">
                    <img src="/images/about/sterling.png" alt="Sketch"/>
                    <p>Stingray</p>
                    </a>
                </div>
                <div className="tool">
                    <a href="https://nodejs.org/">
                    <img src="/images/about/pbass.png" alt="Figma"/>
                    <p>P-bass</p>
                    </a>
                </div>
                <div className="tool">
                    <a href="https://sass-lang.com/">
                    <img src="/images/about/lakland.png" alt="xd"/>
                    <p>Jazz Bass</p>
                    </a>
                </div>
            </div>
            <div data-aos="fade-up">
            <h3>Performer</h3>
            <p>I love to play in bands, I will constantly find people to play with - in whatever location I'm in. My favorite genre of music to play is funk music, </p>
            <img className="about-img" src="/images/about/jfunk2.png" alt="J-Funk" />

            </div>
            <div className="tools artist" data-aos="fade-up">
                <p>My music heroes:</p>
                <div className="tool">
                    <img src="https://lh3.googleusercontent.com/proxy/KL5g8L_QzxcKk3pZMpYl5I6oOeO8YNE7prwDPFl0IRhnDcE2RN3wUYJnxEJryyiWR2OsvsoMOktLFdoqXPvGEnT9fGKQyVmtwDkX_XbLKKazw-wSuDKo8ovHfHMUGq-_5uF0jyu7488mQ94rBzsiLzXDctY2g6Ku3Vdal9uxSoeThc2sKN7E_u8Udk75m58RHmZBuNIonrpqsrwZrBn4TZtOEadEqq0wn8RXZVoZNHHyCCULd8mhDMsNUa0IFA" alt="JoeDart"/>
                    <p>Joe Dart</p>
                </div>
                <div className="tool">
                    <img src="https://i0.wp.com/www.notreble.com/wp-content/uploads/2012/04/james-jamerson-600x400.jpg" alt="James Jamerson"/>
                    <p>James Jamerson</p>
                </div>
                <div className="tool">
                    <img src="https://www.premierguitar.com/ext/resources/images/content/2018_10/FEAT/MonoNeon/Dec18_PG_FEAT_MonoNeon_Live-with-Ghost-Note_Photo-by-Fred-SanFilipo_WEB.jpg" alt="MonoNeon"/>
                    <p>MonoNeon</p>
                </div>
            </div>
        </main>
    );
}

export default Misc;