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
  }
};
