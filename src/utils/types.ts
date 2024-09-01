export type PostType = {
  author: String;
  _id?: String;
  title: String;
  content: String;
};

export type PostData = {
  data: {
    getPosts: [PostType];
  };
};
