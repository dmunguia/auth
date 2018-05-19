module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  JWT_EXPIRES: process.env.JWT_EXPIRES || '1m',
  PORT: process.env.PORT || 3000
}
