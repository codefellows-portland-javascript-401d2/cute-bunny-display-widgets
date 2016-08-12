const express = require('express');
const app = express();
const cors = require('./cors')('*');
const photos = require('../routes/photos');
const albums = require('../routes/albums');
const auth = require('../routes/auth');
const ensureAuth = require('./ensureAuth');

app.use(express.static(__dirname + './../public'));

app.use(cors);

app.use('/api', auth);
app.use('/api/albums', albums);
app.use('/api/photos', ensureAuth, photos);


app.use( (err, req, res, next) => {  //eslint-disable-line
  res.status(err.code || 500).json( {error: err.error || 'Server Error', msg: err.msg});
});

module.exports = app;
