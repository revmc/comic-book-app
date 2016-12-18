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

router.post('/', function(req, res, next) {
	ComicBook.create(req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

router.put('/:id', function(req, res, next) {
	ComicBook.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

router.delete('/:id', function(req, res, next) {
	ComicBook.findByIdAndRemove(req.params.id, null, function(err, post) {
		if (err) return next(err);
		res.json(post);
	});
});

module.exports = router;
