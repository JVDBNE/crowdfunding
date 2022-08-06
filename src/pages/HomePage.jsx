import React, { useState , useEffect }from "react";
import ProjectCard from "../components/ProjectCard";

function HomePage() {

    const [projectList, updateProjectData] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then(res => res.json())
        .then(data => updateProjectData(data))
    }, []);

    return (
        <div id="project-list">
            {projectList.map((projectData, key) => {
            return <ProjectCard key={key} projectData={projectData}/>;
            })}
        </div>
    );
}

export default HomePage;