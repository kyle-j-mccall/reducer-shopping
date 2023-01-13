import TimelinePost from './TimelinePost.jsx';

export default function TimelinePostList({ postList, handleSeen }) {
  return (
    <ol>
      {postList.map((post) => {
        return (
          <li key={post.id}>
            <TimelinePost
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
