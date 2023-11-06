import express from 'express';
import path from 'path';
import http from 'http';
import bodyParser from 'body-parser';

const app = express();
const server = http.createServer(app);
const currentDir = path.dirname(new URL(import.meta.url).pathname);
const port = 8080;

app.use(bodyParser.json());

app.use(express.static(path.join(currentDir, 'public')));

const routes = require('./routes/routes');
app.use('/', routes);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
