const tokenCheck = require('./token-check');

module.exports = function authValidate(req, res, next) {
  if (req.method === 'OPTIONS') return next();

  const authHead = req.headers.authorization;
  const token = authHead ? authHead.replace('Bearer ', '') : '';

  if (!token) return res.status(403).json({status: 'error', content: 'No Token Provided'});

  tokenCheck.verify(token)
    .then(payload => {
      req.user = payload;
      next();
    })
    .catch(() => {
      res.status(403).json({status: 'error', content: 'Invalid Token'});
    });
};