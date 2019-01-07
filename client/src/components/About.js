import React, { Component } from 'react';
import { 
  Header,
  Container,
  Divider,
 } from 'semantic-ui-react';

class About extends Component {
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center" style={{marginTop:"25px", color:"white"}}>A little bit about me...</Header>
          <p align="center">
            Hi all I am a highly motivated, detail oriented, and hard working individual. I enjoy 
            trying to figure out complex problems and using my creativity when the opportunity arises.          
          </p>
          <Divider />
        <Header as="h1" textAlign="center" style={{marginTop:"25px", color:"white"}}>Hobbies/Enjoyments</Header>
        <p align="center">
            Gaming - I guess you could call me a pretty big gamer. I love to play challenging/competitive games in mostly the 
            first-person-shooter genre. I am also trying to get into Smash Bros. Ultimate on the Switch, so give me some pointers! 
            I am mostly a PC Gamer(#PCMasterRace) though I do own a Nintendo Switch 
            and a Playstation 4, so if you want to game contact me for my gamer tags.
        </p>
        <Divider />
        <p align="center">
            Hunting/Fishing - Even though I love coding and gaming I do try my best to get outdoors. I am from Boise, Idaho and grew up around
            a lot of hunting and fishing. If you are also into this hobby let me know if you would like another hunting or fishing partner 
            because I am new to the Salt Lake City area.      
        </p>
        <Divider />
        <p align="center">
            Cars - Another fun hobby that allows me to use some troubleshooting and problem solving skills. I enjoy working on cars and racing 
            cars when I get the opportunity. I drive a Subaru WRX, but I enjoy every car and the work the owners put into them. Again, if you love
            cars and what to do car stuff let me know.        
        </p>
        <Divider />
        <p align="center">
            Snowboarding - This hobby I just recently picked up again because Utah has some of the best resorts that I could not let pass! I 
            started snowboarding when I was about 12 years old and rode heavily upto the end of high school. Then I was having to adult 
            a lot more and it was a hobby that I did not do as frequently. Of course this had to change now that I am living in Utah, so
            lets go boarding sometime!
        </p>
      </Container>
    );
  }
}

export default About;
