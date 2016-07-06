const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});


userSchema.methods.generateHash = function() {

};

const albumModel = mongoose.model('Album', albumSchema);

module.exports = albumModel;
