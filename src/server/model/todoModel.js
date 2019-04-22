const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
  todoDescription: {
    type: String,
    required: true,
  },
  todoResponsible: {
    type: String,
    required: true,
  },
  todoPriority: {
    type: String,
    required: true,
  },
  todoCompleted: {
    type: Boolean,
  },
});

module.exports = mongoose.model('todos', todoSchema);
