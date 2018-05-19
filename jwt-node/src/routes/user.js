const bcrypt = require('bcrypt');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const _conf = require('../conf')
const userService = require('../services/user.js');

router.post('/', async (req, res) => {
  try {
    const user = await userService.insert(
      req.body.email,
      req.body.password);
      
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({error: err});
  }
});

router.post('/authentication', async (req, res) => {
  try {
    const authorized = await userService.authenticate(
      req.body.email,
      req.body.password);

    if (authorized) {
      jwtToken = jwt.sign(
        {email: req.body.email},
        _conf.JWT_SECRET,
        {expiresIn: _conf.JWT_EXPIRES}
      );

      res.status(200).json({
        authorized: true,
        token: jwtToken
      });

    } else {
      res.status(401).json({authorized: false});
    }
  } catch (err) {
    res.status(500).json({error: err});
  }
});

module.exports = router;
