import { useContext, useEffect } from 'react';
import { Context } from '../../PostListProvider.jsx';
import TimelinePostForm from '../Timeline/TimelinePostForm.jsx';
import TimelinePostList from '../Timeline/TimelinePostList.jsx';
import {
  createShoppingListItem,
  getShoppingListItems,
  updateShoppingItem,
} from '../../services/shopping-list-items.js';
import {
  createPost,
  postLoadSuccessAction,
  postSeenChanged,
} from '../../actions/posts.js';
import { getPostEffect } from '../../effects/post-list-effect.js';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getShoppingListItems();
      const action = postLoadSuccessAction(items);
      dispatch(action);
    };
    fetchItems();
  }, []);

  const onBodyChanged = (body) => {
    dispatch(createPost(body));
  };

  const handleSeen = (postId, seen) => {
    dispatch(postSeenChanged(postId, seen));
  };

  return (
    <section>
      <h1>My Shopping List</h1>
      <TimelinePostForm
        onBodyChanged={onBodyChanged}
        body={state.postFormValue}
        onSubmit={async (body) => {
          await createShoppingListItem({ item: body });
          getPostEffect(dispatch);
        }}
      />
      <TimelinePostList
        postList={state.postList}
        handleSeen={(postId, seen) => {
          handleSeen(postId, seen);
          state.postList.map((post) => {
            if (postId === post.id) {
              updateShoppingItem(post.id, {
                ...post,
                seen: !post.seen,
              });
            }
          });
          getPostEffect(dispatch);
        }}
      />
    </section>
  );
}
