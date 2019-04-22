const mongoose = require('mongoose');

const { Schema } = mongoose;

const memoSchema = new Schema({
  memoTitle: {
    type: String,
    required: true,
  },
  memoText: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('memos', memoSchema);
