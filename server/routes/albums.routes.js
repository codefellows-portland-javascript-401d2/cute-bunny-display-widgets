const express = require('express');
const bodyParser = require('body-parser');
const AlbumModel = require('../models/album.model');
const PhotoModel = require('../models/photo.model');

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
        PhotoModel
          .find({
            albums: {
              $in: [req.params.albumId]
            }
          })
          .then(photos => {
            res
              .json({
                status: 'success',
                result: {
                  album,
                  photos
                }
              });
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
  .put('/:albumId', jsonParser, (req, res) => {
    AlbumModel
      .update({
        _id: req.params.albumId
      }, {
        $set: {
          title: req.body.title
        }
      })
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
  .delete('/:albumId', (req, res) => {
    AlbumModel
      .findByIdAndRemove(req.params.albumId)
      .then(album => {
        PhotoModel
          .remove({
            albums: {
              $in: [req.params.albumId]
            }
          })
          .then(photos => {
            res
              .json({
                status: 'success',
                result: {
                  album,
                  photos
                }
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
