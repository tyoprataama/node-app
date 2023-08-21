const http = require('http');
const url = require('url');
const fs = require('fs');

const data = fs.readFileSync('./data/data.json', 'utf-8');
const dataObj = JSON.parse(data);

const tempHome = fs.readFileSync(`${__dirname}/templates/home.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/product.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, 'utf-8');

const replaceTemp = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName); // /{}/g is to make a change globally
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
  return output;

}

// const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

/// ROUTING
const server = http.createServer((req, res) => {
  const pathName = req.url;
  //  Home Page
  if (pathName === '/' || pathName === '/home') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    })
    // Mapping the card element
    const cardElm = dataObj.map(el => replaceTemp(tempCard, el)).join(''); // Join func to change array into a string
    const output = tempHome.replace('{%PRODUCT_CARDS%}', cardElm);

    res.end(output);
  } else if (pathName === '/product') {
    res.writeHead(200, {
      'Content-type': 'text/html'
    })
    res.end(tempProduct);
  } else {
    res.end('404 Page Not Found!');
  }
})

const port = 8000
server.listen(port, '127.0.0.1', () => {
  console.log(`Listening port ${port}`);
})