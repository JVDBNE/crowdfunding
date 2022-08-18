import React , { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function ProjectPage() {
    const [projectData, setProjectData] = useState({pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setProjectData(data);
        });
    }, []);

    return (
        <div className="project-wrapper">
            <div className="project=title">
                <h1>{projectData.title}</h1>
                <h2>Created: {new Date(projectData.date_created).toDateString()}</h2>
            </div>
            <div className="project-details">
                <img className="project-img" src={projectData.image} alt="project image"/>
                <h2>About Our Project:</h2>
                <text id="description">{projectData.description}</text>
            </div> 
        <h2>{`Status: ${projectData.is_open}`}</h2>
        
        <h2>Pledges:</h2>
        <ul>
        {projectData.pledges.map((pledgeData, key) => {
            return (
            <li key = {key}>
            {pledgeData.amount} from {pledgeData.supporter}
            {pledgeData.comment}

            </li>
            );
        })}
        </ul>
        </div>
    );
}

export default ProjectPage;


