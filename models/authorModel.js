const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Author must have a name'],
    unique: true,
    trim: true,
  },
  birthYear: Number,
  nationality: String,
  biography: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    default: 'author-default.png',
  },
});

const Author = mongoose.model('Author', authorSchema);
module.exports = Author;
