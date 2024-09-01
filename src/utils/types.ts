export type Post = {
  author: String;
  _id?: String;
  title: String;
  content: String;
};

export type postData = {
  data: {
    getPosts: [Post];
  };
};
