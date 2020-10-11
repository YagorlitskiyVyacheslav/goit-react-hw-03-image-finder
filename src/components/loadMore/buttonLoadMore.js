import React, { Component } from "react";
import Button from './loadMore.component';
import PropTypes from "prop-types";

export default class LoadMore extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };
  render() {
    return (
      <Button type="button" onClick={this.props.onClick}>
        Load More
      </Button>
    );
  }
}