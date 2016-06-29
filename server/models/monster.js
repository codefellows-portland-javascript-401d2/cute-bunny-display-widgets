const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
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
  }
});

const monsterModel = mongoose.model('Monster', monsterSchema);

module.exports = monsterModel;
