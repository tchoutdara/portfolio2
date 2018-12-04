import React, { Component } from 'react';
import { 
  Header,
  Container,
  Divider,
  Image,
 } from 'semantic-ui-react';
import Selfie from '../images/tchout.png';
import Railslogo from '../images/RubyRails.png'
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
            <div style={{justifyContent:"center"}}>
              <ul>
                •	React
                •	React Native
                •	Ruby
                •	JavaScript | ES6
                •	HTML | CSS
                •	Axios
                •	Rails
              </ul>
            </div>
            <div style={{justifyContent:"center"}}>
              <p>
                •	Redux
              </p>
              <p>
                •	PostgreSQL
              </p>
              <p>
                •	RSpec
              </p>
              <p>
                •	GitHub
              </p>
              <p>
                •	Phabricator
              </p>
              <p>
                •	BootStrap | Semantic
              </p>
              <p>
                •	Microsoft Excel 
              </p>
            </div>
          </Container>
      </Container>
    );
  }
}

export default Home;
