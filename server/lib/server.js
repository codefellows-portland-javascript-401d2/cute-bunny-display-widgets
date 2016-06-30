const express = require('express');
const app = express();
const cors = require('./cors')();
const photos = require('../routes/photos');
const albums = require('../routes/albums');

app.use(express.static(__dirname + './../public'));

app.use(cors);

app.use('/api/photos', photos);
app.use('/api/albums', albums);

app.use( (err, req, res, next) => {
  next.beQuietLint = true;
  res.status(err.code || 500).json( {error: err.error || 'Server Error', msg: err.msg});
});

module.exports = app;
