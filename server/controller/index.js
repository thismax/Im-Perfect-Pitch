const spotify = require('../api/spotify');
const Promise = require('bluebird');

module.exports.search = (req, res) => {
	const q = req.body.q;
	spotify.getToken()
		.then((token) => {
			spotify.search(q, token)
		})
		.then(playlist => {
			res.status(201).send(playlist);
		})
		.catch(err => {
			res.status(404).send(err);
		});
};