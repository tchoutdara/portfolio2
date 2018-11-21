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
          <p align="center">
            Hi all I am a highly motivated, detail oriented, and hard working individual. I enjoy 
            trying to figure out complex porblems and using my creativity when the opportunity arises.          
          </p>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>Hobbies</Header>
      </Container>
    );
  }
}

export default About;
