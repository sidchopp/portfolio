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
      <Segment style={{ padding: '8em 0em' }} vertical >
        <Container textAlign='justified'>
          <Header as='h3' style={{ fontSize: '2em', color: "orange" }}>
            Career Pivot...
          </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            From a Physics Instructor for the last 15 odd years in India to a recent and budding Full Stack Developer in Canada in 2021 has been an amazing transformation. Fortunatley, for me I never hit a plateau in my teaching career, as Physics is in my DNA now, i guess, but it's the <i>curosity to explore</i> that made me to take the plunge,especially when I was doing rerally good in my teaching vocation. Teaching to some of the best minds in the world and enjoying what you do on top of that was a blessing but I always looked for ways to <i>create</i> new things and Stack Development  gives me the joy to create something new and meaningful everyday now. It's AWESOME!!!
          </p>
          <Divider horizontal ><Icon inverted color='black' name='caret down' /></Divider>
          <Header as='h3' style={{ fontSize: '2em', color: "orange" }}>
            Journey from India to Canada...
          </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            I and my wife moved to Calgary, Canada in the mid of 2019 as Permanent Residents.
          </p>
          <Divider horizontal ><Icon inverted color='black' name='caret down' /></Divider>
          <Header as='h3' style={{ fontSize: '2em', color: "orange" }}>
            Back in India...
          </Header>
          <p style={{ fontSize: '1.33em', color: "white" }}>
            In India, I was mostly involved with teaching Physics to the students preparing for competitive examonations like IIT JEE, NEET,etc.
          </p>
        </Container>
      </Segment>
    </Page>
  );
}

export default About;
