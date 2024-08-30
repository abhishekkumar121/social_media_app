const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// Create a new post
router.post("/", async (req, res) => {
  const { imageUrl, description } = req.body;
  const newPost = new Post({ imageUrl, description });
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add a comment to a post
router.post("/:id/comments", async (req, res) => {
  const { text } = req.body;
  try {
    const post = await Post.findById(req.params.id);
    post.comments.push({ text });
    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
