import React, { Component } from "react";
import Form from './form.component'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class FindForm extends Component {
    state = {
        imageName: ''
    }
    inputNameHandler = (e) => {
        this.setState({imageName: e.target.value})
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.imageName);
        this.setState({imageName: ''})
    }
    render() {
        const {imageName} = this.state;
        return (
          <Form.Box>
            <Form onSubmit={this.onSubmitHandler}>
              <Form.Button type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </Form.Button>
              <Form.Input
                value={imageName}
                type="text"
                autocomplete="off"
                placeholder="Search images and photos"
                onChange={this.inputNameHandler}
              />
            </Form>
          </Form.Box>
        );
    }
}