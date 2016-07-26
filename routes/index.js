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

/* Contact GET */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'CONTACT'});
})
/* Portfolio GET */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', {title: 'PORTFOLIO'});
});
/* SERVICES GET */
router.get('/services', function(req, res, next) {
    res.render('services', {title: 'SERVICES'});
  });

module.exports = router;
