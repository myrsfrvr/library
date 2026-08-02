const express = require('express');
const bookController = require('../controllers/bookController');
const authorController = require('../controllers/authorController');

const router = express.Router();

router.get('/search', bookController.searchBooks);

router
  .route('/')
  .get(bookController.getAllBooks)
  .post(authorController.checkAuthor, bookController.createBook);

router
  .route('/:id')
  .get(bookController.getBook)
  .patch(authorController.checkAuthor, bookController.updateBook)
  .delete(bookController.deleteBook);

module.exports = router;
