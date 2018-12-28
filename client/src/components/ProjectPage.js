import React, { Component } from 'react';
import { 
  Header,
  Container,
  Divider,
  Image,
 } from 'semantic-ui-react';
 import BO4 from '../images/BO4.png'
 import MDB from '../images/MovieDB.png'
 import TDList from '../images/TodontList.png'
 import BO4Native from '../images/BO4Native.png'

class ProjectPage extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center" style={{marginTop:"25px", color:"white"}}>
          Projects Page
        </Header>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px", color:"white"}}>
          To-Dont List
        </Header>            
          <Image src={TDList} centered style={{height:"200px", width:"300px", marginBottom:"10px"}} />
            <Container textAlign="center">
              A to do list with Google map integration.
            </Container>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px", color:"white"}}>
          Call of Duty 4 Web App
        </Header>
          <Image src={BO4} centered style={{height:"200px", width:"300px", marginBottom:"10px"}} />
            <Container textAlign="center">
              Stat tracker for Call of Duty Black OPs 4
            </Container>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px", color:"white"}}>
          Call of Duty 4 React Native App
        </Header>
          <Image src={BO4Native} centered style={{height:"300px", width:"150px", marginBottom:"10px"}} />
            <Container textAlign="center">
              Stat tracker for Call of Duty Black OPs 4 on a mobile devise.
            </Container>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px", color:"white"}}>
          Movie Data Base App
        </Header>
          <Image src={MDB} centered style={{height:"200px", width:"300px", marginBottom:"20px"}} />
            <Container textAlign="center">
              Web Application using The Movie Database API to 
              pull up information for Movies, TV Shows, and People.
            </Container>
      </Container>
    );
  }
}

export default ProjectPage;
