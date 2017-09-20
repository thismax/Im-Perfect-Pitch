const spotify = require('../api/spotify');
const Songs = require('../db/index').Songs

module.exports.search = (req, res) => {
	const q = req.body.q;
	spotify.getToken()
		.then((token) => {
			spotify.search(q, token)
			.then(results => {
				res.status(201).send(results);
			})
			.catch(err => {
				res.status(404).send(err);
			});
		})
};

module.exports.fetchLikes = (req, res) => {
	Songs.findAll()
	.then((data) => {
		res.status(200).send(data);
	})
	.catch((err) => {
		console.log('hmmmmmm')
		res.status(404).send(err);
	})
};

module.exports.addLike = (req, res) => {
	Songs.create({
		name: req.body.data.name,
		album: req.body.data.album,
		artist: req.body.data.artist,
		uri: req.body.data.uri,
	}).then((data) => {
		res.status(201).send(data);
	})
	.catch((err) => {
		console.log('hmmmmmm')
		res.status(404).send(err);
	})
};

module.exports.removeLike = (req, res) => {
	let id = req.body.id;
	Songs.destroy(
		{where: {id}})
	.then((success) => {
		res.send();
	})
	.catch((err)=> {
		console.log(err);
	})
}