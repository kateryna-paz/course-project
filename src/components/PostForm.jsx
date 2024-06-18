import React, { useState } from "react";
import MyInput from "./ui/input/MyInput";
import MyButton from "./ui/button/MyButton";
import "../styles/PostForm.css";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", description: "" });

  function addNewPost(e) {
    e.preventDefault();

    const newPost = { ...post, id: Date.now() };
    create(newPost);
    setPost({ title: "", description: "" });
  }
  return (
    <form>
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        value={post.title}
        placeholder="Post name"
      />
      <MyInput
        type="text"
        onChange={(e) => setPost({ ...post, description: e.target.value })}
        value={post.description}
        placeholder="Post deccription"
      />
      <MyButton onClick={addNewPost}>Create New Post!</MyButton>
    </form>
  );
};

export default PostForm;
