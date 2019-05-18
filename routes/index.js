var express = require('express');
var router = express.Router();

/* GET API index */
router.get('/', (req, res, next) => {
  try {
    res.send('Welcome to the virtual Lunchroom.')
  } catch (err) {
    console.log(err)
    next(err)
  }
});

module.exports = router;
