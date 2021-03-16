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
        as='h4'
        className='header'
        horizontal
      // style={{ margin: '3em 0em', textTransform: 'uppercase' }}
      >
        <Header as='h3' color='orange'> About myself</Header>
      </Divider>
    </Page>
  );
}

export default About;
