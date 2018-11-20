import React, { Component } from 'react';
import { 
  Header,
  Container,
  Divider,
 } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center" style={{marginTop:"50px"}}>Hello! My name is Tony Choutdara and I am a Full Stack Web Developer!</Header>
        <Divider />
        <Header as="h3" textAlign="center">
          Skill set section
        </Header>
      </Container>
    );
  }
}

export default Home;
