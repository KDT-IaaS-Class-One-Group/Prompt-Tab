const express = require('express')
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
const styles = require('../data/style.json')

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get('/style', (req, res) => {
  res.json(styles);
});

router.post('/submit', (req, res) => {
  const message = req.body.message;
  console.log("전송 받은 메시지 : ", message);
  res.send("메시지를 성공적으로 받았습니다.");
});

module.exports = router;