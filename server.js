var http = require('http');
var code = 301; // Permenant Redirect
http.createServer(function (req, res) {
  res.statusCode = code;
  res.setHeader('Location', 'https://n8.io' + req.url);
  res.end();
}).listen(8080);
