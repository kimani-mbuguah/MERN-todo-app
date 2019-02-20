import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./index.css";
import logo from "./logo.png";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Welcome from './components/welcome';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import Todos from './components/todos';


class App extends Component {
  state = {
    todos: [
        {
            id:1,
            title:'complete todo app',
            completed: false
        }
    ]
}
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Todos todos={this.state.todos}/>
          <Route exact path="/" component={Welcome} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
