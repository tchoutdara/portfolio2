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

class ProjectPage extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center" style={{marginTop:"25px"}}>Projects Page</Header>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>To-Dont List(Screen Shot)</Header>
        <Container style={{display:"flex", flexDirection:"row", justifyContent:"center", fontSize:"18px"}}>
            <Image src={TDList} style={{height:"200px", width:"300px", marginRight:"20px"}} />
            <p>A to do list with Google map integration.</p>
        </Container>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>Call of Duty 4 Web App(Screen Shot)</Header>
        <Container style={{display:"flex", flexDirection:"row", justifyContent:"center", fontSize:"18px"}}>
            <Image src={BO4} style={{height:"200px", width:"300px", marginRight:"20px"}} />
            <p>Stat tracker for Call of Duty Black OPs 4</p>
        </Container>
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>Call of Duty 4 React Native App(Screen Shot)</Header>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px"}}>Movie Data Base App(Screen Shot)</Header>
        <Container style={{display:"flex", flexDirection:"row", justifyContent:"center", fontSize:"18px"}}>
            <Image src={MDB} style={{height:"200px", width:"300px", marginRight:"20px"}} />
            <p>Web Application using The Movie Database API to pull up information for Movies, TV Shows, and People.</p>
        </Container>
      </Container>
    );
  }
}

export default ProjectPage;
