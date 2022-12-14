import React from "react";
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/users/">New User</Link>
            <Link to="/projects">New Project</Link>
            <div className="main-heading">
            <h1>STAGELY</h1>
            </div>

        </nav>
        
    );
}

export default Nav;

