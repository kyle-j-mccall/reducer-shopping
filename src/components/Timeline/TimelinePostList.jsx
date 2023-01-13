import TimelinePost from './TimelinePost.jsx';

// eslint-disable-next-line max-len
export default function TimelinePostList({
  postList,
  handleSeen,
  handleDelete,
}) {
  return (
    <ol>
      {postList.map((post) => {
        return (
          <li key={post.id}>
            <TimelinePost
              handleDelete={handleDelete}
              checked={post.seen}
              handleSeen={(seen) => {
                handleSeen(post.id, seen);
              }}
              post={post}
            />
          </li>
        );
      })}
    </ol>
  );
}
