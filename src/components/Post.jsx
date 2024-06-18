import React from "react";
import "../styles/Post.css";
import MyButton from "./ui/button/MyButton";

const Post = ({ post, number, remove }) => {
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {number}. {post.title}
        </strong>
        <div> {post.description} </div>
      </div>
      <div className="post-btn">
        <MyButton
          onClick={() => {
            remove(post);
          }}
        >
          Delete
        </MyButton>
      </div>
    </div>
  );
};

export default Post;
