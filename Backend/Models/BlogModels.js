// blogData.js
const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming you have a User model for authors
        required: true,
    },
    publicationDate: {
        type: Date,
        default: Date.now,
    },
    lastUpdatedDate: {
        type: Date,
    },
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tag',
    }],
    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'draft',
    },
    status: {
        type: String,
        enum: ['published', 'draft', 'archived'],
        default: 'draft',
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
    }],
    // featuredImage: {
    //     type: String,
    // },
    relatedPosts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
    }],
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    wordCount: {
        type: Number,
        default: function () {
            // Calculate word count based on content
            return this.content.split(/\s+/).length;
        }
    },
    readingTime: {
        type: Number,
        default: function () {
            // Calculate reading time based on average reading speed (e.g., 200 words per minute)
            return Math.ceil(this.wordCount / 200);
        }
    },
});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;
