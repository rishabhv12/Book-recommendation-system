const mongoose = require('mongoose');

const Shelfschema = new mongoose.Schema({
        userId: {
            type: String,
            required: true,
        },
        books: [
            {
                isbnID: {
                    type: String
                }
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model('Shelf', Shelfschema);