const router = require('express').Router();
const jsonParser = require('body-parser').json();
const Album = require('../models/album');
const Image = require('../models/image');

router.get('/', (req, res) => {
  Album
    .find()
    .then((albums) => {
      res.status(200);
      res.send({status: 'success', content: albums});
    })
    .catch(err => {
      res.send({status: 'error', content: err});
    });
});

router.get('/:albumId', (req, res) => {
  Image
    .find({album: req.params.albumId})
    .populate('album')
    .then(images => {
      res.status(200);
      res.send({status: 'success', content: images});
    })
    .catch(err => {
      res.send({status: 'error', content: err});
    });
});

router.post('/', jsonParser, (req, res) => {
  new Album(req.body)
    .save()
    .then(album => {
      res.status(200);
      res.send({status: 'success', content: album});
    })
    .catch(err => {
      res.status(500);
      res.send({status: 'error', content: err});
    });
});

router.delete('/:id', (req, res) => {
  Album
    .findByIdAndRemove(req.params.id)
    .then(album => {
      Image
        .remove({album: album._id})
        .then(() => {
          res.status(200);
          res.send({status: 'success', content: 'removed all images'});
        });
    })
    .catch(err => {
      res.status(500);
      res.send({status: 'error', content: err});
    });
});

module.exports = router;