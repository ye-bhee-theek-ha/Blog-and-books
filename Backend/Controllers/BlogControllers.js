const Blog = require('../Models/BlogModels');
const Tag = require('../Models/TagModels');
const Comment = require('../Models/CommentModels');
const User = require("../Models/UserModels")

// Create a new blog post
const createBlog = async (req, res) => {
    try {
        const { title, authorName, tags, content, publicationDate, visibility, status, image } = req.body;
        
        const parsedContent = JSON.parse(content);

        const extractText = (nodes) => {
            let text = '';
            nodes.forEach(node => {
                if (node.children) {
                    text += extractText(node.children);
                } else if (node.text) {
                    text += node.text;
                }
            });
            return text;
        }; 

        const contentText = extractText(parsedContent);

        const wordCount = contentText.split(/\s+/).length;

        const readingTime = Math.ceil(wordCount / 200);

        const newBlog = new Blog({
            title,
            authorName,
            author: req.user._id,
            tags: JSON.parse(tags),
            content: JSON.stringify(parsedContent), 
            publicationDate,
            visibility,
            status,
            featuredImage: image,
            wordCount,
            readingTime
        });

        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).json({ error: error.message });
    }
};


// Get all blog posts
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single blog post by ID
 const getBlogById = async (req, res) => {
    try {
        const blogId = req.params.id;

        // Fetch blog post from Blog collection
        const blog = await Blog.findById(blogId).populate('author', 'username email'); // Populate author details

        if (!blog) {
            return res.status(404).json({ error: 'Blog not found' });
        }

        const tagIds = blog.tags;
        const tags = await Tag.find({ _id: { $in: tagIds } });

        const commentIds = blog.comments; 
        const comments = await Comment.find({ _id: { $in: commentIds } }).populate('user', 'username');
        const author = await User.findById(blog.author);

        const blogData = {
            _id: blog._id,
            title: blog.title,
            author: {
                _id: author._id,
                username: author.username,
                email: author.email
            },
            tags,
            comments,
            content: blog.content,
            publicationDate: blog.publicationDate,
            visibility: blog.visibility,
            status: blog.status,
            featuredImage: blog.featuredImage,
            wordCount: blog.wordCount,
            readingTime: blog.readingTime
        };

        res.json(blogData);
    } catch (error) {
        console.error('Error fetching blog:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update a blog post by ID
const updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a blog post by ID
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createBlog,
    getBlogById,
    getAllBlogs,
    deleteBlog,
    updateBlog
}