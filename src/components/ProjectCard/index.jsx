import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="project-card">
        <Link className="pages" to={`/project/${projectData.id}`}>
        <img src={projectData.image} alt="Image Placeholders"/>
        <h3>{projectData.title}</h3>
        <h3>Our Goal: ${projectData.goal}</h3>
        </Link>
        </div>
    );
}

export default ProjectCard;
