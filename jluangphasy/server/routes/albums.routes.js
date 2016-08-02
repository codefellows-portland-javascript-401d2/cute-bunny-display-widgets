const express = require('express');
const bodyParser = require('body-parser');
const AlbumModel = require('../models/album.model');
const ImageModel = require('../models/image.model');

const router = express.Router();
const jsonParser = bodyParser.json();

router
  .get('/', (req, res) => {
    AlbumModel
      .find()
      .then(albums => {
        res
          .json({
            status: 'success',
            result: albums
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
    new AlbumModel(req.body)
      .save()
      .then(album => {
        res
          .json({
            status: 'success',
            result: album
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
  .get('/:albumId', (req, res) => {
    AlbumModel
      .findById(req.params.albumId)
      .then(album => {
        res
          .json({
            status: 'success',
            result: album
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
  .get('/:albumId/images', (req, res) => {
    ImageModel
      .find({
        albums: {
          $in: [req.params.albumId]
        }
      })
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
  .post('/:albumId/images', jsonParser, (req, res) => {
    req.body.albums = [req.params.albumId];

    new ImageModel(req.body)
      .save()
      .then(image => {
        res
          .json({
            status: 'success',
            result: image
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
  .get('/:albumId/images/:imageId', (req, res) => {
    ImageModel
      .find({
        _id: req.params.imageId,
        albums: {
          $in: [req.params.albumId]
        }
      })
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
