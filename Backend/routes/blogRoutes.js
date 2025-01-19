const express = require("express");
const multer = require("multer");
const {
  createBlogPost,
  getAllBlogPosts,
} = require("../controllers/blogController");
const Blog = require("../models/BlogPost"); // Import the Blog model

const router = express.Router();
const upload = multer({ dest: "uploads/" }); // Temporary file storage

// Route to create a blog post
router.post("/create", upload.single("photo"), createBlogPost);

// Route to get all blog posts
router.get("/", getAllBlogPosts);

// Route to get a specific blog post by ID
router.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id); // Example database query
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog' });
  }
});

module.exports = router;
