import { createPost, getPosts } from "../utils/http";
import classes from "./Root.module.css";
import Post from "../components/Post";
import { useQuery } from "@tanstack/react-query";
import { PostData } from "../utils/types";
import { Empty } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import {  Spin } from "antd";
import { Link } from "react-router-dom";
import { Key } from "react";

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

  const postData: PostData = data;

  const posts = postData.data.getPosts
  
  async function handleClick() {
    const data = {
      content: "this is very new ",
      title: "this is a new title",
      author: "gay",
    };
    const res = await createPost(data);

    console.log(res);
  }
  return (
    <div className={classes.container}>
      {posts.map((postData)=>{
        return <Link to={`post/${postData._id}`} key={postData._id as Key}>
          <Post postData={postData}/>
          </Link>
      })}
        <button onClick={handleClick}>Add new Blog</button>

      </div>
  );
}

export default Root;
