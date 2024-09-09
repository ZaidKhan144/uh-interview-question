require("dotenv").config();
const path = require("path");
const Controller = require("./controllers/directory.js");

const express = require("express");
const app = express();

// Refer to the php-express documentation for more information
// must specify options hash even if no options provided!
var phpExpress = require('php-express')({
  // assumes php is installed at /opt/homebrew/Cellar/php/8.3.2/bin/
  binPath: 'C:\\php-8.3.11\\php.exe'
});

// set view engine to php-express
app.set('views', path.join(__dirname, "../client/dist/views"));
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');
app.use(express.static(path.join(__dirname, "../client/dist/public")));

// routing all .php file to php-express
app.all(/.+\.php$/, phpExpress.router);
app.route('/api/directory').get((req, res) => {
  Controller.getPeople(req, res);
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);