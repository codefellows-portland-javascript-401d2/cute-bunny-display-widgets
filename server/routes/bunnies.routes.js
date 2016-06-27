const express = require('express');
const bodyParser = require('body-parser');
const bunniesData = require('../data/bunnies.data.json');

const router = express.Router();
const jsonParser = bodyParser.json();

router
  .use(jsonParser)
  .get('/', (req, res) => {
    res.json(bunniesData);
  });

module.exports = router;
