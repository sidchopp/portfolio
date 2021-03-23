import React from "react";

import Page from "./Page";

import {
  Divider,
  Segment,
  Header,
  Button,
  Container,
  Icon
} from "semantic-ui-react";

function Work() {
  return (
    <Page title="Work">
      <Divider
        as='h4'
        className='header'
        horizontal
      // style={{ margin: '3em 0em', textTransform: 'uppercase' }}
      >
        <Header as='h3' color='orange'> Recent Projects</Header>
      </Divider>
      <Segment style={{ padding: '8em 0em' }} vertical >
        <Container text>
          <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
            Fusion
        </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            Fusion was created by a member of Tech and Innovation industry
          in Alberta and four learners of the Full Stack Development program at{" "}
            <a href="https://www.evolveu.ca/"
              target="_blank" rel="noreferrer" >EvolveU </a>, Calgary, Alberta
        </p>
          <Button
            inverted
            color="red"
            size="medium"
            as="a"
            href="https://fusion-alberta.herokuapp.com/"
            target="_blank"
          >
            Check it Out
              </Button>
          <Divider horizontal ><Icon inverted color='black' name='caret down' /></Divider>
          <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
            Sid-Portfolio App
        </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            A MERN Stack application {" "}

          </p>
          <Button
            inverted
            color="red"
            size="medium"
            as="a"
            href="https://fusion-alberta.herokuapp.com/"
            target="_blank"
          >
            Check it Out
              </Button>
          <Divider horizontal ><Icon inverted color='black' name='caret down' /></Divider>
          <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
            Complex-App
        </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            An Application to post, share your views with your friends.
        </p>
          <Button
            inverted
            color="red"
            size="medium"
            as="a"
            href="https://fusion-alberta.herokuapp.com/"
            target="_blank"
          >
            Check it Out
              </Button>
          <Divider horizontal ><Icon inverted color='black' name='caret down' /></Divider>
          <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
            Weather-App
        </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            An Application which determins the weather based on User's location.
        </p>
          <Button
            inverted
            color="red"
            size="medium"
            as="a"
            href="https://fusion-alberta.herokuapp.com/"
            target="_blank"
          >
            Check it Out
              </Button>
        </Container>
      </Segment>
    </Page>
  );
}

export default Work;