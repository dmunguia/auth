// src/Auth/Auth.js

import auth0 from 'auth0-js';
import history from '../history';

export default class AuthService {
  auth0 = new auth0.WebAuth({
    domain: 'dmng.auth0.com',
    clientID: '0o3F6k4H0G3NcDw2_MeyELEWMwHhOcK6',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://sample-app.dmng.io',
    responseType: 'token id_token',
    scope: 'openid profile permissions roles read:messages'
  });

  userProfile;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);

    history.replace('/home');
  }

  login() {
    this.auth0.authorize();
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    history.replace('/home');
  }

  isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    const authenticated = (new Date().getTime() < expiresAt);

    console.log('**** Access Token:', localStorage.getItem('access_token'));

    return authenticated;
  }

  // Retrieving user  profile
  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error("No Access Token found");
    }

    return accessToken;
  }

  getProfile(callback) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile
      }
      callback(err, profile);
    });
  }
}
