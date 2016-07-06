const jwt = require('jsonwebtoken');
const appSecret = process.env.APP_SECRET || 'thompsontwins';

module.exports = {
  sign(user){
    console.log(user);
    return new Promise( (resolve, reject) => {

      jwt.sign({
        id: user._id
      }, appSecret, null, (err, token) => {
        if (err) return reject(err);
        resolve(token);
      });
    });
  },

  verify(token){
    return new Promise( (resolve, reject) => {
      jwt.verify(token, appSecret, (err, payload) => {
        if (err) return reject(err);
        resolve(payload);
      });
    });
  }

};
