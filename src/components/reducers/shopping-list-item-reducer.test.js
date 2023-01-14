import {
  initialState,
  reducer,
} from '../../reducers/post-list-reducer';

import { createPost } from '../../actions/posts';

describe('shopping-list-item-reducer', () => {
  it('post load', () => {
    it('DOM is updated when new items are added', () => {
      const prevState = {
        ...initialState(),
        newPost: 'test post',
      };
      const newState = reducer(prevState, createPost('expect me'));
      expect(newState.newPost).toEqual('expect me');
    });
  });
});
