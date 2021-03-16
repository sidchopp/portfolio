import React, { useEffect } from "react";
import { Button, Checkbox, Form, Divider, Header } from "semantic-ui-react";
import Page from "./Page";
function Contact() {
  return (
    <Page title="Contact">
      <Divider
        as='h4'
        className='header'
        horizontal
      // style={{ margin: '3em 0em', textTransform: 'uppercase' }}
      >
        <Header as='h3' color='orange'> Recent Projects</Header>
      </Divider>
      <Form>
        <Form.Field>
          <label style={{ color: "white" }}>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label style={{ color: "white" }}>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.TextArea
          label="About"
          style={{ color: "white" }}
          placeholder="Tell us more about you..."
        />
        <Form.Field>
          <Checkbox label="I agree to the Terms and Conditions" />
        </Form.Field>
        <Button type="submit">Send Message</Button>
      </Form>
    </Page>
  );
}

export default Contact;
