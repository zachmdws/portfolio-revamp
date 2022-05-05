import React from "react";

function Container(props) { 
    <video autoPlay loop muted id= 'video'>
        <source url = "https://www.youtube.com/watch?v=G52dUQLxPzg" type='video/mp4'/>
    </video>
    return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;}

export default Container;