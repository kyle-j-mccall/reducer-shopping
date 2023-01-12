import { useContext, useEffect } from 'react';
import { Context } from '../../PostListProvider.jsx';
import TimelinePostForm from '../Timeline/TimelinePostForm.jsx';
import TimelinePostList from '../Timeline/TimelinePostList.jsx';
import {
  createShoppingListItem,
  getShoppingListItems,
} from '../../services/shopping-list-items.js';
import {
  createPost,
  postLoadSuccessAction,
} from '../../actions/posts.js';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  console.log(state.postFormValue);

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

  return (
    <section>
      <h1>My Shopping List</h1>
      <TimelinePostForm
        onBodyChanged={onBodyChanged}
        body={state.postFormValue}
        onSubmit={async (body) => {
          await createShoppingListItem({ item: body });
        }}
      />
      <TimelinePostList postList={state.postList} />
    </section>
  );
}
