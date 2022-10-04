import "./workCard.css";
import React from 'react';
import WorkCard from "./WorkCard";
import data from "./WorkCardData";

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {data.map(({imagesrc, title, text, view}, index) => (
                    <WorkCard key={index} imagesrc={imagesrc} title={title} text={text} view={view} />
                ))}
            </div>
        </div>
    )
}

export default Work