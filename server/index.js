const server = require('./lib/server');
require('./lib/config-mongoose');
console.log('index.js fires');
server.listen(process.env.PORT);
