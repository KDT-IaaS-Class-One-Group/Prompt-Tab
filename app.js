const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const path = require('path');
// const routes = require('./routes');

const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// app.use('/', routes);

server.listen(port, () => {
  console.log(`http://localhost:8080`);
}); 