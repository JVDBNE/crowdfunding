import { render } from "@testing-library/react";
import React, { useState , useEffect }from "react";
import ProjectCard from "../components/ProjectCard";
import LoadingSpinner from "../components/spinner";

function HomePage() {
    const [loading, setLoading] = useState(false)
    const [projectList, updateProjectData] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then(res => res.json())
        .then(data => {
            updateProjectData(data)
            setLoading(false)
        })
    }, []);

    return (
        <div id="project-list">
            {
                loading
                    ? <LoadingSpinner /> 
                    : projectList.map((projectData, key) => {
                        return <ProjectCard key={key} projectData={projectData}/>;
                    })
            }
        </div>
    );
}

export default HomePage;