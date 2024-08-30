const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  text: String,
});

const postSchema = new mongoose.Schema({
  imageUrl: String,
  description: String,
  comments: [commentSchema],
});

module.exports = mongoose.model("Post", postSchema);
