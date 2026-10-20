const PostItem = ({ post }) => {
  return (
    <div className="post-container">
      <h4>{post.title}</h4>
      <p>{post.content}</p>
    </div>
  );
};

export default PostItem;
