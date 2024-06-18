const express = require('express');

const { 
    createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog 
} = require('../Controllers/BlogControllers');

const { 
    createComment, getCommentsForPost, updateComment, deleteComment 
} = require('../Controllers/CommentControllers');

const { 
    createTag, getTags, updateTag, deleteTag 
} = require('../Controllers/TagControllers');

const { 
    registerUser, loginUser 
} = require('../Controllers/UserControllers');

const {
    createBook, getAllBooks, getBookById, updateBook, deleteBook
} = require('../Controllers/BookControllers');


const { protect, authorizeAsAuthor } = require('../middlewares/authMiddleware');

const router = express.Router();

// Blog Routes
router.post('/api/blogs', protect, authorizeAsAuthor, createBlog);
router.get('/api/blogs', getAllBlogs);
router.get('/api/blogs/:id', getBlogById);
router.put('/api/blogs/:id', protect, authorizeAsAuthor, updateBlog);
router.delete('/api/blogs/:id', protect, authorizeAsAuthor, deleteBlog);

// Book Routes
router.post('/api/book', protect, authorizeAsAuthor, createBook);
router.get('/api/book', getAllBlogs);
router.get('/api/book/:id', getBlogById);
router.put('/api/book/:id', protect, authorizeAsAuthor, updateBlog);
router.delete('/api/book/:id', protect, authorizeAsAuthor, deleteBlog);

// Comment Routes
router.post('/api/comments', protect, createComment);
router.get('/api/comments/:blogId', getCommentsForPost);
router.put('/api/comments/:commentId', protect, updateComment);
router.delete('/api/comments/:commentId', protect, deleteComment);

// Tag Routes
router.post('/api/tags', protect, createTag);
router.get('/api/tags', getTags);

// User Routes
router.post('/api/users/register', registerUser);
router.post('/api/users/login', loginUser);

module.exports = router;
