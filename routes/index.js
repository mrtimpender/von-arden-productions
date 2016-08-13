var express = require('express');
var router = express.Router();

/* HOME GET */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Let's Capture Something Special" });
});

/* ABOUT GET */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Eric Von Holtscneider' });
});

/* Contact GET */
router.get('/contact', function(req, res, next) {
  res.render('contact', {title: 'Contact'});
})
/* Portfolio GET */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', {title: 'Portfolio'});
});
/* SERVICES GET */
router.get('/services', function(req, res, next) {
    res.render('services', {title: 'Services'});
  });
  /* CONTACT GET */
  router.post('/contact', function(req, res, next) {
      res.send(req.body);
    });

module.exports = router;
