import React, { Component } from 'react';
import { 
  Header,
  Container,
  Divider,
  Image,
  List,
 } from 'semantic-ui-react';
import Railslogo from '../images/RubyRails.png'
import PostgreSQLLogo from '../images/postgresql-logo.png'
import ReactLogo from '../images/reactlogo.png'
import ReduxLogo from '../images/redux.png'
import NativeLogo from '../images/reactnative.png'
import JSLogo from '../images/JavaScript-logo.png'
import RubyLogo from '../images/ruby.png'
import HTMLLogo from '../images/html.png'
import CSSLogo from '../images/css.png'
import MySQLLogo from '../images/mysql.png'
import RspecLogo from '../images/rspec.png'


class SkillSets extends Component {

  render() {
    return (
      <Container>
          <Container style={{display:"flex", flexDirection:"row", justifyContent:"center", fontSize:"18px"}}>
            <div style={{margin:"20px"}}>
              <List>
                <List.Item>
                  <Image src={ReactLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  React
                </List.Item>
                <List.Item>
                  <Image src={NativeLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  React Native
                </List.Item>
                <List.Item>
                  <Image src={JSLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  JavaScript | ES6
                </List.Item>
                <List.Item>
                  <Image src={ReduxLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  Redux
                </List.Item>
              </List>
            </div>
            <div style={{margin:"20px"}}>
              <List>
                <List.Item>
                  <Image src={RubyLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} /> 
                  Ruby
                </List.Item>
                <List.Item>
                  <Image src={Railslogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  Ruby on Rails
                </List.Item> 
                <List.Item>
                  <Image src={HTMLLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  HTML
                </List.Item> 
                <List.Item>
                  <Image src={CSSLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  CSS
                </List.Item>
              </List>
            </div>
            <div style={{margin:"20px"}}>
              <List>
                <List.Item>
                  <Image src={MySQLLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  MySQL
                </List.Item>
                <List.Item>
                  <Image src={PostgreSQLLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  PostgreSQL
                </List.Item>
                <List.Item>
                  <Image src={RspecLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  RSpec
                </List.Item>
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

export default SkillSets;