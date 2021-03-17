import React, { Component } from "react";
import { Menu, Segment, Icon, Popup, Header } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import "semantic-ui-css/semantic.min.css";

export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu pointing inverted icon='labeled' secondary stackable>
          <Menu.Item
            as={Link}
            to=""
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <Popup
              inverted
              position='bottom centre'
              trigger={< Icon circular inverted name=' stripe s' color="orange " />}
              content='Home'
            />
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="about"
            position="right"
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          ><Popup
              inverted
              position='bottom centre'
              trigger={<Icon name='user' />}
              content='About'
            /></Menu.Item>
          <Menu.Item
            as={Link}
            to="work"
            name="work"
            active={activeItem === "work"}
            onClick={this.handleItemClick}
          > <Popup
              inverted
              position='bottom centre'
              trigger={<Icon name='suitcase' />}
              content='Work'
            /></Menu.Item>
          <Menu.Item
            as={Link}
            to="contact"
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          > <Popup
              inverted
              position='bottom centre'
              trigger={<Icon name='mail' />}
              content='Contact'
            /></Menu.Item>

        </Menu>

      </Segment>
    );
  }
}
