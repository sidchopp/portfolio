import React from "react";
import Page from "./Page";
import { Header, Container, Divider } from 'semantic-ui-react';

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
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend
            tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
            enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi.
          </p>
        </Container>
      </div>
    </Page>

  )
}

export default Resume;