const express = require('express');
const app = express();
const photos = require('../routes/photos');
const cors = require('./cors')();

app.use(express.static(__dirname + './../public'));

app.use(cors);

app.use('/api/bunnies', photos);

app.use( (err, req, res, next) => {
  next.beQuietLint = true;
  res.status(err.code || 500).json( {error: err.error || 'Server Error', msg: err.msg});
});

module.exports = app;
