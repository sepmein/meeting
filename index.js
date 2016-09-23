'use strict';

let authServer = require('userjs');
let app = require('koa')();
let router = require('koa-router')();
let Mongo = require('mongodb');
let jwt = require('json-web-token');
let cors = require('koa-cors');
let allowMethods = require('koa-allow-methods');
let parseBody = require('./middlewares/parseBody');

// configuration
const CONF = require('./configuration');
const COLLECTION = CONF.main.collection;
const PORT = CONF.main.port;
const AUTH = CONF.auth;
authServer(AUTH);
// meeting
router.get('/meeting', function* (next) {

});
router.post('/meeting', function* (next) {

});
router.put('/meeting', function* (next) {

});
router.del('./meeting', function* (next) {

});
// meetings
router.get('/meetings', function* (next) {

});


app.use(cors());
app.use(allowMethods(['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']));
app.use(parseBody);
app.use(router.routes());

Mongo.connect('mongodb://local:27017/' + COLLECTION, function(err, db) {
  if (err) {
    // app.throw(500);
    throw err;
  }
  app.context.CONFIGURATION = CONF;
  app.context.db = db;
  app.context.collection = db.collection(COLLECTION);
  app.listen(PORT);
});
