import React, { Component } from 'react';
import { 
  Header,
  Container,
  Divider,
  Image,
 } from 'semantic-ui-react';
 import Selfie from '../images/tchout.png';
 import Railslogo from '../images/railslogo.jpg'
 import ReactLogo from '../images/reactlogo.png'


class Home extends Component {

  render() {
    return (
      <Container>
        <Image src={Selfie} circular centered style={{height:"300px", width:"250px", marginTop:"10px"}} />
          <Header as="h1" textAlign="center" style={{marginTop:"10px"}}>
            Hello! My name is Tony Choutdara and I am a Full Stack Web Developer!
          </Header>
            <Divider />
          <Header as="h3" textAlign="center">
            Skill set section(ADD images of languages and then list out skills underneath)
          </Header>
          <Image src={Railslogo} style={{height:"200px", width:"200px", marginTop:"10px"}} />
          <Image src={ReactLogo} style={{height:"200px", width:"200px", marginTop:"10px"}} />
      </Container>
    );
  }
}

export default Home;
