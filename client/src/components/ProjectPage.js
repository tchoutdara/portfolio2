import React, { Component } from 'react';
import { 
  Header,
  Container,
  Divider,
 } from 'semantic-ui-react';

class ProjectPage extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center" style={{marginTop:"25px"}}>Projects Page</Header>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>Projects</Header>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>To-Dont List</Header>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>Call of Duty 4 Web App</Header>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>Call of Duty 4 React Native App</Header>
      </Container>
    );
  }
}

export default ProjectPage;
