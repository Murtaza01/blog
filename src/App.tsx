import { useEffect } from "react";
import classes from "./App.module.css";
import { createPost } from "./utils/http";

function App() {
  useEffect(() => {
    const graphqlQuery = { query: "{ hello }" };
    (async () => {
      const data = await createPost(graphqlQuery);
      console.log(data.data);
    })();
  });
  return <h1 className={classes.center}>hello world</h1>;
}

export default App;
