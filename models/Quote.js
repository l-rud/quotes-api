const { Schema, model } = require('../config/db-connection');

const quoteSchema = Schema({
  content: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = model('Quote', quoteSchema);
