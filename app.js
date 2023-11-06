import express from 'express';
import path from 'path';
import http from 'http';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/routes');
app.use('/', routes);

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
