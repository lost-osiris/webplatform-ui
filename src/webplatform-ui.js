'use strict';

if (process.env.NODE_ENV === 'production') {
  // require('../es/main.css');
  module.exports = require('../es/webplatform-ui.min.js');
} else {
  // require('../es/main.css');
  module.exports = require('../es/webplatform-ui.js');
}