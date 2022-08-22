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
    `${process.env.REACT_APP_API_URL}projects`, {
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
        navigate(`/`);       
        });
    }
};


    return (
    <form className="form-box">
    <div>
    <h2>Welcome to STAGELY</h2>
    </div>
    <div>
    <p>A STAGELY project page is fairly simple but allows for a tremendous amount of variation and creativity. 
    you’ll bring every aspect of your campaign into focus—for yourself and, eventually, your backers.</p>
    </div>
    <div>
    <input 
        type="text"
        id="title"
        className="title-field"
        placeholder="Enter Project Title"
        onChange={handleChange}
        />
    </div>
    <div>
    <input 
        type="text"
        id="description"
        className="description-field"
        placeholder="Tell us about your Project"
        onChange={handleChange}
        />
    </div>
    <div>
    <input 
        type="url"
        id="image"
        className="url-field"
        placeholder="Image URL"
        onChange={handleChange}
        />
    </div>
    <div>
    <input 
        type="date"
        id="date"
        className="date-field"
        placeholder="DD/MM/YYYY"
        onChange={handleChange}
        />
    </div>
    <div>
    <input 
        type="money"
        id="date"
        className="goal-field"
        placeholder="$$$ Goal"
        onChange={handleChange}
        />
    </div>

    <button type="submit" className="btn"onClick={handleSubmit}>
    Create Project
    </button>
    </form>
);
}
export default ProjectForm;