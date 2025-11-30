import { StarIcon } from "@heroicons/react/24/solid";
import "./CommentDisplay.css";

export default function CommentDisplay({ comment }) {
  return (
    <li className="comment-display">
      <div className="comment-header">
        <span className="comment-username">{comment.username}</span>
        <span className="comment-date">{comment.date}</span>
      </div>
      <div className="comment-stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={`comment-star ${i < comment.rating ? "filled" : ""}`}
          />
        ))}
      </div>
      <div className="comment-text">{comment.text}</div>
    </li>
  );
}
