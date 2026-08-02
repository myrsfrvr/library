const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('../models/bookModel');
const Author = require('../models/authorModel');

dotenv.config({ path: '../config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful'))
  .catch(err => console.log('DB connection error:', err));

// READ JSON FILE
const authors = JSON.parse(
  fs.readFileSync(`${__dirname}/authors.json`, 'utf-8')
);

const books = JSON.parse(
  fs.readFileSync(`${__dirname}/books.json`, 'utf-8')
);

// IMPORT DATA INTO DATABASE
const importData = async () => {
  try {
    console.log('Importing authors...');

    const createdAuthors = await Author.insertMany(authors);

    const authorMap = {};
    createdAuthors.forEach(a => {
      authorMap[a.name.toLowerCase()] = a._id;
    });

    console.log('Importing books...');

    const booksToInsert = books.map(book => {
      const authorName = book.author?.toLowerCase();
      const authorId = authorMap[authorName];

      return {
        title: book.title,
        author: authorId ? [authorId] : [],
        genre: book.genre,
        publisher: book.publisher,
        yearPublished: book.yearPublished,
        language: book.language,
        status: book.status,
        summary: book.summary,
        imageCover: book.imageCover,
        loanDates: book.loanDates || [],
      };
    });

    await Book.insertMany(booksToInsert);

    console.log('Data successfully loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Book.deleteMany();
    await Author.deleteMany();
    console.log('Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

// To run this code:
// cd dev-data
// To import:
// node import-dev-data.js --import
// To delete:
// node import-dev-data.js --delete
