import React, { useState } from "react";
// import Counter from "./components/Counter";
import ListPosts from "./components/ListPosts";
import PostForm from "./components/PostForm";
import MySelect from "./components/ui/select/MySelect";
import MyInput from "./components/ui/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Hello 1", description: " Description" },
    { id: 2, title: "Java 2", description: " Sad" },
    { id: 3, title: "Script 3", description: " Clock" },
    { id: 4, title: "Pan 4", description: " Description 1" },
  ]);

  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="app">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />

      <div>
        <MyInput/>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort By"
          options={[
            { value: "title", name: "Title" },
            { value: "description", name: "Description" },
          ]}
          />
        </div>

      {posts.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>There are no posts yet.</h1>
      ) : (
        <ListPosts remove={removePost} posts={posts} title="Posts about Java" />
      )}
    </div>
  );
}
export default App;
