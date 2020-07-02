import React from 'react';
import Project from '../../Components/Project/Project';

const Projects = () => {
    window.scrollTo({
        top: 0,
      });
    const path = "/images/portfolio_icons/";
    const projects = [
        {
            name: 'Potty-Angel',
            description: 'React / Django / AWS',
            src: path+'potty_logo.png'
        },
        {
            name: 'FreeChat',
            description: 'React / Node / Twilio',
            src: path+'freechat_logo.png'
        },
        {
            name: 'Jamr',
            description: 'Node / MongoDB / Socket.io',
            src: path+'jamr_logo_white.svg'
        },
        {
            name: 'Pikatsume',
            description: 'Django / Postgres / Bulma',
            src: path+'surprised_pika.png'
        },
        {
            name: 'CoLab',
            description: 'UX Research / Sketch',
            src: path+'group.svg'
        },
        {
            name: 'Aboop',
            description: 'Vanilla Javascript ES6',
            src: path+'aboop_logo.png'
        },
        {
            name: 'ircam',
            description: 'Metadata Modeling',
            src: path+'ircam.svg'
        }


    ];
    const projectComponents = projects.map((project, index) =>
    // Only do this if items have no stable IDs
        <Project 
        key={index} 
        name={project.name} 
        description={project.description}
        src={project.src}
        />
    );
    return (
        <main data-aos="fade-up">
            {projectComponents}
        </main>
    )
}

export default Projects;