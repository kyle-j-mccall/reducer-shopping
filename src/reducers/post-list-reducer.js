export const initialState = () => {
  return {
    loadingMode: 'at-rest',
    postList: [],
    postFormValue: '',
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'post-load-success':
      return {
        ...state,
        postList: action.postList,
        loadingMode: 'success',
      };
    case 'post-create-success':
      return {
        ...state,
        postFormValue: action.newPost,
      };
    case 'post-seen-changed': {
      const postList = [...state.postList];
      const index = postList.findIndex(
        (post) => post.id === action.postId
      );
      postList[index] = {
        ...postList[index],
        seen: action.seen,
      };
      return {
        ...state,
        postList,
      };
    }
    case 'post-delete-success':
      return {
        ...state,
        postFormValue: action.postId,
      };
  }
};
