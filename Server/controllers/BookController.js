const Book = require('../models/Book');
const BooksAll = require('../models/Book-all');

const BookController = {

    /* get all books */
    async get_books(req, res) {
        try {
            const book = await BooksAll.find().limit(10);
            res.status(200).json({
                type: "success",
                book
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
       
    },

    /* get single book */
    async get_book(req, res) {
        console.log(req.params.isbn);
        try {
            const book = await Book.findOne({ isbn: req.params.isbn });
            if (!book) {
                return res.status(404).json({
                    type: "error",
                    message: "Book not found"
                });
            }
            res.status(200).json({
                type: "success",
                book
            });
        } catch (err) {
            res.status(500).json({
                type: "error",
                message: "Something went wrong please try again",
                err
            })
        }
    
    },
    async book_search(req, res){
        const partialNameInput = req.query.book_name;
        const regexPattern = new RegExp(partialNameInput, 'i'); 
        const book = await BooksAll.find({book_name: regexPattern}).limit(10)
        res.status(200).json({
            type: "success",
            book
        });
    }
    
};

module.exports = BookController;