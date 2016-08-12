const server = require('./lib/server');
require('./lib/config-mongoose');

server.listen(process.env.PORT);
