const router = require('express').Router();
const jsonParser = require('body-parser').json();
const Image = require('../models/image');

router.get('/', (req, res) => {
  console.log('get to images');
  Image
    .find()
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
  new Image(req.body)
    .save()
    .then(image => {
      res.status(200);
      res.send({status: 'success', content: image});
    })
    .catch(err => {
      res.status(500);
      res.send({status: 'error', content: err});
    });
});

router.delete('/:id', (req, res) => {
  Image
    .findByIdAndRemove(req.params.id)
    .then(image => {
      res.status(200);
      res.send({status: 'success', content: image});
    })
    .catch(err => {
      res.status(500);
      res.send({status: 'error', content: err});
    });
});

module.exports = router;