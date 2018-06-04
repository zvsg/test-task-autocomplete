import React, { Component } from "react";
import PropTypes from "prop-types";

const style = {
  width: "100px",
  height: "100px"
};

export class FullOptionDescription extends Component {
  static propTypes = {
    option: PropTypes.object
  };

  static defaultProps = {
    option: {
      artistName: "",
      trackName: "",
      artworkUrl100: "",
      collectionName: "",
      collectionPrice: null,
      currency: ""
    }
  };

  render() {
    let {
      artistName,
      trackName,
      artworkUrl100,
      collectionName,
      collectionPrice,
      currency
    } = this.props.option;
    return (
      <div className="full-description">
        <p />
        <img src={artworkUrl100} style={style} alt={collectionName} />
        <p className="title">{`${artistName} - ${trackName}`}</p>
        <p>Collection name: {collectionName}</p>
        <p>
          Price: {collectionPrice ? `${collectionPrice} ${currency}` : "Free"}
        </p>
      </div>
    );
  }
}

export default FullOptionDescription;
