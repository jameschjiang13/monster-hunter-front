import React from "react";
import ReactPlayer from "react-player";
import "./ResponsivePlayer.css";

const ResponsivePlayer = (props) => {
  console.log(props)
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={props.video}
        width="100%"
        height="75%"
        controls={true}
      />
    </div>
  );
};

export default ResponsivePlayer;
