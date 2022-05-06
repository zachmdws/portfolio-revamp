import React from "react";
import VideoBg from "reactjs-videobg";
import mp4 from "../../assets/images/ocean-video-background.mp4";
import poster from "../../assets/images/portfolioimage.png"

function VideoBG(){ 
  return (
<VideoBg poster={poster}>
  <VideoBg.Source src={mp4} type="video/mp4" />
</VideoBg>
  );
    }

export default VideoBG;