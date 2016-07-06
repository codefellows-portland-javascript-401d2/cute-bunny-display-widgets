const express = require( 'express' );
const app = express();
const cors = require('./lib/cors')('*');
const albums = require('./routes/albums.route.js');
const images = require('./routes/images.route.js');
const db = require('./lib/db-config');

db.connect('mongodb://localhost/image_gallery'); // Connect to DB

app.use( express.static( __dirname + '/public' ) );
app.use(cors);

app.use('/api/images', images);
app.use('/api/albums', albums);

module.exports = app;