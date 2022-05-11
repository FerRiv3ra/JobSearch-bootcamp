const { Schema, model } = require('mongoose');

const JobSchema = new Schema({
  active: {
    type: Boolean,
    default: true,
  },
  category: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  remote: {
    type: Boolean,
    default: false,
  },
  tags: {
    type: Array,
    default: [],
  },
  title: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = model('Job', JobSchema);
