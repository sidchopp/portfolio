import React from "react";
import { Link } from 'react-router-dom'
import { Segment, Button, List, Header, Icon } from "semantic-ui-react";
// import '../stylesheets/footer.css'




const Footer = () => {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return (
    <div >
      <Segment inverted textAlign="center"  >
        <Button circular color='black' icon='github' bordered inverted as='a' href="https://github.com/sidchopp" target="_blank" />
        <Button circular color='black' icon='linkedin' bordered inverted as='a' href="https://www.linkedin.com/in/sidchopp/" target="_blank" />
        <Button circular color='black' icon='facebook' bordered inverted as='a' href="https://www.facebook.com/siddchopp/" target="_blank" />
        <Button circular color='black' icon='twitter' bordered inverted as='a' href="#" target="_blank" />
        <div>
          <List horizontal inverted divided link size='tiny' style={{ marginTop: '0.5em' }}>
            <List.Item as='a' href='#' style={{ color: "orange" }}>
            </List.Item>
            <List.Item >
              Copyright &copy; {new Date().getFullYear()}
            </List.Item>
            <List.Item >
              Hope you are enjoying  {days[new Date().getDay()]}
            </List.Item>
          </List>
        </div>
      </Segment>
    </div>
  );
};

export default Footer;

