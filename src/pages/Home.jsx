import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import PostItem from "../components/PostItem";

const Home = () => {
  const { posts } = useContext(PostContext);
  return (
    <div>
      <h3>Post List</h3>
      <ul className="post-list">
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
