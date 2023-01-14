import {
  initialState,
  reducer,
} from '../../reducers/post-list-reducer';

import { createPost } from '../../actions/posts';

describe('shopping-list-item-reducer', () => {
  it('DOM is updated when new items are added', () => {
    const prevState = {
      ...initialState(),
      postFormValue: 'test post',
    };
    const newState = reducer(prevState, createPost('expect me'));
    expect(newState.postFormValue).toEqual('expect me');
  });
});
