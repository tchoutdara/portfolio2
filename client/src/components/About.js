import React, { Component } from 'react';
import { 
  Header,
  Container,
 } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center" style={{marginTop:"25px"}}>A little bit about me...</Header>
      </Container>
    );
  }
}

export default About;
