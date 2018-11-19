import React, { Component } from 'react';
import { 
  Header,
  Container,
 } from 'semantic-ui-react';

class ProjectPage extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center" style={{marginTop:"25px"}}>Projects Page</Header>
      </Container>
    );
  }
}

export default ProjectPage;