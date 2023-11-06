const express = require('express');
const router = express.Router();
const path = require('path');
const styles = require('../data/style.json');
const datas = require('../data/data.json');

router.get('/styles', (req, res) => {
  res.json(styles);
});

router.get('/datas', (req, res) => {
  res.json(datas);
});

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.post('/submit', (req, res) => {
  try {
    const receivedMessage = req.body.message;
    console.log("전송 받은 메시지:", receivedMessage);

    const messageWithBreaks = receivedMessage.replace(/\n/g, '<br>');
    res.send(`<p>${messageWithBreaks}</p>`);
  } catch (error) {
    console.error("오류 발생:", error);
    res.status(500).send("요청 처리 중 오류 발생");
  }
});

module.exports = router;