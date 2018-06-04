import React, { Component } from "react";
import "./App.css";

import SearchFieldContainer from "./containers/SearchAutocompleteContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchFieldContainer />
      </div>
    );
  }
}

export default App;
