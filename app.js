const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const server = http.createServer(app);
const routes = require('./routes/routes');

const port = 8080;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

server.listen(port, () => {
  console.log(`http://localhost:8080`);
}); 