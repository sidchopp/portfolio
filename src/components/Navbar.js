import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted secondary stackable>
            <Menu.Item
            name="Siddharth"
            active={activeItem === "Siddharth"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            position="right"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}
