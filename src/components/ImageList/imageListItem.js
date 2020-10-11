import React, { Component } from "react";
import List from './list.component'

export default class ListItem extends Component {
    onClickImg = () => {
        const {largeImg} = this.props
        const { largeImageURL } = this.props.image;

        largeImg(largeImageURL);
    }
    render() {
        const {webformatURL, tags } = this.props.image;
        return (
          <List.Item onClick={this.onClickImg}>
            <List.Img src={webformatURL} alt={tags} />
          </List.Item>
        );
    }
}