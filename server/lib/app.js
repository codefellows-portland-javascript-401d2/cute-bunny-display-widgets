const express = require('express');
const middlewares = require('../lib/middlewares');
const albumsRoutes = require('../routes/albums.routes');
const photosRoutes = require('../routes/photos.routes');

const app = express();

app.use(express.static(`${__dirname}/../public`));
app.use(middlewares.cors);
app.use('/api/albums', albumsRoutes);
app.use('/api/photos', photosRoutes);

module.exports = app;
