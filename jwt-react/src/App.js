import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/login' component={Login} />
      </Router>
    );
  }
}

export default App;
