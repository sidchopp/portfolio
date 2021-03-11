import React, { useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import Page from "./Page";
function Contact() {
  return (
    <Page title="Contact">
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
