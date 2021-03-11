import React from "react";
//import { Link } from 'react-router-dom'
import { Segment, Button, Image, List, Divider, Container } from "semantic-ui-react";
// import '../stylesheets/footer.css'



const Footer = () => {
  return (
    <div >
      <Segment inverted textAlign="center"  >
        <Button circular color='black' icon='github' bordered inverted as='a' href="https://github.com/sidchopp" target="_blank" />
        <Button circular color='black' icon='linkedin' bordered inverted as='a' href="https://www.linkedin.com/in/sidchopp/" target="_blank" />
        <Button circular color='black' icon='facebook' bordered inverted as='a' href="https://www.facebook.com/siddchopp/" target="_blank" />
        <Button circular color='black' icon='twitter' bordered inverted as='a' href="#" target="_blank" />
        <div>
          <List horizontal inverted divided link size='small' style={{ marginTop: '0.5em' }}>
            <List.Item as='a' href='#'>
              Sid-portfolio
            </List.Item>
            <List.Item as='a' href='#'>
              Copyright &copy; {new Date().getFullYear()}
            </List.Item>
          </List>
        </div>
      </Segment>
    </div>
  );
};

export default Footer;

