const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({

  title:{
    type: String
  },
  description:{
    type: String
  },
  url:{
    type: String,
    required: true
  },
  album:{
    type: Schema.Types.ObjectId,
    ref: 'Album',
    required: true
  }

});

module.exports = mongoose.model('Photo', schema);
