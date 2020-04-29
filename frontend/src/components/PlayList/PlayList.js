import React, { useState, useEffect } from "react";
import Play from "../Play/Play";

import PlayListStyles from "./PlayListStyles.jsx";

const PlayList = (props) => {
  // console.log("PlayList", props);
  //10, 20, 50 being listed for the songs

  return (
    <>
      <PlayListStyles>
        {/* <div className="info">
          <h2>Song Name</h2>
          <h2>Artist</h2>
        </div> */}
        {props.song
          .filter((item, idx) => idx < 10)
          .map((track) => {
            return (
              <Play key={track.id} track={track} />
            );
          })}
      </PlayListStyles>
    </>
  );
};

export default PlayList;

//       <h2> {props.play.track_name}</h2>
//       <p className="artistName">{props.play.artist_name}</p>
