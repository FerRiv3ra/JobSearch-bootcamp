const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
  category: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
});

module.exports = model('Category', CategorySchema);
