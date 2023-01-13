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

export const postSeenChanged = (postId, seen) => {
  return {
    type: 'post-seen-changed',
    postId,
    seen,
  };
};
export const postDeleteSuccess = (postId) => {
  return {
    type: 'post-delete-success',
    postId,
  };
};
