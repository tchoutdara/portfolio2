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
import GithubLogo from '../images/githubicon.png'
import PhabLogo from '../images/phabricator.png'
import BootstrapLogo from '../images/Boostrap_logo.svg'
import SemanticLogo from '../images/semanticui.png'
import ExcelLogo from '../images/excel.png'


class SkillSets extends Component {

  render() {
    return (
      <Container>
          <Header as="h3" textAlign="center" style={{marginTop:"20px", color:"white"}}>
            Developer Skills
          </Header>
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
                <List.Item>
                  <Image src={GithubLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  GitHub
                </List.Item>
              </List>
            </div>
            <div style={{margin:"20px"}}>
              <List>
                <List.Item>
                  <Image src={PhabLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  Phabricator
                </List.Item>
                <List.Item>
                  <Image src={BootstrapLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  BootStrap
                </List.Item>
                <List.Item>
                  <Image src={SemanticLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  Semantic
                </List.Item>
                <List.Item>
                  <Image src={ExcelLogo} style={{height:"20px", width:"20px", marginRight:"5px"}} />
                  Microsoft Excel
                </List.Item> 
              </List>
            </div>
          </Container>
      </Container>
    );
  }
}

export default SkillSets;