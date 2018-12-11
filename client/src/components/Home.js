import React, { Component } from 'react';
import { 
  Header,
  Container,
  Divider,
  Image,
  List,
 } from 'semantic-ui-react';
import Selfie from '../images/tchout.png';
import Railslogo from '../images/RubyRails.png'
import ReactLogo from '../images/reactlogo.png'
import PostgreSQLLogo from '../images/postgresql-logo.png'


class Home extends Component {

  render() {
    return (
      <Container>
        <Image src={Selfie} circular centered style={{height:"300px", width:"250px", marginTop:"20px"}} />
          <Header as="h1" textAlign="center" style={{marginTop:"20px"}}>
            Hello! My name is Tony Choutdara and I am a Full Stack Web Developer!
          </Header>
            <Divider />
          <Container style={{display:"flex", flexDirection:"row", justifyContent:"center", fontSize:"18px"}}>
            <div style={{margin:"20px"}}>
              <List>
                <List.Item>React</List.Item>
                <List.Item>React Native</List.Item>
                <List.Item>JavaScript | ES6</List.Item>
                <List.Item>Redux</List.Item>
              </List>
            </div>
            <div style={{margin:"20px"}}>
              <List>
                <List.Item>Ruby</List.Item>
                <List.Item>Ruby on Rails</List.Item> 
                <List.Item>HTML</List.Item> 
                <List.Item>CSS</List.Item>
              </List>
            </div>
            <div style={{margin:"20px"}}>
              <List>
                <List.Item>Redux</List.Item>
                <List.Item>PostgreSQL</List.Item>
                <List.Item>RSpec</List.Item>
                <List.Item>GitHub</List.Item>
              </List>
            </div>
            <div style={{margin:"20px"}}>
              <List>
                <List.Item>Phabricator</List.Item>
                <List.Item>BootStrap</List.Item>
                <List.Item>Semantic</List.Item>
                <List.Item>Microsoft Excel</List.Item> 
              </List>
            </div>
          </Container>
      </Container>
    );
  }
}

export default Home;
