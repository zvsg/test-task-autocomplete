import React, { Component } from "react";
import PropTypes from "prop-types";
import SearchField from "../SearchField";
import SearchResults from "../SearchResults";
import FullOptionDescription from "../FullOptionDescription";

export class SearchAutocomplete extends Component {
  static propTypes = {
    autocompleteOptions: PropTypes.array,
    onInputChange: PropTypes.func,
    onSelectOption: PropTypes.func
  };

  static defaultProps = {
    autocompleteOptions: null,
    selectedOption: null,
    onInputChange: () => {},
    onSelectOption: () => {},
    isLoading: false
  };

  render() {
    const { props } = this;
    return (
      <div className="search-autocomlete-wrap">
        <SearchField onInputChange={props.onInputChange} />
        &nbsp;{props.isLoading && <span>Loading...</span>}
        {props.autocompleteOptions && (
          <SearchResults
            options={props.autocompleteOptions}
            onSelect={props.onSelectOption}
          />
        )}
        {props.selectedOption ? (
          <FullOptionDescription option={props.selectedOption} />
        ) : (
          <p>Search and select any track</p>
        )}
      </div>
    );
  }
}

export default SearchAutocomplete;
