import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import About from './About';
import ProjectPage from './ProjectPage';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Segment } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Segment style={styles.background}>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projectpage" component={ProjectPage} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </Segment>
    );
  }
}

const styles = {
  background: {
    backgroundColor: "#262626",
    color: "white"
  },
}


export default App;

