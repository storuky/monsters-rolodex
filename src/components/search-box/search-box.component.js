import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, setSearchField }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={e => setSearchField(e.target.value)}
    />
  );
};
