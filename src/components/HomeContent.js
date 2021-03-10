import React from "react";
import "semantic-ui-css/semantic.min.css";
import SidPic from '../images/sidPic.jpg'
//import './stylesheets/HomeContent.css'
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'

function HomeContent() {
  return (
    <div>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}
                style={{ color: 'white' }}>
                Hi ,
            </Header>
              <Header as='h3' style={{ fontSize: '2em' }}
                style={{ color: 'white' }}>
                I am,
            </Header>
              <Header as='h3' style={{ fontSize: '2em' }}
                style={{ color: 'orange' }}>
                Siddharth,
            </Header>
              <Header as='h3' style={{ fontSize: '2em' }}
                style={{ color: 'white' }}>
                A Tech Enthusiast and Physics lover.
            </Header>
              <Button inverted color='orange'>
                Contact Me
               </Button>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src={SidPic} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}

export default HomeContent;
