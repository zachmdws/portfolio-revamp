import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// import { pulse } from "animations";
import "./style.css";

const Title = styled.h1`
    color: crimson;
`;

const pulse = keyframes`
    from {
        font-size: 19px;
    }

    to {
        font-size: 20px;
    }
`;

const Pulse = styled.a`
    className: "name";
    display: block;
    href: "/";
    animation: ${pulse} 2s infinite;
    animation-direction: alternate;
    background-color: white;
    display: block;
    width: 10%;
    position: relative;
    left: 85%;
    bottom: 75%;
    height: 100%;
    text-align: center;
    padding: 12px;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

function Navbar() { 
    return (
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Link className="navbar-brand" to="/">
         Home    
         </Link>
        <Pulse className="name"><a>Zachary Meadows</a></Pulse>
     </nav>
    )
}

export default Navbar;