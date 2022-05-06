import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Projects from "../pages/Projects";
import NameLogo from "../components/NameLogo";
import About from "../pages/About";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NameLogo />
        <Navbar />
          <Route exact path="/" component={About}/>
          <Route exact path="/personal-projects" component={Projects}/>
      </div>
    </Router>
    
  );
}

export default App;
