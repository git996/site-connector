var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const url = 'https://sg96.herokuapp.com/'
  res.redirect(url);
});
router.get('/about', function(req, res, next) {
  const url = 'https://sg96.herokuapp.com/about'
  res.redirect(url);
});

router.get('/blog',function(req,res,next){
  res.redirect('http://blog.smire.me/');
});

//embedded
router.get('/pres', function (req, res, next){
  res.redirect('https://docs.google.com/presentation/d/1RltVya_M6ts1Jd6beLhMufw9dnMvj02J43qCBxwz4kU/present?includes_info_params=1#slide=id.p1')

});

//engineering

router.get('/arb', function (req, res, next){
  res.redirect('https://docs.google.com/presentation/d/1raCE8L7QAYc41-_q85_heRLg5XEgNNCQG10yiCe_ToA/present?token=AC4w5VjTODr45q3AS4pITjXjPRRzMQQvjA%3A1525780193888&includes_info_params=1#slide=id.p1')

});

module.exports = router;
