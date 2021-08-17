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
  Segment, Container, GridRow
} from 'semantic-ui-react'

function HomeContent() {
  return (
    <Page >
      <Container style={{ padding: '4em 0em' }} vertical>
        <Grid columns='equal' centered stackable >
          <Grid.Row>
            <Grid.Column>
              <Card />
            </Grid.Column>

            <Grid.Column textAlign='justified' >
              <Grid.Row>
                <Header style={{ color: 'orange', fontSize: "8.5em" }}>Hello,</Header>
                <Header style={{ color: 'white', fontSize: "2.5rem" }}>I'm a </Header>
                <Header style={{ color: 'orange', fontSize: "4em" }}>Stack Developer </Header>
                <Header style={{ color: 'white', fontSize: "2.5em" }}>& </Header>
                <Header style={{ color: 'orange', fontSize: "4em" }}>Physics Instructor.</Header>
                <div style={{ padding: '6em 0em' }}>
                  <Grid.Row verticalAlign='bottom'>
                    <Grid.Column >
                      <Button floated='right' inverted color='orange' as={Link}
                        to="contact">
                        Get in Touch
                      </Button>
                    </Grid.Column>
                    <Grid.Column>
                      <Button inverted color='orange' as={Link}
                        to="resume">
                        My Resume
                      </Button>
                    </Grid.Column>

                  </Grid.Row>
                </div>

              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Page>
  );
}

export default HomeContent;
