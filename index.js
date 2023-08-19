const http = require('http');
const url = require('url');


/// ROUTING

const server = http.createServer((req, res) => {
  const pathName = req.url
  if (pathName === '/') {
    res.end('This is from HOME');
  } else if (pathName === '/overview') {
    res.end('This is from the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is from the PRODUCT');
  } else {
    res.end('404 Page Not Found!');
  }
})

const port = 8000
server.listen(port, '127.0.0.1', () => {
  console.log(`Listening port ${port}`);
})