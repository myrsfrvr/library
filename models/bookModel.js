const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book must have a title'],
    trim: true,
  },
  author: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Author',
      required: true,
    },
  ],
  genre: {
    type: [String],
    required: [true, 'Book must have a genre'],
  },
  publisher: {
    type: String,
  },
  yearPublished: {
    type: Number,
    required: [true, 'Book must have a publicaion year'],
  },
  language: {
    type: String,
  },
  status: {
    type: String,
    required: [true, 'Book must have a status'],
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'Book must have a summary'],
  },
  imageCover: {
    type: String,
    default: 'book-default-cover.png',
  },
  loanDates: [Date],
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

bookSchema.index({ title: 'text', genre: 'text' });

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
