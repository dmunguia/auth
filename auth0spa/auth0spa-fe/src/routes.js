import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Login from './Login/Login';
import LoginCallback from './Login/LoginCallback';
import AuthService from './Auth/AuthService';
import history from './history';

const authService = new AuthService();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    authService.handleAuthentication();
  }
};

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={Login}>
      <div>
        <Route path="/" render={(props) => <Login authService={authService} {...props}/>}/>
        <Route path="/home" render={(props) => <App authService={authService} {...props}/>}/>
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <LoginCallback {...props}/>
        }}/>
      </div>
    </Router>
  );
};
