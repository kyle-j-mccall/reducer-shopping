export default function TimelinePost({ post }) {
  return (
    <div>
      <input type="checkbox" value={post.complete} />
      {post.id}
      {post.item}
    </div>
  );
}
