var mongoose = require('mongoose');

var ComicBookSchema = new mongoose.Schema({
	seriesTitle: String,
	issueNumber: Number,
	writer: String,
	artist: String,
	note: String
});

module.exports = mongoose.model('ComicBook', ComicBookSchema);