import React, { Component } from 'react';
import { 
  Header,
  Container,
 } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center" style={{marginTop:"25px"}}>Hello! My name is Tony Choutdara and I am a Web Developer!</Header>
        <Header as="h3" textAlign="center">Ruby | JavaScript | PostgreSQL</Header>
      </Container>
    );
  }
}

export default Home;

