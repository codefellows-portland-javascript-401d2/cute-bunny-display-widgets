const express = require( 'express' );
const app = express();
const auth = require('./routes/auth.route.js');
const albums = require('./routes/albums.route.js');
const images = require('./routes/images.route.js');
const cors = require('./lib/cors')('*');
const authValidate = require('./lib/auth-validate');

app.use( express.static( __dirname + '/public' ) );
app.use(cors);

app.use('/api/auth', auth);
app.use('/api/images', authValidate, images);
app.use('/api/albums', albums);

module.exports = app;