import React from "react";
// import "./SearchBox.styles.scss";
import SearchBoxStyles from "./SearchBoxStyles.jsx";

const SearchBox = ({ placeholder, searchField, handleChange }) => (
  <SearchBoxStyles>
    <input
      type="search"
      placeholder={placeholder}
      // value={searchField}
      onChange={handleChange}
    />
  </SearchBoxStyles>
);

export default SearchBox;
