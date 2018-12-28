import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';
import { Button, Image, Segment, } from 'semantic-ui-react';
import GithubLogo from '../images/githubicon.png';
import LinkedinLogo from '../images/linkedinicon.png';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position="right">
        <Image 
          src={GithubLogo} style={{height:"30px", width:"30px", margin:"5px"}} 
          as='a'
          href='https://github.com/tchoutdara'
          target='_blank'
          />
        <Image 
          src={LinkedinLogo} style={{height:"30px", width:"30px", margin:"5px"}} 
          as='a'
          href='https://www.linkedin.com/in/tonychoutdara/'
          target='_blank'
        />
      </Menu.Menu>
    );
  }

  render() {
    return (
      <Segment style={styles.background}>
        <Menu secondary>
          <Link to="/">
            <Menu.Item name="home" style={{color: "white"}}/>
          </Link>
          <Link to="/about">
            <Menu.Item name="about" style={{color: "white"}}/>
          </Link>
          <Link to="/projectpage">
            <Menu.Item name="projects" style={{color: "white"}}/>
          </Link>
          { this.rightNavs() }
        </Menu>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: "#0086b3",
  },
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));

