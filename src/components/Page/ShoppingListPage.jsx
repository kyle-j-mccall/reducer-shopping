import { useContext, useEffect } from 'react';
import { Context } from '../../PostListProvider.jsx';
import TimelinePostForm from '../Timeline/TimelinePostForm.jsx';
import TimelinePostList from '../Timeline/TimelinePostList.jsx';
import {
  createShoppingListItem,
  deleteShoppingItem,
  getShoppingListItems,
  updateShoppingItem,
} from '../../services/shopping-list-items.js';
import {
  createPost,
  postDeleteSuccess,
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

  const handleSeen = async (post, seen) => {
    dispatch(postSeenChanged(post.id, seen));

    await updateShoppingItem(post.id, {
      ...post,
      seen: !post.seen,
    });
  };

  const handleDelete = async (postId) => {
    deleteShoppingItem(postId);

    dispatch(postDeleteSuccess(postId));
  };

  return (
    <section>
      <h1>My Shopping List</h1>
      <TimelinePostForm
        onBodyChanged={onBodyChanged}
        body={state.postFormValue}
        onSubmit={async (body) => {
          await createShoppingListItem({ item: body });
          dispatch(createPost(''));
          getPostEffect(dispatch);
        }}
      />
      <TimelinePostList
        postList={state.postList}
        handleDelete={handleDelete}
        handleSeen={(post, seen) => {
          handleSeen(post, seen);
        }}
      />
    </section>
  );
}
