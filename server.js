var http = require('http');
var code = 301; // Permenant Redirect
var secure = false;
http.createServer(function (req, res) {
  res.statusCode = code;
  res.setHeader('Location', 'http' + (secure ? 's': '') + '://n8.io' + req.url);
  res.end();
}).listen(8080);
