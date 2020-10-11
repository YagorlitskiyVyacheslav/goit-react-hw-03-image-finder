import React, { Component } from "react";
import List from './list.component';
import PropTypes from "prop-types";

export default class ListItem extends Component {
  static propTypes = {
    largeImg: PropTypes.func.isRequired,
    image: PropTypes.object.isRequired,
  };

  onClickImg = () => {
    const { largeImg } = this.props;
    const { largeImageURL } = this.props.image;

    largeImg(largeImageURL);
  };
  render() {
    const { webformatURL, tags } = this.props.image;
    return (
      <List.Item onClick={this.onClickImg}>
        <List.Img src={webformatURL} alt={tags} />
      </List.Item>
    );
  }
}