'use strict';

if (process.env.NODE_ENV === 'production') {
  require('../es-production/index.css');
  module.exports = require('../es-production/index.js');
} else {
  require('../es/index.css');
  module.exports = require('../es/index.js');
}