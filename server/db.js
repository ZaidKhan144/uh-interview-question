require('dotenv').config();
const mysql = require('mysql2');
const Promise = require('bluebird');


const connection = mysql.createConnection({
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 3306,
  
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

// This will create versions of the mysql2 library functions
// that are _promisified_ and suffixed with "Async".
//
// Callback-based: `db.query(queryStr, callback)`
// Promises-based: `db.queryAsync(queryStr).then(....)`
//
// You may use non-promisified, callback-based versions of the
// functions, if desired, but may need to update function
// signatures and invocations elsewhere in the app.
const db = Promise.promisifyAll(connection, { multiArgs: true });

module.exports = db;