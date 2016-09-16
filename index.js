// start authentication server
let authServer = require('userjs');
authServer(require('./config.js').auth);
