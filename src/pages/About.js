import React, { Component } from "react";
//import Card from "../components/Card";
import AboutMe from "../components/AboutMe";
import VideoBG from "./VideoBG/VideoBG";
import ProjectCard from "../components/ProjectCard";
import Planner from "../assets/images/workimage.png";
import Fit from "../assets/images/fitimage.png";
import Cadenza from "../assets/images/cadenzaimage.png";
import Container from "../components/Container";




class About extends Component {
    render() {
        return (
            <div>
            <VideoBG />
            <AboutMe />
                


            <div>
          <Container style={{ marginTop: 30 }}> 
          
        <a 
        href="https://github.com/MHargett23/Music-Forum"
        target="_blank"
        rel="noopener noreferrer">

        <ProjectCard
          image={Cadenza}
          description="A final project assignment when I completed my course at the UNCC Coding Bootcamp. A forum website designed and created by myself and 3 other programmers."
        />
        </a>
        </Container>
            
        </div>
        </div>
        )
        }
}

export default About; 

