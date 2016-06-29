const app = require('./lib/app');
const database = require('./lib/database');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const mongodb_uri = process.env.MONGODB_URI || 'mongodb://localhost/jluangphasy';

app.listen(port, host, err => {
  if (err) return console.error(err);

  console.log(`Magic happens at: http://${host}:${port}`);

  database.connect(mongodb_uri);
});
