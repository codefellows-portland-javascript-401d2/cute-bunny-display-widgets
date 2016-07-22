const token = require('./token');

const middlewares = {};

middlewares.cors = (req, res, next) => {
  res
    .header({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    });

  next();
};

middlewares.errorHandler = (req, res) => {
  res
    .status(404)
    .json({
      status: 'error',
      results: 'Page not found.'
    });
};

// middlewares.jsonHandler = (req, res, next) => {
//   if (req.is('application/json') || req.headers['content-type'] == 'application/json') {
//     next();
//   } else {
//     res
//       .status(406)
//       .json({
//         status: 'error',
//         result: 'Content-Type must be set to application/json in the headers.'
//       });
//   }
// };

middlewares.validateToken = (req, res, next) => {
  if (req.method === 'OPTIONS') return next();

  let authorization = req.headers.authorization;
  let reqToken = authorization ? authorization.replace('Bearer ', '') : '';

  if (!reqToken) {
    return res
      .status(403)
      .json({
        status: 'error',
        result: 'No token provided'
      });
  }

  token
    .verify(reqToken)
    .then(payload => {
      req.user = payload;
      next();
    })
    .catch(err => {
      res
        .status(403)
        .json({
          status: 'error',
          result: 'Invalid token',
          error: err
        });
    });
};

module.exports = middlewares;
