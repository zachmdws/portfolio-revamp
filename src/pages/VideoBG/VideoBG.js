import React from "react";
import VideoBg from "reactjs-videobg";
import mp4 from "../../assets/images/ocean-video-background.mp4";
import poster from "C:\Users\zachb\HTML\portfolio-revamp\src\logo.svg"

function VideoBG(){ 
  return (
<VideoBg poster={poster}>
  <VideoBg.Source src={mp4} type="video/mp4" />
</VideoBg>
  );
    }

export default VideoBG;