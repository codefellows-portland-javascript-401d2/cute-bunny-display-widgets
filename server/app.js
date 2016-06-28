const express = require( 'express' );
const app = express();
const bodyParser = require('body-parser').json();
const monsters = require('./store/monsters');
const Monster = require('./models/monster');
const db = require('./database');

db.connect('mongodb://localhost/monsters'); // Connect to DB

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
  Monster
    .find()
    .then(monsters => {
      res.status(200);
      res.send({status: 'success', content: monsters});
    })
    .catch(err => {
      res.send({status: 'error', content: err});
    });
});

app.post('/api/monsters', bodyParser, (req, res) => {
  new Monster(req.body)
    .save()
    .then(monster => {
      res.status(200);
      res.send({status: 'success', content: monster})
    })
    .catch(err => {
      res.status(500);
      res.send({status: 'error', content: err});
    });
});



module.exports = app;