var express = require('express');
var router = express.Router();
var knex = require('../db/knex')

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
    title: 'Eric Von Holtschneider' });
});

/* Contact GET */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
    pageTitle: 'Von Arden Productions',
    title: 'Contact'});
});
/* Post Contact Submit Route */
router.get('/thankyou', function(req, res, next) {
  res.render('thankyou', {
    pageTitle: 'Von Arden Productions',
    title: 'Contact'});
})
/* Portfolio GET */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', {
    pageTitle: 'Von Arden Productions',
    title: 'Portfolio'});
});
/* CONTACT Post */
router.post('//formspree.io/mrtimpender@gmail.com', function(req, res, next) {
    var date = new Date;
    knex.raw(`INSERT INTO contact values(default, '${req.body.name}', '${req.body._replyto}', '${req.body.phone}', '${req.body.eventDate}', '${req.body.eventLocation}', '${req.body.findOut}', '${req.body.eventDetails}', '${date}')`).then(function(){
      res.render('thankyou', {
        pageTitle: 'Von Arden Productions',
        title: 'Contact'
      })
    })
});



module.exports = router;
