import React, { useState, useEffect } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const addComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post._id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div className="App">
      <h1>Social Media App</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} addComment={addComment} />
    </div>
  );
}

export default App;
