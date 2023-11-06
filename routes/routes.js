import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.post('/submit', (req, res) => {
  try {
    const receivedMessage = req.body.message;
    console.log("Received message:", receivedMessage);

    const messageWithBreaks = receivedMessage.replace(/\n/g, '<br>');
    res.send(`<p>${messageWithBreaks}</p>`);
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).send("Error occurred while processing the request");
  }
});

export default router;