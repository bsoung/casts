var express = require('express');
var router = express.Router();
var superagent = require('superagent');
var xml2js = require('xml2js');

router.get('/', function(req, res, next) {
	var term = req.params.term;

	// request itunes search api
	var url = req.query.url;

	if (url == null) {
		res.json({
			confirmation: 'fail',
			message: 'Missing feed url'
		});

		return;
	}

	superagent
		.get(url)
		.query(null)
		.buffer() // xml
		.end(function(err, response) {
			if (err) {
				res.json({
					confirmation: 'fail',
					error: err.message
				});

				return;
			}

			var xml = response.text;

			// convert feed xml to json
			xml2js.parseString(xml, function(err, result) {
				if (err) {
					res.json({
						confirmation: 'fail',
						error: err.message
					});

					console.log("ERROR HERE?? IN PARSE STRING")

					return;
				}

				var rss = result.rss;
				var channel = rss.channel;

				if (channel.length > 0) {
					channel = channel[0];
				}

				res.json({
					confirmation: 'success',
					podcast: channel
				});
			});

		});

});

module.exports = router;
