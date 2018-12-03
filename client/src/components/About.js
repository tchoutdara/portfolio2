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
            Gaming - I guess you could call me a pretty big gamer. I love to play challenging/competitive games in mostly the 
            first-person-shooter genre. I am also trying to get into Smash Bros. Ultimate on the Switch, so give me some pointers! 
            I am mostly a PC Gamer(#PCMasterRace) though I do own a Nintendo Switch 
            and a Playstation 4, so if you want to game contact me for my gamer tags.
        </p>
        <p align="center">
            Hunting/Fishing - Even though I love coding and gaming I do try my best to get outdoors. I am from Boise, Idaho and grew up around
            a lot of hunting and fishing. If you are also into this hobby let me know if you would like another hunting or fishing partner 
            because I am new to the Salt Lake City area.      
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
