import React, { Component } from "react";
import { Menu, Segment, Icon, IconGroup } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import "semantic-ui-css/semantic.min.css";

export default class MenuExampleInvertedSegment extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <Segment inverted>
        <Menu pointing inverted icon='labeled' secondary stackable >
          <Menu.Item
            as={Link}
            to=""
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          > <div style={{ display: 'inline' }}>
              < Icon size='big' inverted name=' stripe s' color="orange " />
              < Icon size='big' loading inverted name=' info' color="orange " />
              < Icon size='big' inverted name=' dochub' color="orange " />
            </div>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="about"
            position="right"
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
          ><Icon name='user' />About</Menu.Item>
          <Menu.Item
            as={Link}
            to="work"
            name="work"
            active={activeItem === "work"}
            onClick={this.handleItemClick}
          > <Icon name='suitcase' />Work </Menu.Item>
          <Menu.Item
            as={Link}
            to="contact"
            name="contact"
            active={activeItem === "contact"}
            onClick={this.handleItemClick}
          > <Icon name='mail' />Contact</Menu.Item>
        </Menu>
      </Segment>
    );
  }
}
