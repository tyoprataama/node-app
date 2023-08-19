const fs = require('fs');

//////////////////////////////////
///// FS

// Synchronous way
const input = fs.readFileSync('./txt/dummy.txt');
console.log(input);

// Asynchronous way
fs.readFile('./txt/dummy.txt', 'utf-8', (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
  })
});
console.log('Reading File');
