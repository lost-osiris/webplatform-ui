'use strict';

if (process.env.NODE_ENV === 'production') {
  // require('../es/main.css');
  module.exports = require('../es/index.min.js');
} else {
  // require('../es/main.css');
  module.exports = require('../es/index.js');
}