const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

const albumModel = mongoose.model('Album', albumSchema);

module.exports = albumModel;
