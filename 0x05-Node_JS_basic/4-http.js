const http = require('http');

const hostName = '127.0.0.1';
const port = 12345;
// creating the http server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostName, () => {});

module.exports = app;
