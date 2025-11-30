import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import "./CommentForm.css";

export default function CommentForm({ point, onClose }) {
  const [text, setText] = useState("");
  const [rate, setRate] = useState(0);

  const submit = () => {
    point.comments.push({
      id: Date.now(),
      text,
      rating: rate,
      username: "Користувач",
      date: new Date().toLocaleDateString("uk-UA")
    });

    point.rating =
      point.comments.reduce((s, c) => s + c.rating, 0) /
      point.comments.length;

    onClose();
  };

  return (
    <div className="comment-form">
      <div className="form-inner">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введіть ваш коментар..."
        />
        <div className="stars-select">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className={`star-select ${i < rate ? "selected" : ""}`}
              onClick={() => setRate(i + 1)}
            />
          ))}
        </div>
        <button className="button-primary form-btn" onClick={submit}>
          Зберегти
        </button>
        <button className="button-cancel form-btn" onClick={onClose}>
          Відмінити
        </button>
      </div>
    </div>
  );
}
