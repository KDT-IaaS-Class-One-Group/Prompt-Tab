const router = require('express').Router();
const path = require('path');

router.use(path.join(__dirname, 'public'));

router.get('/', (req, res) => {
  console.log('gg');
});

module.exports = router;