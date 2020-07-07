import React from "react";
// import ReactPlayer from "react-player";
// import "./ResponsivePLayer.css";

const ResponsivePlayer = () => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://youtu.be/fsJx94RSc_Q"
        width="100%"
        height="75%"
        controls={true}
      />
    </div>
  );
};

export default ResponsivePlayer;
