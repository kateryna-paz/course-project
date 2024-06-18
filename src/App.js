import React, { useState, useMemo } from "react";
// import Counter from "./components/Counter";
import ListPosts from "./components/ListPosts";
import PostForm from "./components/PostForm";
import MySelect from "./components/ui/select/MySelect";
import MyInput from "./components/ui/input/MyInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Hello 1", description: " Description" },
    { id: 2, title: "Java 2", description: " Sad" },
    { id: 3, title: "Script 3", description: " Clock" },
    { id: 4, title: "Pan 4", description: " Description 1" },
  ]);

  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    } else {
      return posts;
    }
  }, [filter.sort, posts]);

  const sortedSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="app">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />

      <PostFilter filter={filter} setFilter={setFilter} />

      <br style={{ margin: "15px 0" }} />

      <ListPosts
        remove={removePost}
        posts={sortedSearchedPosts}
        title="Posts about Java"
      />
    </div>
  );
}
export default App;
