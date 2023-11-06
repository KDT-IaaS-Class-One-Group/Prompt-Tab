const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const server = http.createServer(app);
const routes = require('./routes/routes');

const port = 8080;

app.use('/', routes);
app.post('/submit', routes);

server.listen(port, () => {
  console.log(`http://localhost:8080`);
}); 