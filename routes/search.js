var express = require('express');
var router = express.Router();
var superagent = require('superagent');

router.get('/:term', function(req, res, next) {
	var term = req.params.term;

	// request itunes search api
	var url = 'http://itunes.apple.com/search';

	superagent
		.get(url)
		.query(
			{
				media: 'podcast', 
				term: term
			}
		)
		.set('Accept', 'application/json')
		.end(function(err, response) {
			if (err) {
				res.json({
					confirmation: 'fail',
					error: err.message
				});

				return;
			}

			var data = JSON.parse(response.text);

			res.json({
				confirmation: 'success',
				response: data.results
			});
		});

});

module.exports = router;
