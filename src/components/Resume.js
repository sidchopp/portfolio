import React from "react";
import Page from "./Page";
import SidPic from '../images/sidPic.jpg'
import { Header, Container, Divider, Segment, Grid, Button, Image, List } from 'semantic-ui-react';

function Resume() {
  return (
    <Page title="Resume">
      <div style={{ color: 'white' }}>
        <Header textAlign='center' style={{ color: 'orange' }} as='h1'>Siddharth Chopra</Header>
        <Container textAlign='justified'>
          <Header textAlign='center' style={{ color: 'white' }} as='h3'>sidchopp@gmail.com  | https://github.com/sidchopp | https://www.linkedin.com/in/sidchopp/</Header>
          <Header textAlign='center' style={{ color: 'white' }} as='h4'>Calgary- AB, Canada</Header>
          <Header textAlign='center' style={{ color: 'white' }}>(587) 436-7497</Header>
          <Divider />
          <p>
            AWS Certified Cloud Practitioner, graduated from a Full Stack Development program with a curiosity for exploration and a desire to develop scalable Web Applications, while fully understanding their business goals & deliver judicious business solutions. Also, a passionate and inspirational Physics Teacher with a strong foundation in Physics & Mathematics and over a decade of experience in providing quality education to the high school/undergrad students, mentoring and guiding them to achieve their true potential while integrating relevant technologies to make learning joyful.
          </p>
          <Divider />
          <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as='h3' style={{ fontSize: '2em', color: 'white' }}>
                    Qualifications & Skills
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    <List bulleted>
                      <List.Item>	A Master’s Degree (with Honors) in Physics</List.Item>
                      <List.Item>Physics
                        Successfully completed a Full Stack Developer Course (Projects based, full time 6 months experience)
                      </List.Item>
                      <List.Item>Fundamental knowledge and hands-on experience of web application technologies and frameworks such as React, Node, JavaScript, HTML/CSS, RESTful APIs, version control (Git), VS Code, Command-line interface, Python (Basic) etc.  </List.Item>
                      <List.Item>Writing clean, functional code on the front-end, back-end</List.Item>
                      <List.Item>Designing client-side and server-side architecture.</List.Item>
                      <List.Item>Responsive to fast-paced environment, strong aptitude for solving problems quickly, efficiently using first-principles based thinking. </List.Item>
                      <List.Item>Excellent communication skills (technical/non-technical) and ability to effectively articulate complex ideas/concepts.</List.Item>
                      <List.Item>	Ability to work effectively and efficiently, both independently and collectively with team members</List.Item>
                      <List.Item>Fast learner with great attention to detail and strong desire to fundamentally understand things at a much deeper level for sound learning.</List.Item>
                      <List.Item>Desire to learn, listen to feedback, with a growth mindset.</List.Item>
                    </List>
                  </p>
                  <Divider />
                  <Header as='h3' style={{ fontSize: '2em', color: 'white' }}>
                    Professional Experience
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                    bioengineered.
                  </p>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                  <Image bordered rounded size='large' size='large' src={SidPic} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                {/* <Grid.Column textAlign='center'>
                  <Button size='huge'>Check Them Out</Button>
                </Grid.Column> */}
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      </div>
    </Page>

  )
}

export default Resume;