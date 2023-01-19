import { createContext, useReducer } from 'react';

import { initialState, reducer } from './reducers/post-list-reducer';

export const Context = createContext({
  state: initialState(),
  reducer,
});

export const PostListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());

  const contextObj = { state, dispatch };

  return (
    <Context.Provider value={contextObj}>{children}</Context.Provider>
  );
};
