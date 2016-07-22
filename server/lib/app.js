const express = require('express');
const middlewares = require('./middlewares');
const authRoutes = require('../routes/auth.routes');
const albumsRoutes = require('../routes/albums.routes');
const photosRoutes = require('../routes/photos.routes');

const app = express();

app.use(express.static(`${__dirname}/../public`));
app.use(middlewares.cors);
app.use('/api/auth', authRoutes);
app.use('/api/albums', middlewares.validateToken, albumsRoutes);
app.use('/api/photos', middlewares.validateToken, photosRoutes);
app.use(middlewares.errorHandler);

module.exports = app;
