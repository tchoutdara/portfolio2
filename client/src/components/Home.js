import React, { Component } from 'react';
import { 
  Header,
  Container,
  Divider,
  Image,
  List,
 } from 'semantic-ui-react';
import Selfie from '../images/tchout.png';
import SkillSets from './SkillSets';


class Home extends Component {

  render() {
    return (
      <Container>
        <Image src={Selfie} circular centered style={{height:"300px", width:"250px", marginTop:"20px"}} />
          <Header as="h1" textAlign="center" style={{marginTop:"20px"}}>
            Hello! My name is Tony Choutdara and I am a Full Stack Web Developer!
          </Header>
            <Divider />
            <SkillSets />    
      </Container>
    );
  }
}

export default Home;
