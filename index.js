const http = require('http');
const url = require('url');
const fs = require('fs');


 const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8')
 const dataObj = JSON.parse(data)
  
/// ROUTING
const server = http.createServer((req, res) => {
  const pathName = req.url
  if (pathName === '/' || pathName === '/home') {
    res.end('This is from HOME');
  } else if (pathName === '/overview') {
    res.end('This is from the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is from the PRODUCT');
  } 
  /// API
  else if (pathName === '/api') {
      res.writeHead(200)
      res.end(data)
  } else {
    res.end('404 Page Not Found!');
  }
})

const port = 8000
server.listen(port, '127.0.0.1', () => {
  console.log(`Listening port ${port}`);
})