import React from "react";
import VideoBg from "reactjs-videobg";
import mp4 from "/Users/zachb/HTML/portfolio-revamp/src/ocean-video-background.mp4";
//import poster from "./img/poster.jpg";

<VideoBg poster={poster}>
  <VideoBg.Source src={ogg} type="video/ogg" />
  <VideoBg.Source src={webm} type="video/webm" />
  <VideoBg.Source src={mp4} type="video/mp4" />
</VideoBg>;

export default VideoBg;