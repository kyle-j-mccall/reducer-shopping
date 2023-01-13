export default function TimelinePost({ post, handleSeen }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={post.seen}
        onChange={() => handleSeen(!post.seen)}
      />
      {post.id}
      {post.item}
    </div>
  );
}
