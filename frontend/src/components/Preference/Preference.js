import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { songAction } from "../../redux/actions/songAction";

// import "./Preference.styles.scss";
import PreferenceStyles from "./PreferenceStyles.jsx";

import PlayList from "../PlayList/PlayList";
import SearchBox from "../SearchBox/SearchBox";
import AddedSong from "../AddedSong/AddedSong";

const Preference = () => {
  const [searchField, setSearchField] = useState("");
  const song = useSelector((state) => state.songsReducer.song);
  const dispatch = useDispatch();

  // console.log({ searchField });

  useEffect(() => {
    dispatch(songAction());
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  // console.log(song);
  const filteredMusic = song.filter((track) => {
    // console.log(track);
    return track.track_name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <PreferenceStyles>
      <SearchBox
        placeholder="Search By Track Name"
        handleChange={handleChange}
        searchField={searchField}
      />
      {/* <AddedSong /> */}
      <PlayList song={filteredMusic} />;
    </PreferenceStyles>
  );
};

export default Preference;
