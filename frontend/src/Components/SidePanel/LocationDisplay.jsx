import React from "react";
import AccessibilityList from "./AccessibilityList";
import StarRating from "./StarRating";
import CommentList from "./Comments/CommentList";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import "./LocationDisplay.css";

const LocationDisplay = React.forwardRef(
  (
    { point, openItem, setOpenItem, goToPoint, setSelectedId, openCommentForm },
    ref
  ) => {
    const isOpen = openItem === point.id;

    return (
      <div className="panel-item" ref={ref}>
        <div
          className="item-header"
          onClick={() => {
            setOpenItem(isOpen ? null : point.id);
            goToPoint(point);
            setSelectedId(point.id);
          }}
        >
          <div>
            <div className="item-title">{point.name}</div>
            <div className="item-address">{point.address}</div>
          </div>
          <span className={`plus-icon ${isOpen ? "open" : ""}`}>+</span>
        </div>
        {isOpen && (
          <div className="item-details">
            <AccessibilityList acc={point.accessibility} />
            <div className="rating-row">
              <StarRating value={Math.round(point.rating)} />
            </div>
            <div className="comments-header">
              <span>Коментарі: {point.comments.length}</span>
              <button
                className="add-comment-btn"
                onClick={() => openCommentForm(point)}
              >
                <PencilSquareIcon />
                <span>Додати</span>
              </button>
            </div>
            <CommentList comments={point.comments} />
          </div>
        )}
      </div>
    );
  }
);

export default LocationDisplay;
