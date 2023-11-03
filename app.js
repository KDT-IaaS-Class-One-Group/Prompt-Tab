const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const routes = require('./routes/routes');

const port = 8080;

app.use('/', routes);
app.post('/submit', routes);

server.listen(port, () => {
  console.log(`http://localhost:8080`);
}); 

/*
저는 설계에 중점을 뒀습니다.
작성 자체는 어렵지 않습니다. 시간만 걸릴 뿐 작성만 하라고 하면 금방한다 자신합니다.
겉만 화려하게 되는 것보다 밑바닥 부터 탄탄하게 올라가기 위해
프로젝트 작성 -> 할 작업 이슈 작성 -> 깃 커밋 세분화 작업을 하였습니다.
*/