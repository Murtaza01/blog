import axios from "axios";

const URL = "http://localhost:4000/graphql";

export async function createPost(data: {}) {
  try {
    const res = await axios.post(URL, data);

    if (res.status !== 200) {
      throw Error("the server work, and it sent an error");
    }

    const resData = res.data;
    // check if the coming back data has errors
    if (resData.errors) {
      throw Error("this query doesn't exist in the backend");
    }

    return res.data;
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
  }
}
