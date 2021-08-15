import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import SidPic from '../images/sidPic.jpg'

const CardExampleImageCard = () => (
  <Card  >
    <Image bordered rounded size='large' circular src={SidPic} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Siddharth Chopra</Card.Header>
      <Card.Meta>AWS Certified Cloud Practitioner | Full Stack Developer | Physics instructor</Card.Meta>
      <Card.Description>
        I live in Calgary, Canada.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      {/* <a>
        <Icon name='user' />
        10 Friends
      </a> */}
      <Button circular color='black' icon='github' bordered as='a' href="https://github.com/sidchopp" target="_blank" />
      <Button circular color='black' icon='linkedin' bordered as='a' href="https://www.linkedin.com/in/sidchopp/" target="_blank" />
      <Button circular color='black' icon='facebook' bordered as='a' href="https://www.facebook.com/siddchopp/" target="_blank" />
      <Button circular color='black' icon='twitter' bordered as='a' href="#" target="_blank" />
    </Card.Content>
  </Card>
)

export default CardExampleImageCard;