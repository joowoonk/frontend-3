import React from "react";
import { useSelector } from "react-redux";
import { songsReducer } from "../../redux/reducers/songs";

const AddedSong = () => {
  const likedSong = useSelector((state) => {
    return state.songsReducer.addingSong;
  });
  console.log(likedSong);

  return <div key={likedSong.id}>{likedSong.song}</div>;
};

export default AddedSong;
