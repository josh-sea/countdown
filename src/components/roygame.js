import Iframe from "react-iframe";
import React from "react";
import "./iframe.css";

const RoyGame = () => {
  return (
    <Iframe
      id="scaled-frame"
      url="https://replit.com/@josh_sea/colorwizard?embed=true"
      width="1200"
      height="1200"
      display="block"
      position="relative"
    />
  );
};

export default RoyGame;
