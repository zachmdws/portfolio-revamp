import React, { Component } from "react";
//import Card from "../components/Card";
import AboutMe from "../components/AboutMe";
import VideoBG from "./VideoBG/VideoBG";



class About extends Component {
    render() {
        return (
            <div>
               <VideoBG />
                
                <AboutMe />
                
            </div>
        )
    }
}
export default About;