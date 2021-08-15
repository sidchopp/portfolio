import React from "react";
import { Link } from 'react-router-dom'
import Page from "./Page"
import Card from "./Card"
import "semantic-ui-css/semantic.min.css";

//import SidPic from '../images/sidPic.jpg'
//import '../stylesheets/HomeContent.css'
import {
  Button,
  Grid,
  Header,
  Segment
} from 'semantic-ui-react'

function HomeContent() {
  return (
    <Page >
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid centered stackable >
          <Grid.Row columns={4}>
            <Grid.Column >
              <Card />
            </Grid.Column>
            <Grid.Column textAlign='justified' >
              {/* <Header
                style={{ color: 'white', fontSize: "2em" }}>
                Hi, I am </Header> */}
              <Header style={{ color: 'orange', fontSize: "4.5em" }}>Hello</Header>
              <Header style={{ color: 'white', fontSize: '2.5em' }}>
                My name is <span style={{ color: 'orange' }}>Siddharth Chopra.</span> I'm a curious Full Stack Developer and a very passionate Physics Instructor.
              </Header>

              <Button floated='right' inverted color='orange' as={Link}
                to="contact">
                Get in Touch
              </Button>
              <Button inverted color='orange' as={Link}
                to="resume">
                My Resume
              </Button>
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Segment>
    </Page>
  );
}

export default HomeContent;
