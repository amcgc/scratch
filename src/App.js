import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import Home from './Home/Home'
import Snippets from './Snippets/Snippets'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className = 'scratch'>
          <Navbar className='fixed-top' inverse expanded staticTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/home">Scratch</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav >
                <LinkContainer to="/home"><NavItem>Home</NavItem></LinkContainer>
                <LinkContainer to="/snippets/javascript"><NavItem>Javascript</NavItem></LinkContainer>
                <LinkContainer to="/snippets/d3"><NavItem>D3.js</NavItem></LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/snippets" component={Snippets} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
