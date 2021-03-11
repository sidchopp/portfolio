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
} from "semantic-ui-react";

function Work() {
  return (
    <Page title="Work">
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em", color: "white" }}>
                Recent Project-FUSION
              </Header>
              <p style={{ fontSize: "1.33em", color: "white" }}>
                Fusion was created by a member of Tech and Innovation industry
                in Alberta and four learners of the Full Stack Development
                program at{" "}
                <a
                  href="https://www.evolveu.ca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EvolveU
                </a>
                , Calgary, Alberta
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image bordered rounded size="large" src={Fusion} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="left">
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Page>
  );
}

export default Work;