import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PostContext } from "../contexts/PostContext";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { addPost } = useContext(PostContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const handleCreatePost = (data) => {
    addPost(data);
    navigate("/");
  };
  return (
    <div>
      <h3>Create a New Post</h3>
      <form onSubmit={handleSubmit(handleCreatePost)}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must at least 3 character",
              },
            })}
          />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          <input
            type="text"
            id="content"
            {...register("content", {
              required: "Content is required",
              minLength: {
                value: 10,
                message: "Content must at least 10 characters.",
              },
            })}
          />
          {errors.content && <p>{errors.content.message}</p>}
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
