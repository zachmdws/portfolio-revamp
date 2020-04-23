import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import Cadenza from "../assets/images/cadenzaimage.png";

class Projects extends Component {
  render() {
    return (
      <div>
        <ProjectCard
          image="https://zachmdws.github.io/Portfolio/Assets/Images/workimage.png"
          description="I constructed a day planner that would allow a busy employee to schedule their day on a normal 9 to 5 business hour basis. Feel free to check out more here!"
        />
        <ProjectCard 
          image="https://zachmdws.github.io/Portfolio/Assets/Images/fitimage.png"
          description="A collaborative effort between myself and 3 other programmers. We created a fitness application that would use answers given by the user to produce a workout."
        />
        <ProjectCard
          image={Cadenza}
          description="A final project assignment when I completed my course at the UNCC Coding Bootcamp. A forum website designed and created by myself and 3 other programmers."
        />
      </div>
    );
  }
}
export default Projects;
