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
router.route('/blogs')
    .post(protect, authorizeAsAuthor, createBlog)
    .get(getAllBlogs);

router.route('/blogs/:id')
    .get(getBlogById)
    .put(protect, authorizeAsAuthor, updateBlog)
    .delete(protect, authorizeAsAuthor, deleteBlog);


// Book Routes
router.route('/books')
    .post(protect, authorizeAsAuthor, createBook)
    .get(getAllBooks); 

router.route('/books/:id')
    .get(getBookById)
    .put(protect, authorizeAsAuthor, updateBook)  
    .delete(protect, authorizeAsAuthor, deleteBook);


// Comment Routes
router.route('/comments')
    .post(protect, createComment);

router.route('/comments/:blogId')
    .get(getCommentsForPost);

router.route('/comments/:commentId')
    .put(protect, updateComment)
    .delete(protect, deleteComment);


// Tag Routes
router.route('/tags')
    .post(protect, createTag)
    .get(getTags);


// User Routes
router.route('/users/register')
    .post(registerUser);

router.route('/users/login')
    .post(loginUser);

module.exports = router;
