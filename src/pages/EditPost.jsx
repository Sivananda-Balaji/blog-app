import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { PostContext } from "../contexts/PostContext";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { findPostById, updatePost } = useContext(PostContext);
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = findPostById(Number(postId));

  useEffect(() => {
    if (post) {
      reset({ title: post.title, content: post.content });
    }
  }, [post, reset]);

  const handleEditPost = (data) => {
    updatePost({ ...data, id: Number(postId) });
    navigate("/");
  };
  return (
    <div>
      <h3>Edit a Post</h3>
      <form onSubmit={handleSubmit(handleEditPost)}>
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
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
