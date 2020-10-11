import React, { Component } from "react";
import Button from './loadMore.component';

export default class LoadMore extends Component {

    onClickHandler = () => {
      this.props.onClick()
      window.scrollTo({
        top: document.documentElement.scrollHeight - 100,
        behavior: "smooth",
      });
    }
    render() {
      return (
        <Button type="button" onClick={this.onClickHandler}>
          Load More
        </Button>
      );
    }
    
}