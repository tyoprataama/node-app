const http = require('http');
const url = require('url');

/// SERVER
const server = http.createServer((req, res) => {
  res.end('Halo from the server');
})

const port = 8000
server.listen(port, '127.0.0.1', () => {
  console.log(`Listening port ${port}`);
})