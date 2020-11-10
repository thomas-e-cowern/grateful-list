const mongoose = require('mongoose')

const gratefulItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  }
});

const GratefulItem = mongoose.model('Grateful-Item', gratefulItemSchema);

module.exports = GratefulItem;