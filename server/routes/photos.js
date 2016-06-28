const router = require('express').Router();
const Photo = require('../models/photo');
const jsonBody = require( 'body-parser' ).json();

module.exports = router

.get('/', (req, res, next)=> {
  Photo.find()
  .then( data => {
    res.send(data);
  })
  .catch( err => {
    next({code: 505, error: 'Database failure', msg: err});
  });
})

.get('/:id', (req, res, next) => {
  Photo.find({_id: req.params.id})
  .then(data => {
    res.send(data);
  })
  .catch( err => {
    next({code: 505, error: 'Database failure', msg: err});
  });
})

.post('/', jsonBody, (req, res, next) => {
  new Photo(req.body).save()
  .then( data => {
    res.send(data);
  })
  .catch( err => {
    next({code: 505, error: 'Database failure', msg: err});
  });
})

.delete('/:id', (req, res, next) => {
  Photo.findByIdAndRemove(req.params.id)
  .then( data => {
    res.send(data);
  })
  .catch( err => {
    next({code: 505, error: 'Database failure', msg: err});
  });

});
