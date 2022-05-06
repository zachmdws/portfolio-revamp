import React from "react";
import VideoBg from "reactjs-videobg";
import mp4 from "/Users/zachb/HTML/portfolio-revamp/src/assets/images/ocean-video-background.mp4";
//import poster from "/Users/zachb/HTML/LB-World/LBsWorld/public/assets/images/nyan-cat-LB.gif"

function VideoBG(){ 
  return (
<VideoBg poster={poster}>
  <VideoBg.Source src={mp4} type="video/mp4" />
</VideoBg>
  );
    }

export default VideoBG;