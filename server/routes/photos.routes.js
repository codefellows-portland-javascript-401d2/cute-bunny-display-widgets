const express = require('express');
const bodyParser = require('body-parser');
const PhotoModel = require('../models/photo.model');

const router = express.Router();
const jsonParser = bodyParser.json();

router
  .get('/', (req, res) => {
    let findObj = {};

    if (req.params.albumId) {
      findObj.albums = {
        $in: [req.params.albumId]
      };
    }

    PhotoModel
      .find(findObj)
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
  });

module.exports = router;
