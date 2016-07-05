const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrpyt = require('bcrpytjs');

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  }
});


userSchema.methods.generateHash = function() {

};

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
