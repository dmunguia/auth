const loki = require('lokijs');

const db = new loki('jwt-node-db');

module.exports = {
  users: db.addCollection('users')
};
