import React from "react";
import Page from "./Page";

import {
  Divider,
  Segment,
  Header,
  Container,
  Icon
} from "semantic-ui-react";

function About() {
  return (
    <Page title="Work">
      <Divider
        as='h4'
        className='header'
        horizontal
      // style={{ margin: '3em 0em', textTransform: 'uppercase' }}
      >
        <Header as='h3' color='orange'>My Life so far...</Header>
      </Divider>
      <Segment style={{ padding: '8em 0em' }}vertical >
        <Container text>
          <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
            Early eighties, A little later after the first Sony's walkman was sold...
        </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            My Father was enjoying snow in a small hill station close to our home when the doctors were cutting the umbilical chord, so that explains where i got my sense of adventurism from
           
        </p>
          <Divider horizontal ><Icon inverted color='black' name='caret down' /></Divider>
        </Container>



        <Container text>
          <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
            Mid eighties, A curious n
        </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            My Father was enjoying snow in a small hill station close to our home when the doctors were cutting the umbilical chord, so that explains where i got my sense of adventurism from
           
        </p>
          <Divider horizontal ><Icon inverted color='black' name='caret down' /></Divider>
        </Container>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
            Early nineties, A curious n
        </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            My Father was enjoying snow in a small hill station close to our home when the doctors were cutting the umbilical chord, so that explains where i got my sense of adventurism from
               
        </p>
          <Divider horizontal ><Icon inverted color='black' name='caret down' /></Divider>
        </Container>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
            Mid nineties, A curious n
        </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            My Father was enjoying snow in a small hill station close to our home when the doctors were cutting the umbilical chord, so that explains where i got my sense of adventurism from
           
        </p>
          <Divider horizontal ><Icon inverted color='black' name='caret down' /></Divider>
        </Container>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
            Mid eighties, A curious n
        </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            My Father was enjoying snow in a small hill station close to our home when the doctors were cutting the umbilical chord, so that explains where i got my sense of adventurism from
           
        </p>
          <Divider horizontal ><Icon inverted color='black' name='caret down' /></Divider>
        </Container>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
            End of Century, A curious n
        </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            My Father was enjoying snow in a small hill station close to our home when the doctors were cutting the umbilical chord, so that explains where i got my sense of adventurism from
           
        </p>
          <Divider horizontal ><Icon inverted color='black' name='caret down' /></Divider>
        </Container>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
            Mid eighties, A curious n
        </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            My Father was enjoying snow in a small hill station close to our home when the doctors were cutting the umbilical chord, so that explains where i got my sense of adventurism from
           
        </p>
          <Divider horizontal ><Icon inverted color='black' name='caret down' /></Divider>
        </Container>
        <Container text>
          <Header as='h3' style={{ fontSize: '2em', color: "white" }}>
            Begining of a new century
        </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            My Father was enjoying snow in a small hill station close to our home when the doctors were cutting the umbilical chord, so that explains where i got my sense of adventurism from
           
        </p>
          <Divider horizontal ><Icon inverted color='black' name='caret down' /></Divider>
        </Container>
      </Segment>
    </Page>
  );
}

export default About;
