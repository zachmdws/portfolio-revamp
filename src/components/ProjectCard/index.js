import React from "react";
import "./styles.css";

function ProjectCard(props) {

  
  return (
    <div className="projectCard animated fadeIn ">
      <img class ="cardImage" src= {props.image} alt="Project" />
      <p className="projectCardBody">{props.description}</p>
    </div>
  );
}


export default ProjectCard;
