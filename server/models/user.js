const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({

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

userSchema.methods.generateHash = function(pw) {
  this.password = bcrypt.hashSync(pw, 8);
  return this.password;
};

userSchema.methods.authenticateHash = function(pw){
  return bcrypt.compareSync(pw, this.password);
};

module.exports = mongoose.model('User', userSchema);
