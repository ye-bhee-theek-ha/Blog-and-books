const Book = require('../Models/BookModels');
const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');
const upload = require('../config/multer');

// Create a new book with file upload
const createBook = async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
  
      const { title, description, author, tags, featuredImage } = req.body;
  
      const newBook = new Book({
        title,
        author,
        description,
        tags: JSON.parse(tags),
        featuredImage,
        file: {
          filename: req.file.filename,
          fileId: req.file.id
        },
      });
  
      await newBook.save();
      res.status(201).json(newBook);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};



// Get all books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('author', 'name').populate('tags', 'name');
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single book by ID
const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('author', 'name').populate('tags', 'name');
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a book by ID
const updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        // Delete file from GridFS
        const bucket = new GridFSBucket(mongoose.connection.db, {
            bucketName: 'books' // Your MongoDB collection name
        });
        await bucket.delete(new mongoose.Types.ObjectId(book.file.fileId));
        
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
};
