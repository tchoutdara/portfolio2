import React, { Component } from 'react';
import { 
  Header,
  Segment,
  Divider,
  Image,
 } from 'semantic-ui-react';
import Selfie from '../images/tchout.png';
import SkillSets from './SkillSets';
import SkillSets2 from './SkillSets2';


class Home extends Component {

  render() {
    return (
      <Segment basic>
        <Image src={Selfie} circular centered style={{height:"300px", width:"250px", marginTop:"20px"}} />
          <Header as="h1" textAlign="center" style={{marginTop:"20px", color:"#0086b3"}}>
            Hello! My name is Tony Choutdara and I am a Full Stack Web Developer!
          </Header>
          <SkillSets /> 
          <SkillSets2 />
          <Divider />  
          <Header as="h1" textAlign="center" style={{marginTop:"20px", color:"#0086b3"}}>
            Resume 
          </Header>
          <Segment basic textAlign="center" style={{color:"white"}}>
            Lay this section out similar to a resume with work experience, education, and professional summary.
          </Segment>
      </Segment>
    );
  }
}

export default Home;
