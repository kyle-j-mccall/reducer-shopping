import TimelinePost from './TimelinePost.jsx';

export default function TimelinePostList({ postList }) {
  console.log('postlist', postList);
  return (
    <ol>
      {postList.map((post) => {
        return (
          <li key={post.id}>
            <TimelinePost post={post} />
          </li>
        );
      })}
    </ol>
  );
}
