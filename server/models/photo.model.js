const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photoLink: {
    type: String,
    required: true
  },
  photoThumbWidth: {
    type: Number,
    required: true
  },
  photoThumbHeight: {
    type: Number,
    required: true
  },
  photoFullWidth: {
    type: Number,
    required: true
  },
  photoFullHeight: {
    type: Number,
    required: true
  },
  albums: []
}, {
  timestamps: true
});

const photoModel = mongoose.model('Photo', photoSchema);

module.exports = photoModel;
