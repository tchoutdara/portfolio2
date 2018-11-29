import React, { Component } from 'react';
import { 
  Header,
  Container,
  Divider,
  Grid,
  Image,
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
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>Hobbies/Enjoyments</Header>
        <p align="center">
            I have so many hobbies, list them here. Add images(maybe hire artist to do fun pictures for hobbies)         
        </p>
        <p align="center">
            Gaming        
        </p>
        <p align="center">
            Hunting/Fishing       
        </p>
        <p align="center">
            Cars        
        </p>
        <p align="center">
            Snowboarding       
        </p>
      </Container>
    );
  }
}

export default About;
