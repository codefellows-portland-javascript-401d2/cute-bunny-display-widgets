const app = require('./lib/app');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.listen(port, host, err => {
  if (err) return console.error(err);

  console.log(`Magic happens at: http://${host}:${port}`);
});
