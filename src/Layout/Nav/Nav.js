import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Nav.css';

const Nav = () => {
    const size = useWindowSize();
    const [show, setShow] = useState(false);
    const render = (size.width > 980) ? renderDesktop() : renderMobile(show, setShow);
    return render;
}
const renderDesktop = () => {
    return (
        <div className="left">
            <aside>
            <Link to="/"><img id="header_logo" src="/images/portfolio_icons/LogoDesigner.svg" alt="logo"/></Link>
                    <div id="works">
                    <Link id="projects" to="/projects"><h2>Projects</h2></Link>
                    <a className = "project_link" href="colab.html"><span>01:&emsp;FreeChat</span></a>
                    <a className = "project_link" href="ircam.html"><span>02:&emsp;Jamr</span></a>
                    <a className = "project_link" href="jamr.html"><span>03:&emsp;Pikatsume</span></a>
                    <a className = "project_link" href="ircam.html"><span>04:&emsp;Co.Lab</span></a>
                    <a className = "project_link" href="ircam.html"><span>05:&emsp;Aboop</span></a>
                    <a className = "project_link" href="ircam.html"><span>06:&emsp;ircam</span></a>

                    </div>
                    <div id="misc">
                    <a href="profile.html"><h2>About</h2></a>
                    <a href="music.html"><h2>Misc</h2></a>
                    </div>
                </aside>
            </div>
    )
}
const renderMobile = (show, setShow) => {
    return (
        // <div className="left">
            <nav>
                <div className="nav-left">
                    {show ? 
                    <FontAwesomeIcon icon={faTimes} onClick={() => setShow(false)} />
                    : 
                    <FontAwesomeIcon icon={faBars} onClick={() => setShow(true)} /> }
                </div>
                <div className="nav-center">
            <Link to="/"><img id="nav_logo" src="/images/portfolio_icons/LogoDesigner.svg" alt="logo"/></Link>
                </div>
                {/* Hamburger Menu */}
                {show ?
                <div className="hamburger_menu">
                    <a className = "hamburger_link" href="colab.html"><span>01:&emsp;FreeChat</span></a>
                    <a className = "hamburger_link" href="ircam.html"><span>02:&emsp;Jamr</span></a>
                    <a className = "hamburger_link" href="jamr.html"><span>03:&emsp;Pikatsume</span></a>
                    <a className = "hamburger_link" href="ircam.html"><span>04:&emsp;Co.Lab</span></a>
                    <a className = "hamburger_link" href="ircam.html"><span>05:&emsp;Aboop</span></a>
                    <a className = "hamburger_link" href="ircam.html"><span>06:&emsp;ircam</span></a>
                    <a className = "hamburger_misc" href="#">About</a>
                    <a className = "hamburger_misc" href="#">Misc</a>

                </div>
                :
                ''
                }
            </nav>
        // </div>
    )
}
const useWindowSize = () => {
    const isClient = typeof window === 'object';
  
    const getSize = () => {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }
  
    const [windowSize, setWindowSize] = useState(getSize);
  
    useEffect(() => {
      if (!isClient) {
        return false;
      }
      
      function handleResize() {
        setWindowSize(getSize());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return windowSize;
  }

export default Nav;