import React, { useState } from "react";

function CommentForm({ postId, addComment }) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:8000/posts/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: comment }),
      }
    );
    const updatedPost = await response.json();
    addComment(postId, updatedPost.comments[updatedPost.comments.length - 1]);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        required
      />
      <button type="submit">Comment</button>
    </form>
  );
}

export default CommentForm;
