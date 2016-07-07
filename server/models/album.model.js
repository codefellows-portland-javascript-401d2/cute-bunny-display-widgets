const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const albumModel = mongoose.model('Album', albumSchema);

module.exports = albumModel;
