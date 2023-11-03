const express = require('express')
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

router.use(express.static(path.join(__dirname, '../public')));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/submit', (req, res) => {
  const message = req.body.message;
  console.log("전송 받은 메시지 : ", message);
  res.send("오냐 잘 받았다");
});

module.exports = router;