import React from "react";
import { Link } from 'react-router-dom'
import Page from "./Page"
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
          <Grid.Row>
            <Grid.Column width={8}>
              {/* <Header
                style={{ color: 'white', fontSize: "2em" }}>
                Hi, I am </Header> */}
              <Header style={{ color: 'orange', fontSize: "4.5em" }}>Siddharth Chopra </Header>
              <Header style={{ color: 'white', fontSize: '2em' }}>
                A curious <i>Full Stack Developer</i> & a passionate <i>Physics Instructor</i>.
              </Header>
              <Header
                style={{ color: 'white', fontSize: '1.5em' }}>
                I live in Calgary, Canada.
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
            {/* <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src={SidPic} />
            </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </Segment>
    </Page>
  );
}

export default HomeContent;
