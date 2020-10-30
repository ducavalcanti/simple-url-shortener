var express = require('express');
var validUrl = require('valid-url');
var Shorturl = require('../models/Shorturl') ;
var router = express.Router();

/* GET shortened URL and redirects to it. */
router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  const idRegex = /^[0-9]+$/;
  if (idRegex.test(id)){
    Shorturl.findOne({short_id: parseInt(id)}).exec((err, result) => {
        if (err) return next(err);        
        res.redirect(result.shortened_url);
    });
  }  
});

/* POST Creates a new shortened URL. */
router.post('/new', (req, res, next) => {  
  let shorturl = req.body.url;
  console.log(shorturl);
  if (!validUrl.isUri(shorturl)) res.json({'error': 'invalid url'});  
  
  Shorturl
    .findOne()
    .sort({date: -1})
    .exec((err, result) => {
      if (err) return next(err)
      let shortId = 1;
      if (result){
        shortId = result.short_id + 1;
      }
      let newShortURL = new Shorturl({'shortened_url': shorturl, 'short_id': shortId});
      newShortURL.save((error, result) => {
        if (error) return next(error);    
        res.json({'original_url': result.shortened_url, "short_url": result.short_id});
      });
    });  
});

module.exports = router;
