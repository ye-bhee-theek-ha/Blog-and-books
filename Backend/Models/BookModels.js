const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    publicationDate: {
        type: Date,
        default: Date.now,
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
    }],
    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'public',
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment', // Assuming you have a Comment model
    }],
    featuredImage: {
        type: String,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    file: {
        filename: String,
        fileId: mongoose.Schema.Types.ObjectId,
    },
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
