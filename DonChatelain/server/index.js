const app = require('./app');
const db = require('./lib/db-config');
const port = 3000;

db.connect('mongodb://localhost/image_gallery');

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});