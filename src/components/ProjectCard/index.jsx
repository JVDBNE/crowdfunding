import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="project-card">
        <Link to={`/project/${projectData.id}`}>
        <img src={projectData.image} alt="Birds Placeholder"/>
        <h3>{projectData.title}</h3>
        </Link>
        </div>
    );
}

export default ProjectCard;
