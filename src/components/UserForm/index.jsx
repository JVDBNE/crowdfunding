import React , { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./styles.css";



const NewUserForm = () => { 
    const navigate = useNavigate()
    const [newcredentials, setNewCredentials] = useState({
        username: "",
        email:"",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setNewCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
    }));
};

    const postData = async () => {
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}users/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newcredentials),
        }
        );
        return response.json();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newcredentials.email && newcredentials.password) {
            postData().then((response) => {
            navigate("/");       
            });
        }
    };


    return (
        <form className="form-box">
        <div>
        <h2>Sign up to Create or Pledge</h2>
        </div>
        <div>
        <p>Bring a creative project to life or start your own in just a few steps</p>
        </div>
        <div>
        <input 
            type="text"
            id="username"
            className="username"
            placeholder="Enter username"
            onChange={handleChange}
            />
        </div>
        <div>
        <input
            type="email"
            id="email"
            className="email"
            placeholder="Email"
            onChange={handleChange}
            />
        </div>
        <div>
        <input
            type="password"
            id="password"
            className="password"
            placeholder="Password"
            onChange={handleChange}
            />
        </div>
        <button type="submit" className="btn" onClick={handleSubmit}>
        Create an Account
        </button>
        </form>
    );
}
export default NewUserForm;