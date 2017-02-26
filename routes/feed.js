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
		.end(function(err, response) {
			if (err) {
				res.json({
					confirmation: 'fail',
					error: err.message
				});

				return;
			}

			// convert feed xml to json
			var xml = response.text;
			
			xml2js.parseString(xml, function(err, result) {
				if (err) {
					res.json({
						confirmation: 'fail',
						error: err.message
					});

					return;
				}

				res.send(result);
			});

		});

});

module.exports = router;