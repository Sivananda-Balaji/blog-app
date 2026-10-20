import { useNavigate } from "react-router-dom";

const PostItem = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div
      className="post-container"
      onClick={() => navigate(`/edit-post/${post.id}`)}
    >
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>
  );
};

export default PostItem;
