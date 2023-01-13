export const postLoadSuccessAction = (postList) => {
  return {
    type: 'post-load-success',
    postList,
  };
};

export const createPost = (newPost) => {
  return {
    type: 'post-create-success',
    newPost,
  };
};
