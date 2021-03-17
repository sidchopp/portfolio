import React, { useEffect } from "react";
import { Button, Container, Icon, Divider, Header, Segment, List, Image } from "semantic-ui-react";
import Page from "./Page";


function Contact() {
  return (
    <Page title="Contact">
      <Segment textAlign="center" style={{ padding: '8em 0em' }} vertical >
        <Container text>
          <Header
            as='h1'
            content='Contact Me'
            inverted
            style={{
              fontSize: '6em',
              fontWeight: 'normal',
              marginBottom: 0,
            }}
          />
          <List vertical inverted link size='huge' >
            <List.Item >
              <Header as='h2' inverted>
                <Icon name='envelope open' size='large' /> sidchopp@gmail.com </Header>
            </List.Item>
            <List.Item >
              <Header as='h2' inverted>
                <Icon name='phone' size=' large' /> (587)-436-7497</Header>

            </List.Item>
          </List>
        </Container>
      </Segment>
    </Page>
  );
}

export default Contact;
