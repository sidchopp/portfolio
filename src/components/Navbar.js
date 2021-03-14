import React, { Component } from "react";
import { Menu, Segment, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import "semantic-ui-css/semantic.min.css";
export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu icon='labeled' inverted secondary stackable>
          <Menu.Item
            as={Link}
            to=""
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          ><Icon name='home' />Home</Menu.Item>

          <Menu.Item
            as={Link}
            to="about"
            position="right"
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          ><Icon name='user' />About Me</Menu.Item>
          <Menu.Item
            as={Link}
            to="work"
            name="work"
            active={activeItem === "work"}
            onClick={this.handleItemClick}
          > <Icon name='suitcase' />Work</Menu.Item>

        </Menu>

      </Segment>
    );
  }
}
