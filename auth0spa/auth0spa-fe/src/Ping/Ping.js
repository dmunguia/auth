import React, { Component } from 'react';
import axios from 'axios';

class Ping extends Component {

  componentWillMount() {
    this.setState({ message: '' });
  }

  componentDidMount() {
    const API_URL = 'http://localhost:3001/private-scoped';

    const { getAccessToken } = this.props.authService;
    const headers = { 'Authorization': `Bearer ${ getAccessToken() }`};
    axios.get(API_URL, { headers })
      .then(response => this.setState({ message: response.data.msg }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    return (
      <div>
        <h3>Ping</h3>
        <span>{ this.state.message }</span>
      </div>
    );
  }
}

export default Ping;
