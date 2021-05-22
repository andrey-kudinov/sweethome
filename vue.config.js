const webpack  = require('webpack');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sweethome/'
    : '/',
}
