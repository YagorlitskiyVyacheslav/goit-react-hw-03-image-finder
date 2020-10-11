import React, { Component } from "react";
import ListItem from "./imageListItem";
import List from './list.component';

export default class ImageList extends Component {
    onClickImage = () => {
        this.props.largeImg()
    }
    render() {
        const { images, largeImg } = this.props;
        return (
                <List>
                    {images.map((image) => {
                        return <ListItem image={image} largeImg={largeImg} key={image.id}/>
                    })}
                </List>
        )
    }
}