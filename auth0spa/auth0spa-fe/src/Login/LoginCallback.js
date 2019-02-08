import React, { Component } from 'react';
import loading from '../loading.svg';

class LoginCallback extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt="loading"/>
      </div>
    )
  }
}

export default LoginCallback;
