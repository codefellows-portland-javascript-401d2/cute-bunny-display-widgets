const express = require( 'express' );
const app = express();
const bodyParser = require('body-parser').json();
const Image = require('./models/image');
const Album = require('./models/album');
const db = require('./database');

db.connect('mongodb://localhost/image_gallery'); // Connect to DB

app.use( express.static( __dirname + '/public' ) );

//  Allow CORS
app.use( ( req, res, next ) => {
  const url = '*';
  res.header( 'Access-Control-Allow-Origin', url );
  res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
  next();
});

// =========================================== Images
app.get('/api/images', (req, res) => {
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

app.post('/api/images', bodyParser, (req, res) => {
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

app.delete('/api/images/:id', (req, res) => {
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

// =========================================== Albums
app.get('/api/albums', (req, res) => {
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

app.get('/api/albums/:albumId', (req, res) => {
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

app.post('/api/albums', bodyParser, (req, res) => {
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

app.delete('/api/albums/:id', (req, res) => {
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

module.exports = app;