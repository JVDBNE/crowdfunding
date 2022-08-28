
import React , { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../components/spinner";

function ProjectPage() {
    const [loading, setLoading] = useState(false)
    const [projectData, setProjectData] = useState({pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setProjectData(data);
        setLoading(false)
        });
    }, []);


    return (
        <div className="project-wrapper">
            {loading ? <LoadingSpinner /> : <div>
            <div className="project=title"> 
                <h2>{projectData.title}</h2>
                <button type="submit" className="pledge-button">Pledge Here! </button>
                <h4>Created: {new Date(projectData.date_created).toDateString()}</h4>
            </div>
            <div className="project-details">
                <img className="project-img" src={projectData.image} alt="project image"/>
                <h2>About Our Project:</h2>
                <text id="description">{projectData.description}</text>
            </div> 
        <h4>{`Status: ${projectData.is_open ? "Currently Seeking Donations" : "This Project is now Closed" }`}</h4>
        <h4>Our Goal: ${projectData.goal}</h4><h4> Funds Raised So Far: Coming Soon.... </h4>
        
        
        <h2>Pledges:</h2>
        <div >
        {projectData.pledges.map((pledgeData, key) => {
            return (
            <div  className="pledge-box" key = {key}>
            ${pledgeData.amount} from {pledgeData.supporter}<br />
            {pledgeData.comment}
            </div>   
            );
        })}
        </div>
        </div>
    }
        </div>);
}

export default ProjectPage;

