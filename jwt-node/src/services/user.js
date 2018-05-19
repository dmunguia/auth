const bcrypt = require('bcrypt-as-promised');

const db = require('../db')

const userService = {
  insert: async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10)

    return db.users.insert({
      email: email,
      password: hashedPassword
    })
  },

  authenticate: async (email, password) => {
    const user = db.users.findOne({email: email});
    try {
      const authorized = await bcrypt.compare(password, user.password);
      return authorized;
    } catch (err) {
      return false;
    }
  }
}


module.exports = userService;
