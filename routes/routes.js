
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('루트 경로입니다.');
});

router.get('/about', (req, res) => {
  res.send('어바웃 페이지입니다.');
});

router.post('/contact', (req, res) => {
  const { name, message } = req.body;
  res.send(`이름: ${name}, 메시지: ${message}`);
});

module.exports = router;