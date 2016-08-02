const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: 'http://static.vecteezy.com/system/resources/previews/000/100/978/original/godzilla-vector.jpg'
  },
  description: {
    type: String
  },
  album: {
    type: Schema.Types.ObjectId,
    ref: 'Album',
    required: true
  }
});

const imageModel = mongoose.model('Image', imageSchema);

module.exports = imageModel;
