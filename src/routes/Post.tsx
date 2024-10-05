import { Params, useLoaderData } from "react-router-dom";
import { getPost } from "../utils/http";

type LoaderParams = {
  params: Params<"postId">;
};
type PostData = {
  data: {
    getPost: {
      author: string;
      content: string;
      title: string;
      _id: string;
    };
  };
};
const PostRoute = () => {
  const data = useLoaderData() as PostData;

  const { title, content, author } = data.data.getPost;

  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
      <h2>{author}</h2>
    </>
  );
};

export default PostRoute;

export async function loader({ params }: LoaderParams) {
  const post = await getPost(params);
  return post;
}
