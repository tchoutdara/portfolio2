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
        <Header as="h1" textAlign="center" style={{marginTop:"25px"}}>
          Projects Page
        </Header>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>
          To-Dont List
        </Header>            
          <Image src={TDList} centered style={{height:"200px", width:"300px", marginBottom:"10px"}} />
            <Container textAlign="center">
              A to do list with Google map integration.
            </Container>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>
          Call of Duty 4 Web App
        </Header>
          <Image src={BO4} centered style={{height:"200px", width:"300px", marginBottom:"10px"}} />
            <Container textAlign="center">
              Stat tracker for Call of Duty Black OPs 4
            </Container>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>Call of Duty 4 React Native App</Header>
        <Container style={{display:"flex", flexDirection:"row", justifyContent:"center", fontSize:"18px", width:"700px"}}>
            <Image src={BO4Native} style={{height:"300px", width:"150px", marginRight:"20px"}} />
            <p>Stat tracker for Call of Duty Black OPs 4 on a mobile devise.</p>
        </Container>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>Movie Data Base App</Header>
        <Container style={{display:"flex", flexDirection:"row", justifyContent:"center", fontSize:"18px", width:"700px"}}>
            <Image src={MDB} style={{height:"200px", width:"300px", marginRight:"20px"}} />
            <p>Web Application using The Movie Database API to 
              pull up information for Movies, TV Shows, and People.</p>
        </Container>
      </Container>
    );
  }
}

export default ProjectPage;
