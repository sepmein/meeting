'use strict';

let authServer = require('userjs');
let app = require('koa');
let router = require('koa-router');
let db = require('mongog');
let allowMethods = require('koa-allow-methods');
let jwt = require('json-web-token');

// configuration
const CONF = require('./configuration');

authServer.run(CONF);

app.use()
