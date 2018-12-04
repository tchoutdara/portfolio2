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
import PostgreSQLLogo from '../images/postgresql-logo.png'


class Home extends Component {

  render() {
    return (
      <Container>
        <Image src={Selfie} circular centered style={{height:"300px", width:"250px", marginTop:"10px"}} />
          <Header as="h1" textAlign="center" style={{marginTop:"10px"}}>
            Hello! My name is Tony Choutdara and I am a Full Stack Web Developer!
          </Header>
            <Divider />
          <Container style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <Image src={Railslogo} style={{height:"250px", width:"300px", marginTop:"10px"}} />
            <Image src={ReactLogo} style={{height:"250px", width:"300px", marginTop:"10px"}} />
            <Image src={PostgreSQLLogo} style={{height:"250px", width:"300px", marginTop:"10px"}} />
          </Container>
      </Container>
    );
  }
}

export default Home;
