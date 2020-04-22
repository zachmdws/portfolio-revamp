import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Card from "./components/Card";
import AboutMe from "./components/AboutMe";
import NameLogo from "./components/NameLogo";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NameLogo />
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About}/>
          <Route exact path="/personal-projects" component={Projects}/>
        </Wrapper>
        {/* <Card />
        <AboutMe /> */}
      </div>
    </Router>
  );
}

export default App;
