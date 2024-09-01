import {  Params, useLoaderData } from "react-router-dom"

type LoaderParams = {
  params:Params<'postId'>
}

const PostRoute = ()=> {
  const data = useLoaderData()

  console.log(data);

  return <h1>this is the params :</h1>
}

export default PostRoute

export async function loader({params}:LoaderParams){
  // const post = await getPost(params);
  //  return { post }
  console.log(params.postId);
  return null
}
