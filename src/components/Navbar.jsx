import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/create-post">Create Post</Link>
      <Link to="/edit-post/1">Edit Post</Link>
    </div>
  );
};

export default Navbar;
