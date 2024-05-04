const express = require('express');
const router = express.Router();

const { BookController } = require('../controllers');

router.get('/books', BookController.get_books);
router.get('/book/:isbn', BookController.get_book);
router.get('/books/search', BookController.book_search);

module.exports = router;