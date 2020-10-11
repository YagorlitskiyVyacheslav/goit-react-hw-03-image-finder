import React, { Component } from "react";
import ListItem from "./imageListItem";
import List from './list.component';
import PropTypes from "prop-types";

export default class ImageList extends Component {
  static propTypes = {
    largeImg: PropTypes.func.isRequired,
    images: PropTypes.array.isRequired
  };
  onClickImage = () => {
    this.props.largeImg();
  };
  render() {
    const { images, largeImg } = this.props;
    return (
      <List>
        {images.map((image) => {
          return <ListItem image={image} largeImg={largeImg} key={image.id} />;
        })}
      </List>
    );
  }
}