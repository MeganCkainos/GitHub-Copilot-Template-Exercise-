// Create web server
// 1. Create a web server
// 2. Read the file
// 3. Send the file to the client
// 4. Listen on port 3000

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  console.log('Request was made: ' + request.url);
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  var readStream = fs.createReadStream(__dirname + '/comments.html', 'utf8');
  readStream.pipe(response);
});

server.listen(3000, '127.0.0.1');