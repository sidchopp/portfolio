import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import SidPic from '../images/sidPic.jpg'

const CardExampleImageCard = () => (
  <Card fluid >
    <Image bordered rounded size='small' circular src={SidPic} wrapped ui={false} />
    <Card.Content>
      <Card.Header>Siddharth Chopra</Card.Header>
      <Card.Meta>AWS Certified Cloud Practitioner | Full Stack Developer | Physics instructor</Card.Meta>
      <Card.Description>
        I live in Calgary, Canada.
      </Card.Description>
    </Card.Content>

  </Card>
)

export default CardExampleImageCard;