import { useEffect } from "react";
import { createPost } from "./utils/http";
import classes from "./App.module.css";
import Post from "./components/Post";
import PostCard from "./components/PostCard";

function App() {
  useEffect(() => {
    const graphqlQuery = { query: "{ hello }" };
    (async () => {
      const data = await createPost(graphqlQuery);
      console.log(data ? data.data : "ops error");
    })();
  });
  return (
    <div className={classes.container}>
      <PostCard>
        <Post />
      </PostCard>
      <PostCard>
        <Post />
      </PostCard>
    </div>
  );
}

export default App;
