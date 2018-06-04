import React, { Component } from "react";
import "./SearchField.css";
import PropTypes from "prop-types";

const WAIT_INTERVAL = 300,
  MIN_CHAR = 3;

export class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = { errorEnterMoreChar: false };

    this.handleChange = this.handleChange.bind(this);
  }
  static propTypes = {
    onInputChange: PropTypes.func
  };

  static defaultProps = {
    onInputChange: () => {}
  };

  componentWillMount() {
    this.timer = null;
  }

  handleChange(e) {
    let val = e.target.value;

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({
        errorEnterMoreChar: val.length < MIN_CHAR
      });
      this.props.onInputChange(val);
    }, WAIT_INTERVAL);
  }

  render() {
    return (
      <span className="search-field-container">
        <input
          type="text"
          className="search-field"
          onChange={this.handleChange}
        />
        {this.state.errorEnterMoreChar && (
          <span>&nbsp;Please, enter at least 3 characters</span>
        )}
      </span>
    );
  }
}

export default SearchField;
