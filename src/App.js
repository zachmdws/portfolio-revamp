import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import AboutMe from "./components/AboutMe";
import NameLogo from "./components/NameLogo";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NameLogo />
        <Navbar />
        <Card />
        <AboutMe />
      </div>
    </Router>
  );
}

export default App;
