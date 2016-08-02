const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  albums: [],
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    required: true
  },
  imageThumbWidth: {
    type: Number,
    required: true
  },
  imageThumbHeight: {
    type: Number,
    required: true
  },
  imageFullWidth: {
    type: Number,
    required: true
  },
  imageFullHeight: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const imageModel = mongoose.model('Image', imageSchema);

module.exports = imageModel;
