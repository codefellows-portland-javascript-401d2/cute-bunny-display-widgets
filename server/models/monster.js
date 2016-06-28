const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: 'https://cdn.pastemagazine.com/www/blogs/lists/21-Godzilla-Kaiju-Gorosaurus.jpg'
  },
  description: {
    type: String
  }
});

const monsterModel = mongoose.model('Monster', monsterSchema);

module.exports = monsterModel;
