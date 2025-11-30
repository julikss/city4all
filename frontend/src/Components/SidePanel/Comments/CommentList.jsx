import CommentDisplay from "./CommentDisplay";

export default function CommentList({ comments }) {
  return (
    <ul className="comment-list">
      {comments.map((c) => (
        <CommentDisplay key={c.id} comment={c} />
      ))}
    </ul>
  );
}
