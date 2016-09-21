// start authentication server
let authServer = require('userjs');
authServer(require('./config.js').auth);

import koa from 'koa';
import router from 'koa-router';
import cors from 'koa-cors';
import mongodb from 'mongodb';
import cobody from 'co-body';

let app = koa();
