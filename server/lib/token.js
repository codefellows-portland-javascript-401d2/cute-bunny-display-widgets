const jwt = require('jsonwebtoken');

const token = {};

token.sign = user => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      {
        id: user._id
      },
      process.env.JWT_SECRET,
      null,
      (err, token) => {
        if (err) return reject(err);

        resolve(token);
      }
    );
  });
};

token.verify = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, payload) => {
        if (err) return reject(err);

        resolve(payload);
      }
    );
  });
};

module.exports = token;
