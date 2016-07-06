const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const schema = new Schema({

  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  name: {
    type: String
  }
});

schema.methods.generateHash = function(pw) {
  return this.password = bcyrpt.hashSync(pw, 8);
};

schema.methods.authenticateHash = function(pw){
  return bcrypt.compareSync(pw, this.password);
};

module.exports = mongoose.model('User', schema);
