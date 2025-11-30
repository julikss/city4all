import { StarIcon } from "@heroicons/react/24/solid";

export default function StarRating({ value }) {
  return (
    <div className="rating-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon
          key={i}
          className={`rating-star ${i < value ? "filled" : ""}`}
        />
      ))}
    </div>
  );
}
