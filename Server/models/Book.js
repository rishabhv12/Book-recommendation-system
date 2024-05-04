const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
        isbn: {
            type: String,
            required: true,
            unique: true
        },
        book_name: {
            type: String,
            required: true,
            unique: true
        },
        yop: {
            type: String,
            required: true
        }, 
        author:{
            type: String,
            required: true
        },
        image_url_s: {
            type: String,
            default: false
        },
        image_url_m: {
            type: String,
            default: false
        },
        image_url_l: {
            type: String,
            default: false
        }
    },
    { timestamps: true}
);

module.exports = mongoose.model('Book', BookSchema);