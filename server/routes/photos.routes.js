const express = require('express');
const bodyParser = require('body-parser');
const PhotoModel = require('../models/photo.model');

const router = express.Router();
const jsonParser = bodyParser.json();

router
  .get('/', (req, res) => {
    PhotoModel
      .find()
      .then(photos => {
        res
          .json({
            status: 'success',
            result: photos
          });
      })
      .catch(err => {
        res
          .json({
            status: 'error',
            result: 'Server error',
            error: err
          });
      });
  })
  .post('/', jsonParser, (req, res) => {
    new PhotoModel(req.body)
      .save()
      .then(photo => {
        res
          .json({
            status: 'success',
            result: photo
          });
      })
      .catch(err => {
        res
          .json({
            status: 'error',
            result: 'Serve error',
            error: err
          });
      });
  })
  .get('/:photoId', (req, res) => {
    PhotoModel
      .findById(req.params.photoId)
      .then(images => {
        res
          .json({
            status: 'success',
            result: images
          });
      })
      .catch(err => {
        res
          .json({
            status: 'error',
            result: 'Server error',
            error: err
          });
      });
  })
  .put('/:photoId', jsonParser, (req, res) => {
    PhotoModel
      .update({
        _id: req.params.photoId
      }, {
        $set: {
          title: req.body.title,
          description: req.body.description,
          photoLink: req.body.photoLink,
          photoThumbWidth: req.body.photoThumbWidth,
          photoThumbHeight: req.body.photoThumbHeight,
          photoFullWidth: req.body.photoFullWidth,
          photoFullHeight: req.body.photoFullHeight
        }
      })
      .then(photo => {
        res
          .json({
            status: 'success',
            result: photo
          });
      })
      .catch(err => {
        res
          .json({
            status: 'error',
            result: 'Server error',
            error: err
          });
      });
  })
  .delete('/:photoId', (req, res) => {
    PhotoModel
      .findByIdAndRemove(req.params.photoId)
      .then(photo => {
        res
          .json({
            status: 'success',
            result: photo
          });
      })
      .catch(err => {
        res
          .json({
            status: 'error',
            result: 'Server error',
            error: err
          });
      });
  });

module.exports = router;