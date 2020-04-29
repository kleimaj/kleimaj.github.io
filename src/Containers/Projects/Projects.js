import React from 'react';
import Project from '../../Components/Project/Project';

const Projects = () => {
    const path = "/images/portfolio_icons/";
    const projects = [
        {
            name: 'FreeChat',
            description: 'React / Node / Twilio',
            src: path+'freechat_logo.png'
        },
        {
            name: 'Pikatsume',
            description: 'Django / Postgres / Bulma',
            src: path+'surprised_pika.png'
        },
        {
            name: 'Jamr',
            description: 'Node / MongoDB / Socket.io',
            src: path+'jamr_logo_white.svg'
        },
        {
            name: 'Aboop',
            description: 'Vanilla Javascript',
            src: path+'aboop_logo.png'
        },
        {
            name: 'CoLab',
            description: 'UX Research / Sketch',
            src: path+'group.svg'
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
        <main>
            {projectComponents}
        </main>
    )
}

export default Projects;