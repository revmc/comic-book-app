var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var ComicBook = require('../models/ComicBook.js');

/* GET /comicBooks listing. */
router.get('/', function(req, res, next) {
  ComicBook.find(function(err, comicBooks) {
  	if (err) return next(err);
  	res.json(comicBooks);
  });
});

module.exports = router;
