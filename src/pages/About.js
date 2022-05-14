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
          <Container style={{ marginTop: 30 }}>
        <a 
        href="https://github.com/zachmdws/Day-Planner"
        target="_blank"
        rel="noopener noreferrer">

        <ProjectCard
          image={Planner}
          description="I constructed a day planner that would allow a busy employee to schedule their day on a normal 9 to 5 business hour basis. Feel free to check out more by clicking one of the boxes!"
        />
        </a>
        <a 
        href="https://github.com/zachmdws/Fitness-Tracker"
        target="_blank"
        rel="noopener noreferrer">

        <ProjectCard 
          image={Fit}
          description="A collaborative effort between myself and 3 other programmers. We created a fitness application that would use answers given by the user to produce a workout."
        />
        </a>
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
            <div>
            <VideoBG />
            <AboutMe />
                
            </div>
        </div>
        )
        }
}

export default About; 

