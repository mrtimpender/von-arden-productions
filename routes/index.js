var express = require('express');
var router = express.Router();

/* HOME GET */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Let's Capture Something Special" });
});

/* ABOUT GET */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
