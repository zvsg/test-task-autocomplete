import React from "react";
import PropTypes from "prop-types";
import "./SearchResults.css";

const SearchResults = ({ options, onClick, onSelect }) => {
  return (
    <ul className="search-results">
      {options.map(item => {
        return (
          <li key={item.trackId} onClick={() => onSelect(item)}>
            {item.artworkUrl30 ? <img src={item.artworkUrl30} alt={item.collectionName} /> : "X"}
            <span>{`${item.artistName} - ${item.trackName}`}</span>
          </li>
        );
      })}
    </ul>
  );
};

SearchResults.defaultProps = {
  options: [
    {
      trackId: null,
      artworkUrl30: "",
      artistName: "",
      trackName: ""
    }
  ],
  onClick: () => {},
  onSelect: () => {}
};

SearchResults.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
  onSelect: PropTypes.func
};

export default SearchResults;
