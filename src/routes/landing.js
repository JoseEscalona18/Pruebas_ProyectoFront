const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  setTimeout(() => {
    res.render('landing')
  }, 800);
});
module.exports = router;