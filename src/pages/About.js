import React, { Component } from "react";
import Card from "../components/Card";
import AboutMe from "../components/AboutMe";
import VideoBG from "../components/VideoBG/VideoBG;"



class About extends Component {
    render() {
        return (
            <div>
                <VideoBG />
                <Card />
                <AboutMe />
                
            </div>
        )
    }
}
export default About;