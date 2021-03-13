import React, { useEffect } from "react";
import Fusion from "../images/fusion.PNG";
import Page from "./Page";
import "../stylesheets/About.css";
import {
  Divider,
  Segment,
  Grid,
  Image,
  Header,
  Button,
  Container,
  Form, Message
} from "semantic-ui-react";

function About() {
  return (
    <Page title="About">
      <Divider
        as="h1"
        className="header"
        horizontal
        style={{
          marginBottom: "1.5em",
          textTransform: "uppercase",
          color: "orange",
        }}
      >
        About Me
      </Divider>

      

      <Segment placeholder >
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        
      </Grid.Column>
      

      <Grid.Column verticalAlign='middle'>
        
      </Grid.Column>
    </Grid>

    {/* <Divider vertical>Or</Divider> */}
  </Segment>
  <Container fluid inverted style={{color:"white"}}>
      <Header as='h2'>Dogs Roles with Humans</Header>
      <p>
        Domestic dogs inherited complex behaviors, such as bite inhibition, from
        their wolf ancestors, which would have been pack hunters with complex
        body language. These sophisticated forms of social cognition and
        communication may account for their trainability, playfulness, and
        ability to fit into human households and social situations, and these
        attributes have given dogs a relationship with humans that has enabled
        them to become one of the most successful species on the planet today.
      </p>
      <p>
        The dogs' value to early human hunter-gatherers led to them quickly
        becoming ubiquitous across world cultures. Dogs perform many roles for
        people, such as hunting, herding, pulling loads, protection, assisting
        police and military, companionship, and, more recently, aiding
        handicapped individuals. This impact on human society has given them the
        nickname "man's best friend" in the Western world. In some cultures,
        however, dogs are also a source of meat.
      </p>
    </Container>
    </Page>
  );
}

export default About;
