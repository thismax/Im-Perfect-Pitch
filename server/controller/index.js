const spotify = require('../api/spotify');

module.exports.search = (req, res) => {
	const query = req.body.query;
  //need to use spotify fetch method here
	.then(song => {
		res.send(song.tracks.items[0]);
	})
	.catch(err => {
		res.send(err);
		console.error(err);
	});
};