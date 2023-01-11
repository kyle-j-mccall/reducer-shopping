import { useContext } from 'react';
import { Context } from '../../PostListProvider.jsx';
import TimelinePostForm from '../Timeline/TimelinePostForm.jsx';
import TimelinePostList from '../Timeline/TimelinePostList.jsx';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);

  return (
    <section>
      <h1>My Shopping List</h1>
      <TimelinePostForm />
      <TimelinePostList postList={state.postList} />
    </section>
  );
}
