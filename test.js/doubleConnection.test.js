/**
 * test if mongodb multiple connection is possible
 */

let Mongo = require('mongodb');
Mongo.connect('mongodb://localhost:27017/test', function(err, db) {
  if (err) {
    throw err;
  } else {
    console.info(db);
  }
});

Mongo.connect('mongodb://localhost:27017/test', function(err, db) {
  if (err) {
    throw err;
  } else {
    console.info(db);
  }
});
