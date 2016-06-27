const express = require('express');
const middlewares = require('../lib/middlewares');
const bunniesRoutes = require('../routes/bunnies.routes');

const app = express();

app.use(express.static(`${__dirname}/../public`));
app.use(middlewares.crossDomainRequests);
app.use('/api/bunnies', bunniesRoutes);

module.exports = app;
