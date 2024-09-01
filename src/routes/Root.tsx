
import { createPost, getPosts } from "../utils/http";
import classes from "./Root.module.css";
import Post from "../components/Post";
import { useQuery } from "@tanstack/react-query";
import { postData } from "../utils/types";
import { Empty } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import {  Spin } from "antd";

function Root() {
  const { data, isError, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isPending) {
    return (
      <div className={classes.center}>
        <Spin indicator={<LoadingOutlined spin style={{ fontSize: 64 }} />}/>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={classes.center}>
        <Empty />
      </div>
    );
  }

  const posts: postData = data;
  console.log(posts.data.getPosts);

  async function handleClick() {
    const data = {
      content: "another ",
      title: "one",
      author: "from frontend",
    };
    const res = await createPost(data);

    console.log(res);
  }
  return (
    <div className={classes.container}>
      <Post />
      <Post />
      <button onClick={handleClick}>Add new Blog</button>
    </div>
  );
}

export default Root;
