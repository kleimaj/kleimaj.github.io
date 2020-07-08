import React from 'react';
import { Link } from 'react-router-dom';
import './Project.scss';

const Project = (props) => {
    return (
        <Link to={"/"+props.name.toLowerCase()}className={'project'+' '+props.name.toLowerCase()}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <img src={props.src} alt={props.name+' logo'}/>
        </Link>
    )
}

export default Project;