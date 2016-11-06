'use strict';

let authServer = require('userjs');
let app = require('koa')();
let router = require('koa-router')();
let Mongo = require('mongodb');
let jwt = require('json-web-token');
let cors = require('koa-cors');
let allowMethods = require('koa-allow-methods');
let parseBody = require('./middlewares/parseBody');
let parseBearerToken = require('koa-parse-bearer-token');
// configuration
const CONF = require('./config');
const COLLECTION = CONF.main.collection;
const PORT = CONF.main.port;
const AUTH = CONF.auth;

// auth server
authServer(AUTH);
// meeting
// router
router.get('/', function* (next) {
  this.body = 'hello';
  yield next;
});
router.get('/meeting', function* (next) {

});
router.post('/meeting', parseBearerToken, function* (next) {

});
router.put('/meeting', function* (next) {

});
router.del('./meeting', function* (next) {

});
// meetings
router.get('/meetings', function* (next) {

});

// middlewares
app.use(cors());
app.use(allowMethods(['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS']));
app.use(parseBody);
app.use(router.routes());

Mongo.connect('mongodb://localhost:27017/' + COLLECTION, function (err, db) {
  if (err) {
    throw err;
  }
  app.context.CONFIGURATION = CONF;
  app.context.db = db;
  app.context.collection = db.collection(COLLECTION);
  app.listen(PORT);
});
