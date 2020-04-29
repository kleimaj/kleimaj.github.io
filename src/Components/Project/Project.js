import React from 'react';
import './Project.css';

const Project = (props) => {
    return (
        <div className={'project'+' '+props.name.toLowerCase()}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Project;