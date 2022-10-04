import "./workCard.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imagesrc} alt="project pic"/>
            <h2 className="poject-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCard