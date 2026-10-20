import { useState } from "react";
import { PostContext } from "./PostContext";

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The One",
      content: "This is one of the most searched post on the internet.",
    },
    {
      id: 2,
      title: "Top ten sites in USA",
      content: "Most Intertesting and cool sites to visit in USA.",
    },
  ]);
  const addPost = (newPost) => {
    const lastId = posts[posts.length - 1].id;
    setPosts((prev) => [...prev, { ...newPost, id: lastId + 1 }]);
  };
  const findPostById = (id) => posts.find((post) => post.id === id);
  const updatePost = (updatedPost) => {
    setPosts((prev) =>
      prev.map((post) => (post.id === updatedPost.id ? updatedPost : post)),
    );
  };
  return (
    <PostContext.Provider value={{ posts, addPost, findPostById, updatePost }}>
      {props.children}
    </PostContext.Provider>
  );
};
