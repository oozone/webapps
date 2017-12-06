var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let jwt = require('express-jwt');

/* Custom */
let Rating = mongoose.model('Rating');
let Contact = mongoose.model('Contact');

let auth = jwt({secret: process.env.RECIPE_BACKEND_SECRET, userProperty: 'payload'});


/* RATINGS */
router.get('/api/ratings', auth, function(req, res, next){
  Rating.find(function(err, ratings){
    if (err) { return next(err); }
    res.json(ratings);
  });
});

router.get('/api/ratings/countedperrating', auth, function(req, res, next){
  Rating.aggregate(
      { $group: { _id: "$ratingNumber", value: {$sum: 1}}},
      { $sort : { _id : 1 }},
    function(err, data){
      if(err) { return next(err);}
      res.json(data);
    }

  )
});

router.post('/api/ratings/', auth, function (req, res, next) {
  let rating = new Rating(req.body);
  rating.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
});  

router.param('rating', function(req, res, next, id) {
  let query = Rating.findById(id);
  query.exec(function (err, rating){
    if (err) { return next(err); }
    if (!rating) { return next(new Error('not found ' + id)); }
    req.rating= rating;
    return next();
  });
});  

router.get('/api/rating/:rating', auth, function(req, res) {
  res.json(req.rating);
});

router.delete('/api/rating/:rating', auth, function(req, res, next) {
  req.rating.remove(function(err) {
    if (err) { return next(err); }   
    res.json(req.rating);
   });
})

/* CONTACT */
router.get('/api/contacts', function(req, res, next){
  Contact.find(function(err, contacts){
    if (err) { return next(err); }
    res.json(contacts);
  });
});

router.post('/api/contacts', function (req, res, next) {
  let contact = new Contact(req.body);
  contact.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
});    

module.exports = router;
