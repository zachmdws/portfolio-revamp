import React, { Component } from "react";
import Card from "../components/Card";
import AboutMe from "../components/AboutMe";
import VideoBg from "../components/VideoBG";



class About extends Component {
    render() {
        return (
            <div>
                <VideoBg />
                <Card />
                <AboutMe />
                
            </div>
        )
    }
}
export default About;