// Express is a web server library.
var express = require('express');
var path = require('path');
var webserver = express(); // Create web server.
// __dirname is current directory (our <project>/scripts dir).
var rootPath = path.normalize(__dirname + '/..');
console.log('rootPath: ' + rootPath);

// Serve up static pages from rootPath via Express web server.
webserver.use(express.static(rootPath + '/app'));

// Listen on given port.
var port = 8888;
webserver.listen(port);
console.log('Express web server running on port ' + port + '.');

