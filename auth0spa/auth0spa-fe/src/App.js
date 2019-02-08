import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Profile from './Profile/Profile.js';
import Ping from './Ping/Ping.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome!</h1>
        <Profile {...this.props}/>
        <Ping authService={this.props.authService}/>
      </div>
    );
  }
}

export default App;
