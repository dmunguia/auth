const express = require('express');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');
var cors = require('cors');

const app = express();
const _conf = require('./conf');
const task = require('./routes/task');
const user = require('./routes/user');


app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(expressJwt({secret: _conf.JWT_SECRET}).unless(
  {
    path: [
      '/health',
      '/api/user',
      '/api/user/authentication'
    ]
  }
));


app.get('/health', function(req, res){
   res.json({
      "msg": "It works!"
   });
});

app.use('/api/task', task);
app.use('/api/user', user);

app.listen(_conf.PORT, function(){
  console.log('Server is running on port', _conf.PORT);
});
