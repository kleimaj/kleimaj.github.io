import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Nav.css';

const Nav = () => {
    const size = useWindowSize();
    const render = (size.width > 980) ? renderDesktop() : renderMobile();
    const [show, setShow] = useState(false);
    return render;
}
const renderDesktop = () => {
    return (
        <aside>
        <a href="#"><img id="header_logo" src="/images/portfolio_icons/LogoDesigner.svg" alt="logo"/></a>
                <div id="works">
                <a id="projects" href="index.html"><h2>Projects</h2></a>
                <a className = "project_link" href="colab.html"><span>01:&emsp;FreeChat</span></a>
                <a className = "project_link" href="jamr.html"><span>02:&emsp;Pikatsume</span></a>
                <a className = "project_link" href="ircam.html"><span>03:&emsp;Jamr</span></a>
                <a className = "project_link" href="ircam.html"><span>04:&emsp;Aboop</span></a>
                <a className = "project_link" href="ircam.html"><span>05:&emsp;Co.Lab</span></a>
                <a className = "project_link" href="ircam.html"><span>06:&emsp;ircam</span></a>

                </div>
                <div id="misc">
                <a href="profile.html"><h2>About</h2></a>
                <a href="music.html"><h2>Misc</h2></a>
                </div>
            </aside>
    )
}
const renderMobile = () => {
    return (
        <nav>
            <div className="nav-left">
            <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="nav-center">
        <a href="#"><img id="nav_logo" src="/images/portfolio_icons/LogoDesigner.svg" alt="logo"/></a>
            </div>
        </nav>
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