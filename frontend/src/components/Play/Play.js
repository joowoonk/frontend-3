import React from "react";
// import "./Play.styles.scss";
import PlayStyles from "./PlayStyles.jsx";
const Play = (props) => {
  return (
    <PlayStyles>
      <h2>{props.track.track_name}</h2>
      <h2>Artist - {props.track.artist_name}</h2>
      <button>Your Song?</button>
    </PlayStyles>
  );
};

export default Play;
