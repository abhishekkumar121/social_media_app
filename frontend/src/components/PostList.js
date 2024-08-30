import React from "react";
import CommentForm from "./CommentForm";

function PostList({ posts, addComment }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} className="post">
          <img src={post.imageUrl} alt={post.description} />
          <p>{post.description}</p>
          <div>
            <h4>Comments:</h4>
            <ul>
              {post.comments.map((comment, index) => (
                <li key={index}>{comment.text}</li>
              ))}
            </ul>
            <CommentForm postId={post._id} addComment={addComment} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
