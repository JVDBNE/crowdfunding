import React from "react";
import { BrowserRouter as Router, Routes, Route } from"react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import "./App.css";
import NewUser from "./pages/NewUser";


function App() {
  return (
    <Router>
    <div>
    <Nav />
    <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path ="/project/:id" element= {<ProjectPage/>}/>
        <Route path="/login" element= {<LoginPage />}/>
        <Route path="/users/" element= {<NewUser />}/>
        <Route path="/projects" element= {<CreateProjectPage />}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
