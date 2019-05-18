var express = require('express');
var router = express.Router();

/* GET API index */
router.get('/', (req, res, next) => {
  try {
    res.json({ msg: 'Beta email sign-up.' })
  } catch (err) {
    console.log(err)
    next(err)
  }
});

module.exports = router;
