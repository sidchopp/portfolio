import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import "semantic-ui-css/semantic.min.css";
export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted secondary stackable>
          {/* <Menu.Item
            name="Siddharth"
            active={activeItem === "Siddharth"}
            onClick={this.handleItemClick}
          /> */}
          <Menu.Item
            as={Link}
            to=""
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="about"
            position="right"
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="work"
            name="work"
            active={activeItem === "work"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}
