const express = require( 'express' );
const app = express();
const monsters = require('./store/monsters');

app.use( express.static( __dirname + '/public' ) );

//  Allow CORS
app.use( ( req, res, next ) => {
  const url = '*';
  res.header( 'Access-Control-Allow-Origin', url );
  res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
  res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
  next();
});

app.get('/api/monsters', (req, res) => {
  if (!monsters) res.status(500).send({status: 'error', content: 'Server error'});
  else {
    res.status(200);
    res.send({status: 'success', content: monsters});
  }
});



module.exports = app;