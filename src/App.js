import React from "react";
import { BrowserRouter as Router, Routes, Route } from"react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import "./App.css";


function App() {
  return (
    <Router>
    <div>
    <Nav />
    <Routes>
        <Route path="/" element= {<HomePage/>}/>
        <Route path ="/project/:id" element= {<ProjectPage/>}/>
        <Route path="/login" element= {<LoginPage />}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
