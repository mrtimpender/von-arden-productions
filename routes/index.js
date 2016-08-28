var express = require('express');
var router = express.Router();

/* HOME GET */
router.get('/', function(req, res, next) {
  res.render('index', {
    pageTitle: 'Von Arden Productions',
    title: "Let's Capture Something Special" });
});

/* ABOUT GET */
router.get('/about', function(req, res, next) {
  res.render('about', {
    pageTitle: 'Von Arden Productions',
    title: 'Eric Von Holtscneider' });
});

/* Contact GET */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    pageTitle: 'Von Arden Productions',
    title: 'Contact'});
})
/* Portfolio GET */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', {
    pageTitle: 'Von Arden Productions',
    title: 'Portfolio'});
});
/* SERVICES GET */
router.get('/services', function(req, res, next) {
    res.render('services', {
      pageTitle: 'Von Arden Productions',
      title: 'Services'});
  });
/* Pricing Get */
router.get('/pricing', function(req, res, next){
  res.render('pricing', {
    pageTitle: 'Von Arden Productions',
    title: 'Pricing'})
});
/* CONTACT Post */
router.post('/contact', function(req, res, next) {
    res.send(req.body);
});

// Name
// email
// Phone Number
// Event Date
// Event Location
// Discovery
// Details



module.exports = router;
