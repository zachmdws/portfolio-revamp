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
          <Container style={{ marginTop: 70 }}> 
          <h1  >The Cadenza</h1>
        <a 
        href="https://music-notation-forum-boards.herokuapp.com/"
        target="_blank"
        rel="noopener noreferrer">
        <ProjectCard
          image={Cadenza}
        />
        </a>
        </Container>
            
        </div>
        </div>
        )
        }
}

export default About; 

