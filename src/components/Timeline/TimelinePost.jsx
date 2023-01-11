export default function TimelinePost({ post, handleSeenChanged }) {
  return (
    <div>
      <input
        type="checkbox"
        value={post.seen}
        onChange={() => {
          handleSeenChanged(!post.seen);
        }}
      />
      {post.id}
      {post.body}
    </div>
  );
}
