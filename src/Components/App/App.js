import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
            <a href="#"><img id="header_logo" src="Logo.svg" alt="logo"/></a>
            <aside>
                <div id="works">
                <a id="projects" href="index.html">Projects</a>
                <a className = "project_link" href="colab.html"><span>01:</span>&emsp;Co.Lab</a>
                <a className = "project_link" href="jamr.html"><span>02:</span>&emsp;Jamr</a>
                <a className = "project_link" href="ircam.html"><span>03:</span>&emsp;ircam</a>
                </div>
                <div id="misc">
                <a href="profile.html">About</a>
                <a href="music.html">Misc</a>
                </div>


            </aside>
            <h2 id="bio"><strong>Jacob Kleiman</strong>
                is an SEI 
                student @ 
                <a href="https://generalassemb.ly">General Assembly</a> in 
                San Francisco, CA</h2>
            <img id="jacob" src="images/headshots/me and my mom.png" alt="Meeeee"/>
        </header>
        <main>
            <a className = "card" id = "profile" href="profile.html">
                <img id = "logo" src="Logo.svg" alt="logo"/>
                <img id = "palmtree" src="images/portfolio_icons/palm_tree.svg" alt="Palm Tree"/>
            </a>
            <div id="desktop_cards">
            <a className = "card" id = "CoLab" href="colab.html">
                <div className="card_label">
                <h3>Co.Lab</h3>
                <p>UX Project</p>
                <img className ="icon" src="images/portfolio_icons/group.svg" alt="Co.Lab Icon"/>
                </div>
            </a>
            <a className = "card" id = "Jamr" href="jamr.html">
                <div className="card_label">
                <h3>Jamr</h3>
                <p>Mobile Project</p>
                <img className ="icon" src="images/portfolio_icons/jamr_logo_white.svg" alt="Jamr Icon"/>
                </div>
            </a> 
            <a className = "card" id = "ircam" href="ircam.html">
                <div className="card_label">
                <h3>ircam</h3>
                <p>Music Classifier</p>
                <img className ="icon" src="images/portfolio_icons/ircam.svg" alt="Ircam Icon"/>
                </div>
            </a>
            </div>
        </main>
    </div>
  );
}

export default App;
