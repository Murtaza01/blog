import axios from "axios";
import { PostType } from "./types";
import { Params } from "react-router-dom";

const URL = "http://localhost:4000/graphql";

export async function createPost(data: PostType ) {
  const queryData = {
    query: `mutation {
      createPost(data:{
      content:"${data.content}",
      title:"${data.title}",
      author:"${data.author}"
      }) 
      {
        title
        author
        content
        _id
      } 
    }`,
  };

  const res = await axios.post(URL, queryData);

  if (res.status !== 200) {
    throw Error("the server work, and it sent an error");
  }

  const resData = res.data;
  // check if the coming back data has errors
  if (resData.errors) {
    throw Error("this query doesn't exist in the backend");
  }

  return res.data;
}

export async function getPosts() {
  const queryData = {
    query: `{
      getPosts{
        author
        _id
        title
        content
      }
    }`,
  };
  const res = await axios.post(URL, queryData);

  if (res.status !== 200) {
    throw Error("the server work, and it sent an error");
  }

  const resData = res.data;
  // check if the coming back data has errors
  if (resData.errors) {
    throw Error("this query doesn't exist in the backend");
  }

  return res.data;
}

export async function getPost({postId}:Params){
  const queryData = {
    query:`{
   getPost(id:"${postId}"){
    author
    title
    content
    _id
  }
}` 
  };
  const res = await axios.post(URL, queryData);

  if (res.status !== 200) {
    throw Error("the server work, and it sent an error");
  }

  const resData = res.data;
  // check if the coming back data has errors
  if (resData.errors) {
    throw Error("this query doesn't exist in the backend");
  }


  return res.data;
 
}
