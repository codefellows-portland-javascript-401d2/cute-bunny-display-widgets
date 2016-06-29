const app = require('./lib/app');
const database = require('./lib/database');

app.listen(process.env.PORT, process.env.HOST, err => {
  if (err) return console.error(err);

  console.log(`Magic happens at: http://${process.env.HOST}:${process.env.PORT}`);

  database.connect(mongodb_uri);
});
