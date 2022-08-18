import React , { useState } from "react";
import { useNavigate } from 'react-router-dom'

const ProjectForm = () => { 
    const navigate = useNavigate()
    const [projectinfo, setProjectinfo] = useState({
        title: "",
        description: "",
        image: "",
        date: "",
        
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjectinfo((prevProjectinfo) => ({
        ...prevProjectinfo,
        [id]: value,
    }));
};

const postProjectData = async () => {
    const response = await fetch(
    `${process.env.REACT_APP_API_URL}/projects`, {
    method: "post",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(projectinfo),
    }
    );
    return response.json();
};

const handleSubmit = (event) => {
    event.preventDefault();
    if (projectinfo.title && projectinfo.description) {
        postProjectData().then((response) => {
        window.localStorage.setItem('token', response.token);
        navigate("/project/${id}");       
        });
    }
};


    return (
    <form>
    <div>
    <label htmlFor="title">Project Title:</label>
    <input 
        type="text"
        id="title"
        placeholder="Enter Project Title"
        onChange={handleChange}
        />
    </div>
    <div>
    <label htmlFor="description">Project Description:</label>
    <input
        type="text"
        id="description"
        placeholder="Enter Project Description"
        onChange={handleChange}
        />
    </div>
    <div>
    <label htmlFor="image">Project Image:</label>
    <input
        type="url"
        id="image"
        placeholder="Image URL"
        onChange={handleChange}
        />
    </div>
    <div>
    <label htmlFor="date">Date Opened</label>
    <input
        type="date"
        id="date"
        placeholder="DD/MM/YYYY"
        onChange={handleChange}
        />
    </div>

    <button type="submit" onClick={handleSubmit}>
    Create Project
    </button>
    </form>
);
}
export default ProjectForm;