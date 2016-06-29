var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)

  // var absPath = path.join(__dirname, asset);
 
  res.writeHead(200, exports.headers);
  fs.readFile(asset, 'utf8', function(err, data) {
    if (err) {
      throw err;
    }
    res.write(data);
    res.end();
  });
};

  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)

// As you progress, keep thinking about what helper functions you can put here!

exports.sendResponse = function(response, statusCode, data) {
  statusCode = statusCode || 200;
  response.writeHead(statusCode, exports.headers);
  if (data) {
    response.end(data);
  } else {
    response.end();
  }
};