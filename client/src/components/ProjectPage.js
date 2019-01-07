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
              A ToDo list with Google map integration. I worked on this project with a team and the main focus behind this
              application is use a auto filter based off of readius to the item. It allows the users to keep out clutter and only handle
              list that are close to them.
            </Container>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px", color:"white"}}>
          Call of Duty 4 Web Application
        </Header>
          <Image src={BO4} centered style={{height:"200px", width:"300px", marginBottom:"10px"}} />
            <Container textAlign="center">
              This is a stat tracker for Call of Duty Black OPs 4. The user can input their Call of Duty 4 alias into the search bar
              and pull up information about themselves. There is also features for top 20 players for every gaming platform, it is a fun
              easy app for gamers.
            </Container>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px", color:"white"}}>
          Call of Duty 4 React Native Application
        </Header>
          <Image src={BO4Native} centered style={{height:"300px", width:"150px", marginBottom:"10px"}} />
            <Container textAlign="center">
              Another stat tracker for Call of Duty Black OPs 4, but this one was built with React Native. This was built to have the
              user pull up their gaming stats on the phone. Allows for easy use anywhere and if you want to show off your high level
              stats to your buddies when not around a PC.
            </Container>
          <Divider />
        <Header as="p" textAlign="center" style={{marginTop:"25px", color:"white"}}>
          Movie Data Base Application
        </Header>
          <Image src={MDB} centered style={{height:"200px", width:"300px", marginBottom:"20px"}} />
            <Container textAlign="center">
              Web Application using The Movie Database API to pull up information for Movies, TV Shows, and People. The app is
              configured show the weekly trends for each category.
            </Container>
      </Container>
    );
  }
}

export default ProjectPage;
