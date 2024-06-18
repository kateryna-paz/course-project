import React from "react";
import Post from "./Post";

const ListPosts = ({ posts, title, remove }) => {
  const renderedPosts = posts.map((post, index) => {
    return (
      <Post remove={remove} number={index + 1} post={post} key={post.id} />
    );
  });

  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>The posts were not found!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>

      {renderedPosts}
    </div>
  );
};

export default ListPosts;
