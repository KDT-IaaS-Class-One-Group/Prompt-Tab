import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get('/data.json', (req, res) => {
  // 이곳에서 JSON 파일의 경로를 설정해야 합니다
  res.sendFile(path.join(__dirname, '../data', 'data.json'));
});

router.get('/style.json', (req, res) => {
  // 이곳에서 style.json 파일의 경로를 설정해야 합니다
  res.sendFile(path.join(__dirname, '../data', 'style.json'));
});

router.post('/submit', (req, res) => {
  try {
    const receivedMessage = req.body.message;

    // 파일에 추가할 데이터
    const newData = { message: receivedMessage };

    // 기존 데이터베이스 파일 읽기
    let existingData = [];
    if (fs.existsSync(path.join(__dirname, '../data/database.json'))) {
      const data = fs.readFileSync(path.join(__dirname, '../data/database.json'), 'utf8');
      existingData = JSON.parse(data);
    }

    // 새로운 데이터 추가
    existingData.push(newData);

    // 데이터베이스 파일에 쓰기
    fs.writeFileSync(path.join(__dirname, '../data/database.json'), JSON.stringify(existingData, null, 2));

    const messageWithBreaks = receivedMessage.replace(/\n/g, '<br>');
    res.send(`${messageWithBreaks}가 대체 뭔데`);
  } catch (error) {
    console.error("에러 발생:", error);
    res.status(500).send("요청 처리 중에 오류가 발생했습니다");
  }
});

export default router;