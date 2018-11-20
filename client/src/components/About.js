import React, { Component } from 'react';
import { 
  Header,
  Container,
  Divider,
 } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center" style={{marginTop:"25px"}}>A little bit about me...</Header>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>About Myself</Header>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>Hobbies</Header>
      </Container>
    );
  }
}

export default About;
