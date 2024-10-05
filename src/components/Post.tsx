import classes from "./Post.module.css";
import { PostType } from "../utils/types";
type props = {
  postData: PostType;
};
const Post = ({ postData }: props) => {
  const { content, title, author } = postData;

  return (
    <div className={classes.card}>
      <h1>{title}</h1>
      <span>August 12, 2024</span>
      <p>{content}</p>
      <h2>By: {author}</h2>
    </div>
  );
};

export default Post;
