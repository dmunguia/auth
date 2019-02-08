const express = require('express');
const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');
const cors = require('cors');

const authz = require('./authz');

const app = express();

app.use(cors());

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dmng.auth0.com/.well-known/jwks.json`
  }),

  audience: 'https://sample-app.dmng.io',
  issuer: `https://dmng.auth0.com/`,
  algorithms: ['RS256']
});

const ns = 'http://sample-app.dmng.io';

app.get('/public', function(req, res){
   res.json({
      "status": "public",
      "msg": "Anyone can see this"
   });
});

app.get('/private', checkJwt, function(req, res){
   res.json({
      "status": "private",
      "msg": "This is a private message"
   });
});

app.get('/private-scoped', checkJwt, authz(ns, [ 'read:top-secret' ]), function(req, res){
   res.json({
      "status": "private-scoped",
      "msg": "Top secret!"
   });
});

app.listen(3001, function(){
  console.log('Server is running on port', 3001);
});
