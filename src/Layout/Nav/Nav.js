import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
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
            <Link to="/"><img data-aos="fade-up" id="header_logo" src="/images/portfolio_icons/LogoDesigner.svg" alt="logo"/></Link>
                    <div id="works" data-aos="fade-up">
                    <Link id="projects" to="/projects"><h2>Projects</h2></Link>
                    <Link className="project_link" to="/freechat"><span>01:&emsp;FreeChat</span></Link>
                    <Link className="project_link" to="/jamr"><span>02:&emsp;Jamr</span></Link>
                    <Link className="project_link" to="/pikatsume"><span>03:&emsp;Pikatsume</span></Link>
                    <Link className="project_link" to="/colab"><span>04:&emsp;Co.Lab</span></Link>
                    <Link className="project_link" to="/aboop"><span>05:&emsp;Aboop</span></Link>
                    <Link className="project_link" to="/ircam"><span>06:&emsp;ircam</span></Link>

                    </div>
                    <div id="misc" data-aos="fade-up">
                    <Link to="/about"><h2>About</h2></Link>
                    <Link to="/misc"><h2>Misc</h2></Link>
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
                    <Link className = "hamburger_link" to="/freechat" onClick={()=>setShow(false)}><span>01:&emsp;FreeChat</span></Link>
                    <Link className = "hamburger_link" to="/jamr" onClick={()=>setShow(false)}><span>02:&emsp;Jamr</span></Link>
                    <Link className = "hamburger_link" to="/pikatsume" onClick={()=>setShow(false)}><span>03:&emsp;Pikatsume</span></Link>
                    <Link className = "hamburger_link" to="/pikatsume" onClick={()=>setShow(false)}><span>04:&emsp;Co.Lab</span></Link>
                    <Link className = "hamburger_link" to="/aboop" onClick={()=>setShow(false)}><span>05:&emsp;Aboop</span></Link>
                    <Link className = "hamburger_link" to="/ircam" onClick={()=>setShow(false)}><span>06:&emsp;ircam</span></Link>
                    <Link className = "hamburger_misc" to="/about" onClick={()=>setShow(false)}>About</Link>
                    <Link className = "hamburger_misc" to="/misc" onClick={()=>setShow(false)}>Misc</Link>

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