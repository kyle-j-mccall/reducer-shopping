export default function TimelinePost({
  post,
  handleSeen,
  handleDelete,
}) {
  return (
    <div>
      <input
        type="checkbox"
        checked={post.seen}
        onChange={handleSeen}
      />
      {post.item}
      <button
        className="delete-btn"
        onClick={() => handleDelete(post.id)}
      >
        delete
      </button>
    </div>
  );
}
